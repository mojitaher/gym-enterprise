export enum PASSWORD_STRENGTH_ENUM {
  weak = "weak",
  medium = "medium",
  strong = "strong",
}

export type PASSWORD_STRENGTH = keyof typeof PASSWORD_STRENGTH_ENUM;

export const PASSWORD_CRITERIA: Array<{
  key: string;
  label: string;
  test: (password: string) => boolean;
}> = [
  { key: "length8", label: "8+ characters", test: (password) => password.length >= 8 },
  { key: "length12", label: "12+ characters", test: (password) => password.length >= 12 },
  { key: "lowercase", label: "lowercase", test: (password) => /[a-z]/.test(password) },
  { key: "uppercase", label: "uppercase", test: (password) => /[A-Z]/.test(password) },
  { key: "number", label: "number", test: (password) => /\d/.test(password) },
  {
    key: "special",
    label: "special character",
    test: (password) => /[^A-Za-z0-9]/.test(password),
  },
];

/**
 * قدرت رمز را بر اساس همان معیارهای چک‌لیست محاسبه می‌کند (هر معیار = ۱ امتیاز).
 * رمز خالی → null.
 * 8+ با lowercase فقط → weak (۲ امتیاز)
 * 8+ با lowercase + uppercase + number → medium (۴ امتیاز)
 * 12+ با lowercase + uppercase + number + special → strong (۶ امتیاز)
 *
 * آستانه‌ها: ≤۲ weak | ۳–۴ medium | ۵–۶ strong
 */
export const computePasswordStrength = (
  password: string
): PASSWORD_STRENGTH | null => {
  if (!password) return null;

  const passed = PASSWORD_CRITERIA.filter((rule) => rule.test(password)).length;

  if (passed <= 2) return PASSWORD_STRENGTH_ENUM.weak;
  if (passed <= 4) return PASSWORD_STRENGTH_ENUM.medium;
  return PASSWORD_STRENGTH_ENUM.strong;
};