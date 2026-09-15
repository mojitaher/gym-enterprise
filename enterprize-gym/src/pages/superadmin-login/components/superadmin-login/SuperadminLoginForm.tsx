import { useState } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";
import { InputPassword } from "../../../../shared/ui/molcoule/passwordInput/inputPasssword";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";
import { INPUTـPASSWORD_SIZE_ENUM } from "../../../../shared/ui/molcoule/passwordInput/enums/inputPasswordSize";
import { INPUTـPASSWORD_MODE_ENUM } from "../../../../shared/ui/molcoule/passwordInput/enums/inputPasswordMode";

import type { SuperadminLoginFormProps } from "./interfaces/superadminLoginFormProps.interface";

import Classes from "../../style/superadmin-login.module.css";

export default function SuperadminLoginForm({
  onBack,
  onSubmit,
}: SuperadminLoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passTooWeak = password !== "" && password.length < 8;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length < 8) return;
    onSubmit({ username, password });
  };

  return (
    <form className={Classes.phoneContent} onSubmit={handleSubmit}>
      <div className={Classes.stepHeader}>
        <h3 className={Classes.stepTitle}>ورود سوپرادمین</h3>
        <p className={Classes.stepSubtitle}>
          لطفاً نام کاربری و رمز عبور خود را وارد کنید
        </p>
      </div>

      <div className={Classes.formGrid}>
        <Input
          title="نام کاربری"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="نام کاربری خود را وارد کنید"
          value={username}
          onChange={setUsername}
          errorMsg="نام کاربری الزامی است"
          required
          className={Classes.inputDark}
        />

        <div className={Classes.formGroup}>
          <InputPassword
            title="رمز عبور"
            mode={
              passTooWeak
                ? INPUTـPASSWORD_MODE_ENUM.error
                : password
                ? INPUTـPASSWORD_MODE_ENUM.success
                : INPUTـPASSWORD_MODE_ENUM.warn
            }
            size={INPUTـPASSWORD_SIZE_ENUM.medium}
            placeholder="حداقل ۸ کاراکتر"
            value={password}
            onChange={setPassword}
            pattern=".{8,}"
            required
            errorMsg="رمز عبور باید حداقل ۸ کاراکتر باشد"
          />
          {passTooWeak && (
            <p className={Classes.errorText}>
              رمز عبور باید حداقل ۸ کاراکتر باشد
            </p>
          )}
        </div>
      </div>

      <div className={Classes.buttonWrapper}>
        <Button
          variant={BUTTON_VARIANT_ENUM.secondary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.backButton}
          onClick={onBack}
        >
          بازگشت
        </Button>
        <Button
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.submitButton}
        >
          ورود
        </Button>
      </div>
    </form>
  );
}
