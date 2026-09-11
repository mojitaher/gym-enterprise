import { useState } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";
import { InputPassword } from "../../../../shared/ui/molcoule/passwordInput/inputPasssword";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";
import { INPUTـPASSWORD_SIZE_ENUM } from "../../../../shared/ui/molcoule/passwordInput/enums/inputPasswordSize";
import { INPUTـPASSWORD_MODE_ENUM } from "../../../../shared/ui/molcoule/passwordInput/enums/inputPasswordMode";

import PasswordStrengthMeter from "./PasswordStrengthMeter";

import type { ManagerInfoStepProps } from "./interfaces/managerInfoStepProps.interface";

import Classes from "../../style/signup.module.css";

export default function ManagerInfoStep({
  onBack,
  onSubmit,
  initialValues,
}: ManagerInfoStepProps) {
  // state داخلی همین Step - تایپ کاربر فقط همینو ریرندر میکنه
  const [fullName, setFullName] = useState(initialValues.fullName);
  const [phone, setPhone] = useState(initialValues.phone);
  const [pass, setPass] = useState(initialValues.pass);
  const [confirmPass, setConfirmPass] = useState(initialValues.confirmPass);

  // تطابق از خود state‌های موجود مشتق می‌شود (state جدید لازم نیست)
  const confirmMismatch = confirmPass !== "" && pass !== confirmPass;
  const passTooWeak = pass !== "" && pass.length < 8;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // رمز حداقل ۸ کاراکتر و تکرارش برابر باشد تا ادامه داده شود
    if (pass.length < 8 || confirmMismatch) return;
    onSubmit({ fullName, phone, pass, confirmPass });
  };

  return (
    <form className={Classes.phoneContent} onSubmit={handleSubmit}>
      <div className={Classes.stepHeader}>
        <h3 className={Classes.stepTitle}>اطلاعات مدیر</h3>
        <p className={Classes.stepSubtitle}>
          لطفاً اطلاعات مربوط به مدیر باشگاه را تکمیل کنید
        </p>
      </div>

      <div className={Classes.formGrid}>
        <Input
          title="نام کامل"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: علی محمدی"
          value={fullName}
          onChange={setFullName}
          errorMsg="نام الزامی است"
          required
          className={Classes.inputDark}
        />

        <Input
          title="شماره تلفن"
          type="tel"
          inputMode="numeric"
          pattern="09[0-9]{9}"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="09xxxxxxxxx"
          value={phone}
          onChange={setPhone}
          errorMsg="شماره تلفن وارد شده نادرست است"
          required
          className={Classes.inputDark}
        />

        <div className={Classes.formGroup}>
          <InputPassword
            title="رمز عبور"
            mode={
              passTooWeak
                ? INPUTـPASSWORD_MODE_ENUM.error
                : pass
                ? INPUTـPASSWORD_MODE_ENUM.success
                : INPUTـPASSWORD_MODE_ENUM.warn
            }
            size={INPUTـPASSWORD_SIZE_ENUM.medium}
            placeholder="حداقل ۸ کاراکتر"
            value={pass}
            onChange={setPass}
            pattern=".{8,}"
            required
            errorMsg="رمز عبور باید حداقل ۸ کاراکتر باشد"
          />
          <PasswordStrengthMeter password={pass} />
          {passTooWeak && (
            <p className={Classes.errorText}>
              رمز عبور باید حداقل ۸ کاراکتر باشد
            </p>
          )}
        </div>

        <div className={Classes.formGroup}>
          <InputPassword
            title="تکرار رمز عبور"
            mode={
              confirmMismatch
                ? INPUTـPASSWORD_MODE_ENUM.error
                : confirmPass
                ? INPUTـPASSWORD_MODE_ENUM.success
                : INPUTـPASSWORD_MODE_ENUM.warn
            }
            size={INPUTـPASSWORD_SIZE_ENUM.small}
            placeholder="رمز عبور را مجدداً وارد کنید"
            value={confirmPass}
            onChange={setConfirmPass}
            required
          />
          {confirmMismatch && (
            <p className={Classes.errorText}>
              رمز عبور و تکرار آن یکسان نیستند
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
          اکانت دارم
        </Button>
        <Button
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.submitButton}
        >
          ادامه
        </Button>
      </div>
    </form>
  );
}
