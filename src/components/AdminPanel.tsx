import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Link as LinkIcon, CheckCircle2, X, AlertCircle, RefreshCw } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const { isAdmin } = useAuth();
  const [sheetUrl, setSheetUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [testResult, setTestResult] = useState<{ count: number; emails: string[] } | null>(null);
  const [activeUsers, setActiveUsers] = useState<{ email: string; lastActive: number }[]>([]);
  const [isTesting, setIsTesting] = useState(false);
  const [activeTab, setActiveTab] = useState<'whitelist' | 'active'>('whitelist');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isAdmin) return;

    // Load existing settings and active users
    const loadData = async () => {
      try {
        // Load sheet URL
        const resSheet = await fetch('/api/settings/sheet');
        const dataSheet = await resSheet.json();
        if (dataSheet.url) {
          setSheetUrl(dataSheet.url);
          fetchEmails();
        } else {
          setSheetUrl('https://docs.google.com/spreadsheets/d/1Nqd43yAtTjbPySERlJu_82aqGfyH1yoUTq54X8pI_cw/edit?usp=sharing');
        }

        // Load active users
        fetchActiveUsers();
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
    
    const interval = setInterval(fetchActiveUsers, 10000); // Refresh active users every 10s
    return () => clearInterval(interval);
  }, [isAdmin]);

  const fetchActiveUsers = async () => {
    try {
      const authUser = localStorage.getItem('authUser');
      if (!authUser) return;
      const { email } = JSON.parse(authUser);
      
      const res = await fetch('/api/admin/active-users', {
        headers: { 'x-admin-email': email }
      });
      const data = await res.json();
      if (data.activeUsers) {
        setActiveUsers(data.activeUsers);
      }
    } catch (error) {
      console.error("Error fetching active users:", error);
    }
  };

  const fetchEmails = async () => {
    setIsTesting(true);
    try {
      const res = await fetch('/api/settings/emails');
      const data = await res.json();
      if (data.emails) {
        setTestResult({
          count: data.emails.length,
          emails: data.emails
        });
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    } finally {
      setIsTesting(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sheetUrl) return;

    setIsSaving(true);
    setSaveStatus('idle');

    try {
      const res = await fetch('/api/settings/sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: sheetUrl })
      });
      if (res.ok) {
        setSaveStatus('success');
        await fetchEmails(); // Refresh list after save
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error("Error saving sheet ID:", error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const filteredEmails = testResult?.emails.filter(email => 
    email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (!isAdmin) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Bảng Quản Trị
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Quản lý hệ thống và theo dõi người dùng.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 px-6 bg-white dark:bg-slate-800">
          <button
            onClick={() => setActiveTab('whitelist')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'whitelist'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Danh sách Whitelist
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'active'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Người dùng đang truy cập
            {activeUsers.length > 0 && (
              <span className="ml-2 px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-[10px] rounded-full">
                {activeUsers.length}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {activeTab === 'whitelist' ? (
            <>
              <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800 dark:text-amber-200">
                  <p className="font-bold mb-1">Hướng dẫn thiết lập:</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Tạo một file Google Sheet và nhập danh sách email vào bất kỳ cột nào.</li>
                    <li>Bấm nút <strong>Chia sẻ (Share)</strong> ở góc trên bên phải của Sheet.</li>
                    <li>Đổi quyền truy cập chung thành <strong>Bất kỳ ai có liên kết (Anyone with the link)</strong> và chọn vai trò là <strong>Người xem (Viewer)</strong>.</li>
                    <li>Copy link của Sheet đó và dán vào ô bên dưới.</li>
                  </ol>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Link Google Sheet
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="url"
                      required
                      value={sheetUrl}
                      onChange={(e) => setSheetUrl(e.target.value)}
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSaving || !sheetUrl}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors disabled:opacity-50"
                  >
                    {isSaving ? 'Đang lưu...' : 'Lưu & Đồng Bộ'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={fetchEmails}
                    disabled={isTesting || !sheetUrl}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-medium transition-colors disabled:opacity-50"
                  >
                    {isTesting ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Làm mới danh sách'}
                  </button>
                </div>
              </form>

              {saveStatus === 'success' && (
                <div className="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5" />
                  Đã lưu cấu hình thành công!
                </div>
              )}

              {testResult && (
                <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Danh sách email hợp lệ ({testResult.count})
                    </h3>
                    <div className="relative w-48">
                      <input
                        type="text"
                        placeholder="Tìm email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700 max-h-64 overflow-y-auto">
                    {filteredEmails.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {filteredEmails.map((email, idx) => (
                          <span key={idx} className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                            {email}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-4">
                        {searchTerm ? 'Không tìm thấy email nào khớp.' : 'Danh sách trống.'}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Phiên đăng nhập đang hoạt động ({activeUsers.length})
                </h3>
                <button 
                  onClick={fetchActiveUsers}
                  className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                  title="Làm mới"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {activeUsers.length > 0 ? (
                  activeUsers.map((u, idx) => {
                    const lastActiveDate = new Date(u.lastActive);
                    const isOnline = Date.now() - u.lastActive < 60000; // Active in last 1 min
                    
                    return (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-400'}`}></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{u.email}</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              Hoạt động lần cuối: {lastActiveDate.toLocaleTimeString()} {lastActiveDate.toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isOnline ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                          {isOnline ? 'TRỰC TUYẾN' : 'NGOẠI TUYẾN'}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Shield className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>Không có người dùng nào đang hoạt động.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
