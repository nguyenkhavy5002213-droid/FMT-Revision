import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  email: string;
  token: string;
  subjectId: string;
  subjectName?: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  login: (email: string, password: string, subjectId: string) => Promise<void>;
  logout: () => Promise<void>;
  authError: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearError = () => setAuthError(null);

  useEffect(() => {
    const checkSession = async () => {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        try {
          const res = await fetch('/api/auth/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: parsedUser.email, token: parsedUser.token, subjectId: parsedUser.subjectId })
          });
          
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await res.json();
            if (data.valid) {
              const updatedUser = { ...parsedUser, subjectName: data.subjectName || parsedUser.subjectName };
              setUser(updatedUser);
              localStorage.setItem('authUser', JSON.stringify(updatedUser));
              setIsAdmin(data.isAdmin || parsedUser.email === 'nguyenkhavy5002213@gmail.com');
            } else {
              localStorage.removeItem('authUser');
              setAuthError('Tài khoản của bạn đã được đăng nhập trên một thiết bị khác.');
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
      setLoading(false);
    };

    checkSession();

    // Poll every 5 seconds to check if session is still valid (1 device policy)
    const interval = setInterval(async () => {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        try {
          const res = await fetch('/api/auth/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: parsedUser.email, token: parsedUser.token, subjectId: parsedUser.subjectId })
          });
          
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await res.json();
            if (!data.valid) {
              setUser(null);
              setIsAdmin(false);
              localStorage.removeItem('authUser');
              
              if (data.reason === 'removed_from_sheet') {
                setAuthError('Email của bạn đã bị xóa khỏi danh sách cho phép. Bạn đã bị đăng xuất.');
              } else {
                setAuthError('Tài khoản của bạn đã được đăng nhập trên một thiết bị khác. Bạn đã bị đăng xuất.');
              }
            } else {
              setIsAdmin(data.isAdmin || parsedUser.email === 'nguyenkhavy5002213@gmail.com');
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const login = async (email: string, password: string, subjectId: string) => {
    clearError();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, subjectId })
      });
      
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        console.error('Non-JSON response:', text);
        throw new Error('Máy chủ gặp sự cố (không trả về JSON). Vui lòng thử lại sau.');
      }

      const data = await res.json();
      if (!res.ok || data.success === false) {
        throw new Error(data.error || 'Lỗi đăng nhập');
      }

      const newUser = { email: data.email, token: data.token, subjectId: data.subjectId, subjectName: data.subjectName };
      localStorage.setItem('authUser', JSON.stringify(newUser));
      setUser(newUser);
      setIsAdmin(data.isAdmin);
    } catch (err: any) {
      setAuthError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    if (user) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, subjectId: user.subjectId })
      });
    }
    localStorage.removeItem('authUser');
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout, authError, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};
