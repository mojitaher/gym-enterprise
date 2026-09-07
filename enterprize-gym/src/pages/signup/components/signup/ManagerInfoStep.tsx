import { useRef } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import { handleManagerInfoSubmit } from "./handlers/handleManagerInfoSubmit";
import type { ManagerInfoStepProps } from "./interfaces/managerInfoStepProps.interface";

import Classes from "../../style/signup.module.css";
export default function ManagerInfoStep({
  onBack,
  onSubmit,
}: ManagerInfoStepProps) {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);
  

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={(event) =>
        handleManagerInfoSubmit(
          event,
          fullNameRef,
          phoneRef,
          passRef,
          confirmPassRef,
          onSubmit
        )
      }
    >
      <div className={Classes.stepHeader}>
        <h3 className={Classes.stepTitle}>
          اطلاعات مدیر
        </h3>
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
          ref={fullNameRef}
          errorMsg="نام الزامی است"
          required
          className={Classes.inputDark}
          // labelClassName={Classes.labelDark}
        />

        <Input
          title="شماره تلفن"
          type="tel"
          inputMode="numeric"
          pattern="09[0-9]{9}"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="09xxxxxxxxx"
          ref={phoneRef}
          errorMsg="شماره تلفن وارد شده نادرست است"
          required
          className={Classes.inputDark}
          // labelClassName={Classes.labelDark}
        />

        <Input
          title="رمز عبور"
          type="password"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="حداقل ۸ کاراکتر"
          ref={passRef}
          errorMsg="رمز عبور نامناسب است"
          required
          className={Classes.inputDark}
          // labelClassName={Classes.labelDark}
        />

        <Input
          title="تکرار رمز عبور"
          type="password"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="رمز عبور را مجدداً وارد کنید"
          ref={confirmPassRef}
          errorMsg="تایید رمز عبور تطابق ندارد"
          required
          className={Classes.inputDark}
          // labelClassName={Classes.labelDark}
        />
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