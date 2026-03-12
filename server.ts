import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';

const DATA_FILE = path.join(process.cwd(), 'data.json');

async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return { sheetUrl: '', sessions: {} };
  }
}

async function writeData(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// --- Caching Mechanism for Google Sheet ---
let cachedEmails: string[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 30 * 1000; // Cache for 30 seconds to avoid rate limits but stay responsive

async function getAllowedEmails(sheetUrl: string): Promise<string[]> {
  if (!sheetUrl) return [];
  
  if (Date.now() - lastFetchTime < CACHE_DURATION) {
    return cachedEmails;
  }

  try {
    let fetchUrl = '';
    const dMatch = sheetUrl.match(/\/d\/(.*?)(?:\/|$|\?)/);
    const eMatch = sheetUrl.match(/\/d\/e\/(.*?)(?:\/|$|\?)/);
    
    if (eMatch) {
      // Published to web format
      fetchUrl = `https://docs.google.com/spreadsheets/d/e/${eMatch[1]}/pub?output=csv&t=${Date.now()}`;
    } else if (dMatch) {
      // Standard shared link format
      fetchUrl = `https://docs.google.com/spreadsheets/d/${dMatch[1]}/gviz/tq?tqx=out:csv&t=${Date.now()}`;
    }

    if (fetchUrl) {
      console.log('Fetching emails from:', fetchUrl);
      const response = await fetch(fetchUrl);
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
          console.error('Google Sheet is not public or URL is incorrect (returned HTML)');
          // If we have no cache, we might want to know it failed
          if (cachedEmails.length === 0) {
             console.log('No cached emails available.');
          }
          return cachedEmails;
        }
        
        const csvText = await response.text();
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const matches = csvText.toLowerCase().match(emailRegex) || [];
        const uniqueEmails = [...new Set(matches.map(e => e.trim()))];
        
        console.log(`Successfully fetched ${uniqueEmails.length} unique emails.`);
        cachedEmails = uniqueEmails;
        lastFetchTime = Date.now();
        return cachedEmails;
      } else {
        console.error('Fetch failed with status:', response.status);
      }
    } else {
      console.error('Could not extract Sheet ID from URL:', sheetUrl);
    }
  } catch (error) {
    console.error('Error fetching sheet:', error);
  }
  return cachedEmails;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/settings/emails', async (req, res, next) => {
    try {
      const data = await readData();
      if (!data.sheetUrl) return res.json({ emails: [] });
      const emails = await getAllowedEmails(data.sheetUrl);
      res.json({ emails });
    } catch (e) {
      next(e);
    }
  });

  app.get('/api/settings/sheet', async (req, res, next) => {
    try {
      const data = await readData();
      res.json({ url: data.sheetUrl || '' });
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/settings/sheet', async (req, res, next) => {
    try {
      const { url } = req.body;
      const data = await readData();
      data.sheetUrl = url;
      await writeData(data);
      
      // Invalidate cache when sheet URL changes
      lastFetchTime = 0;
      
      res.json({ success: true });
    } catch (e) {
      next(e);
    }
  });

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'nguyenkhavy5002213@gmail.com';

  app.post('/api/auth/login', async (req, res, next) => {
    try {
      const { email } = req.body;
      if (!email) return res.status(400).json({ error: 'Email is required' });
      
      const normalizedEmail = email.toLowerCase().trim();
      const isAdmin = normalizedEmail === ADMIN_EMAIL.toLowerCase().trim();
      let isAllowed = isAdmin;

      const data = await readData();

      if (!isAdmin) {
        if (!data.sheetUrl) {
          console.log(`Login denied for ${normalizedEmail}: Sheet URL not configured.`);
          return res.json({ success: false, error: 'Hệ thống chưa được cấu hình danh sách email. Vui lòng liên hệ Quản trị viên để thiết lập Google Sheet.' });
        }
        
        const allowedEmails = await getAllowedEmails(data.sheetUrl);
        isAllowed = allowedEmails.includes(normalizedEmail);
        
        if (!isAllowed) {
          console.log(`Login denied for ${normalizedEmail}: Not in sheet. Sheet has ${allowedEmails.length} emails.`);
          // Log first few emails for debugging (don't log all for privacy)
          console.log('Sample allowed emails:', allowedEmails.slice(0, 3));
        }
      }

      if (!isAllowed) {
        return res.json({ success: false, error: 'Email của bạn chưa có trong danh sách được phép. Vui lòng liên hệ Quản trị viên.' });
      }

      // Generate session token to enforce 1-device policy
      const token = Date.now().toString(36) + Math.random().toString(36).substring(2);
      if (!data.sessions) data.sessions = {};
      data.sessions[normalizedEmail] = {
        token,
        lastActive: Date.now()
      };
      await writeData(data);

      res.json({ success: true, email: normalizedEmail, token, isAdmin });
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/auth/verify', async (req, res, next) => {
    try {
      const { email, token } = req.body;
      if (!email || !token) return res.json({ valid: false });
      
      const normalizedEmail = email.toLowerCase().trim();
      const data = await readData();
      
      // 1. Check 1-device policy (session token match)
      if (!data.sessions || !data.sessions[normalizedEmail] || data.sessions[normalizedEmail].token !== token) {
        return res.json({ valid: false, reason: 'device_conflict' });
      }
      
      // Update last active time
      data.sessions[normalizedEmail].lastActive = Date.now();
      await writeData(data);
      
      // 2. Continuous check: ensure email is STILL in the Google Sheet
      const isAdmin = normalizedEmail === ADMIN_EMAIL.toLowerCase().trim();
      if (!isAdmin && data.sheetUrl) {
        const allowedEmails = await getAllowedEmails(data.sheetUrl);
        if (!allowedEmails.includes(normalizedEmail)) {
          // Email was removed from the sheet! Revoke session.
          delete data.sessions[normalizedEmail];
          await writeData(data);
          return res.json({ valid: false, reason: 'removed_from_sheet' });
        }
      }

      res.json({ valid: true });
    } catch (e) {
      next(e);
    }
  });

  app.post('/api/auth/logout', async (req, res, next) => {
     try {
       const { email } = req.body;
       const data = await readData();
       if (email && data.sessions && data.sessions[email]) {
         delete data.sessions[email];
         await writeData(data);
       }
       res.json({ success: true });
     } catch (e) {
       next(e);
     }
  });

  app.get('/api/admin/active-users', async (req, res, next) => {
    try {
      // Basic check for admin email in headers (for simplicity, real apps should use proper auth middleware)
      const adminEmail = req.headers['x-admin-email'];
      if (adminEmail !== ADMIN_EMAIL) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      const data = await readData();
      const sessions = data.sessions || {};
      const activeUsers = Object.entries(sessions).map(([email, session]: [string, any]) => ({
        email,
        lastActive: session.lastActive
      })).sort((a, b) => b.lastActive - a.lastActive);

      res.json({ activeUsers });
    } catch (e) {
      next(e);
    }
  });

  // Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Global Error Handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.' });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
