import { Button } from "../../../shared/ui/atoms/button/button";

import { BUTTON_VARIANT_ENUM } from "../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../shared/ui/atoms/button/enum/buttonSize";

import type { AuthChoiceModalProps } from "../interfaces/authChoiceModalProps.interface";

import Classes from "../style/home.module.css";

export default function AuthChoiceModal({
  onLoginClick,
  onSignupClick,
}: AuthChoiceModalProps) {
  return (
    <div className={Classes.phoneContent}>
      <h3 className={Classes.modalTitle}>
        مدیریت باشگاه
      </h3>

      <p className={Classes.choiceDescription}>
        آیا حساب کاربری دارید یا باشگاه جدید ثبت می‌کنید؟
      </p>

      <div className={Classes.choiceButtons}>
        <Button
          variant={BUTTON_VARIANT_ENUM.secondary}
          size={BUTTON_ENUMS_SIZE.large}
          className="w-23!"
          onClick={onLoginClick}
        >
          ورود به حساب
        </Button>

        <Button
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className="w-23!"
          onClick={onSignupClick}
        >
          ثبت نام باشگاه جدید
        </Button>
      </div>
    </div>
  );
}