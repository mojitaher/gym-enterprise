import { useState } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import type { GymInfoStepProps } from "./interfaces/gymInfoStepProps.interface";

import Classes from "../../style/signup.module.css";

export default function GymInfoStep({
  onBack,
  onSubmit,
  initialValues,
}: GymInfoStepProps) {
  // state داخلی همین Step - تایپ کاربر فقط همینو ریرندر میکنه
  const [name, setName] = useState(initialValues.name);
  const [type, setType] = useState(initialValues.type);
  const [phone, setPhone] = useState(initialValues.phone);
  const [address, setAddress] = useState(initialValues.address);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, type, phone, address });
  };

  return (
    <form className={Classes.phoneContent} onSubmit={handleSubmit}>
      <div className={Classes.stepHeader}>
        <h3 className={Classes.stepTitle}>اطلاعات باشگاه</h3>
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
          value={name}
          onChange={setName}
          errorMsg="نام باشگاه الزامی است"
          required
          className={Classes.inputDark}
        />

        <Input
          title="نوع باشگاه"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: بدنسازی، یوگا، کراس‌فیت"
          value={type}
          onChange={setType}
          errorMsg="نوع باشگاه الزامی است"
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

        <Input
          title="آدرس"
          type="text"
          inputMode="text"
          size={INPUT_SIZE_ENUM.medium}
          placeholder="مثال: خیابان ولیعصر، پلاک ۱۲۳"
          value={address}
          onChange={setAddress}
          errorMsg="آدرس الزامی است"
          required
          className={Classes.inputDark}
        />
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
          ادامه
        </Button>
      </div>
    </form>
  );
}
