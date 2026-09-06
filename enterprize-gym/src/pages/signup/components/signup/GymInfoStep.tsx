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
  onBack,
  onSubmit,
}: GymInfoStepProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);


  return (
    <form
      className={Classes.phoneContent}
      onSubmit={(event) =>
        handleGymInfoSubmit(
          event,
          nameRef,
          phoneRef,
          addressRef,
          typeRef,
          onSubmit
        )
      }
    >
      <div className={Classes.stepHeader}>
        <h3 className={Classes.stepTitle}>
          اطلاعات باشگاه
        </h3>
        <p className={Classes.stepSubtitle}>
          لطفاً اطلاعات مربوط به باشگاه خود را تکمیل کنید
        </p>
      </div>

      <div className={Classes.formGrid}>
        <Input
          title="نام باشگاه"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: باشگاه قدر"
          ref={nameRef}
          errorMsg="نام باشگاه الزامی است"
          required
          className={Classes.inputDark}
          // labelClassName={Classes.labelDark}
        />

        <Input
          title="نوع باشگاه"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: بدنسازی، یوقا، کراس‌فیت"
          ref={typeRef}
          errorMsg="نوع باشگاه الزامی است"
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
          title="آدرس"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: خیابان ولیعصر، پلاک ۱۲۳"
          ref={addressRef}
          errorMsg="آدرس الزامی است"
          required
          className={Classes.inputDark}
        />
      </div>

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className={Classes.submitButton}
      >
        ادامه
      </Button>
      <Button
      variant={BUTTON_VARIANT_ENUM.secondary}
        size={BUTTON_ENUMS_SIZE.large}
            className={Classes.backButton}
            onClick={onBack}
          >
            بازگشت
          </Button>
    </form>
  );
}