import { useRef } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import { handleGymInfoSubmit } from "./handlers/handleGymInfoSubmit";
import type { GymInfoStepProps } from "./interfaces/gymInfoStepProps.interface";

import Classes from "../../style/signup.module.css";

export default function GymInfoStep({
  onSubmit,
}: GymInfoStepProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={(event) =>
        handleGymInfoSubmit(
          event,
          nameRef,
          phoneRef,
          passwordRef,
          onSubmit
        )
      }
    >
      <h3 className={Classes.modalTitle}>
        اطلاعات باشگاه
      </h3>

      <Input
        type="text"
        inputMode="text"
        size={INPUT_SIZE_ENUM.small}
        placeholder="نام باشگاه"
        ref={nameRef}
        errorMsg="نام باشگاه الزامی است"
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
        type="password"
        inputMode="text"
        size={INPUT_SIZE_ENUM.small}
        placeholder="رمز عبور"
        ref={passwordRef}
        errorMsg="رمز عبور باید حداقل ۸ کاراکتر باشد"
        required
      />

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23!"
      >
        ادامه
      </Button>
    </form>
  );
}