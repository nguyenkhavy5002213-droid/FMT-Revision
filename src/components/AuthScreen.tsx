import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Mail, ArrowRight, ShieldCheck, Loader2, AlertTriangle } from 'lucide-react';

export function AuthScreen() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, authError, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    clearError();
    
    try {
      await login(email);
    } catch (error: any) {
      console.error("Lỗi đăng nhập:", error);
      // authError is already set by the context, but we can also alert for immediate feedback
      // alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
            Đăng nhập hệ thống
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-8 text-sm">
            Hệ thống quản lý học tập chuyên nghiệp. Vui lòng đăng nhập bằng email để tiếp tục.
          </p>

          {authError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-200">{authError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Địa chỉ Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 dark:disabled:bg-slate-700 transition-colors"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Đang kiểm tra...</>
              ) : (
                <>Đăng nhập <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-500" />
              <p>
                Hệ thống áp dụng chính sách bảo mật: <strong>1 tài khoản - 1 thiết bị</strong>. 
                Đăng nhập trên thiết bị mới sẽ tự động đăng xuất khỏi thiết bị cũ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
