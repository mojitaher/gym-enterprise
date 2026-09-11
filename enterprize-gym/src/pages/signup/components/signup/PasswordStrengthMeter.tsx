import clsx from "clsx";

import {
  computePasswordStrength,
  PASSWORD_STRENGTH_ENUM,
} from "../../../../shared/utils/passwordStrength";
import type { PASSWORD_STRENGTH } from "../../../../shared/utils/passwordStrength";

import Classes from "../../style/signup.module.css";

const TOTAL_BLOCKS = 12;

const STRENGTH_META: Record<
  PASSWORD_STRENGTH,
  { label: string; filled: number; blockClass: string }
> = {
  [PASSWORD_STRENGTH_ENUM.weak]: {
    label: "ضعیف",
    filled: 4,
    blockClass: Classes.weakBlock,
  },
  [PASSWORD_STRENGTH_ENUM.medium]: {
    label: "متوسط",
    filled: 8,
    blockClass: Classes.mediumBlock,
  },
  [PASSWORD_STRENGTH_ENUM.strong]: {
    label: "قوی",
    filled: 12,
    blockClass: Classes.strongBlock,
  },
};

function PasswordStrengthMeter({ password }: { password: string }) {
  const strength = computePasswordStrength(password);
  if (!strength) return null;

  const { label, filled, blockClass } = STRENGTH_META[strength];

  return (
    <div className={Classes.strengthRow}>
      <div className={Classes.strengthBar} dir="ltr">
        {Array.from({ length: TOTAL_BLOCKS }, (_, index) => (
          <span
            key={index}
            className={clsx(
              Classes.strengthBlock,
              index < filled ? blockClass : Classes.strengthBlockOff
            )}
          />
        ))}
      </div>
      <span className={Classes.strengthLabel}>{label}</span>
    </div>
  );
}

export default PasswordStrengthMeter;