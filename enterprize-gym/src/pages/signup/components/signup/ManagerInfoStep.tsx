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
  onSubmit,
}: ManagerInfoStepProps) {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={(event) =>
        handleManagerInfoSubmit(
          event,
          firstNameRef,
          lastNameRef,
          phoneRef,
          emailRef,
          onSubmit
        )
      }
    >
      <h3 className={Classes.modalTitle}>
        اطلاعات مدیر باشگاه
      </h3>

      <Input
        type="text"
        inputMode="text"
        size={INPUT_SIZE_ENUM.small}
        placeholder="نام"
        ref={firstNameRef}
        errorMsg="نام الزامی است"
        required
      />

      <Input
        type="text"
        inputMode="text"
        size={INPUT_SIZE_ENUM.small}
        placeholder="نام خانوادگی"
        ref={lastNameRef}
        errorMsg="نام خانوادگی الزامی است"
        required
      />

      <Input
        type="text"
        inputMode="numeric"
        pattern="09[0-9]{9}"
        size={INPUT_SIZE_ENUM.small}
        placeholder="09xxxxxxxxx"
        ref={phoneRef}
        errorMsg="شماره تلفن وارد شده نادرست است"
        required
      />

      <Input
        type="email"
        inputMode="email"
        size={INPUT_SIZE_ENUM.small}
        placeholder="ایمیل"
        ref={emailRef}
        errorMsg="ایمیل وارد شده نادرست است"
        required
      />

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23!"
      >
        ثبت نام نهایی
      </Button>
    </form>
  );
}