
import { useState } from "react";

import { Button } from "../../../../shared/ui/atoms/button/button";
import { Input } from "../../../../shared/ui/atoms/input/input";
import { Textarea } from "../../../../shared/ui/atoms/textarea/textarea";

import SingleDropdown from "../../../../shared/ui/molcoule/dropdaown/singleDropdown";

import { INPUT_SIZE_ENUM } from "../../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import cityItem from "../../../../shared/data/cityData.json";

import type { GymInfoStepProps } from "../interfaces/gymInfoStepProps.interface";

import Classes from "../../style/signup.module.css";

const cityItems = cityItem.map(({ id, name }) => ({
  label: name,
  value: id,
}));

export default function GymInfoStep({
  onBack,
  onSubmit,
  initialValues,
  isSubmitting,
  error,
}: GymInfoStepProps) {
  const [name, setName] = useState(initialValues.name);
  const [phone, setPhone] = useState(initialValues.phone);
  const [city, setCity] = useState(initialValues.city);
  const [address, setAddress] = useState(initialValues.address);
  const [description, setDescription] = useState(initialValues.description);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (
      !name.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city
    ) {
      return;
    }

    onSubmit({
      name,
      phone,
      city,
      address,
      description,
    });
  };

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={setName}
          errorMsg="نام باشگاه الزامی است"
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

        <div className={Classes.dropdownWrapper}>
          <p>شهر باشگاه</p>

          <SingleDropdown
            dir="rtl"
            items={cityItems}
            value={city}
            placeholder="شهر خود را انتخاب کنید"
            searchable
            required
            onChange={(value) => setCity(value as number)}
            className={Classes.citySelect}
          />
        </div>

        <Textarea
          title="توضیحات"
          size="large"
          placeholder="توضیحات"
          value={description}
          onChange={setDescription}
        />
      </div>

      {error && (
        <p className={Classes.errorText}>
          {error}
        </p>
      )}

      <div className={Classes.buttonWrapper}>
        <Button
          type="button"
          variant={BUTTON_VARIANT_ENUM.secondary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.backButton}
          onClick={onBack}
          disabled={isSubmitting}
        >
          بازگشت
        </Button>

        <Button
          type="submit"
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "ادامه"}
        </Button>
      </div>
    </form>
  );
}
