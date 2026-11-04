import { REPORT_DETAIL_ENUMS } from "../enums/reportDetailEnums";

export const MOCK_REPORT_DETAILS_DATA = [
  {
    id: "report-1",
    reportType: "technical",
    role: REPORT_DETAIL_ENUMS.TRAINER,
    username: "علی محمدی",
    avatar: "/images/default-avatar.png",
    info: "مشکل در ورود به حساب کاربری",
  },
  {
    id: "report-2",
    reportType: "technical",
    role: REPORT_DETAIL_ENUMS.COACH,
    username: "رضا احمدی",
    avatar: "/images/default-avatar.png",
    info: "خطا هنگام ثبت برنامه تمرینی",
  },
  {
    id: "report-3",
    reportType: "account",
    role: REPORT_DETAIL_ENUMS.MANAGER,
    username: "مهدی کریمی",
    avatar: "/images/default-avatar.png",
    info: "درخواست ویرایش اطلاعات باشگاه",
  },
  {
    id: "report-4",
    reportType: "payment",
    role: REPORT_DETAIL_ENUMS.TRAINER,
    username: "سارا رضایی",
    avatar: "/images/default-avatar.png",
    info: "مشکل در پرداخت اشتراک",
  },
  {
    id: "report-5",
    reportType: "other",
    role: REPORT_DETAIL_ENUMS.COACH,
    username: "امیر حسینی",
    avatar: "/images/default-avatar.png",
    info: "درخواست بررسی امکانات باشگاه",
  },
];