import {  type ReactNode } from "react";
import { Navigate } from "react-router-dom";

/**
 * Protected Route Component
 *
 * این کامپوننت جلوی دسترسی به صفحات محافظت شده رو می‌گیره
 * اگر کاربر لاگین نباشه، به صفحه لاگین هدایت میشه
 *
 * TODO: این رو با useAuth جایگزین کن وقتی AuthContext ساخته شد
 *
 * @param children - کامپوننت‌هایی که باید رندر بشن اگر کاربر لاگین باشه
 * @param fallbackPath - مسیر هدایت در صورت عدم احراز هویت (پیش‌فرض: /superadmin-login)
 */
interface ProtectedRouteProps {
  children: ReactNode;
  fallbackPath?: string;
}

export default function ProtectedRoute({
  children,
  fallbackPath = "/superadmin-login",
}: ProtectedRouteProps) {
  // TODO: این رو با useAuth جایگزین کن
  // const { isAuthenticated } = useAuth();

  // TODO: حذف کردن کد mock و استفاده از کد واقعی پایین
  // if (!isAuthenticated) {
  //   return <Navigate to={fallbackPath} replace />;
  // }

  // ---- کد تستی (Mock) ----
  // برای تست بدون بکند - حذف کن وقتی بکند اضافه شد
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}