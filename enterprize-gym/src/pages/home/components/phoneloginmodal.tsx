import { useState } from "react";

import { Button } from "../../../shared/ui/atoms/button/button";
import { Input } from "../../../shared/ui/atoms/input/input";

import { INPUT_SIZE_ENUM } from "../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../shared/ui/atoms/button/enum/buttonSize";

import type { PhoneLoginModalProps } from "../interfaces/phoneLoginModalProps.interface";

import Classes from "../style/home.module.css";

export default function PhoneLoginModal({
  onSubmit,
}: PhoneLoginModalProps) {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phone) return;
    onSubmit(phone);
  };

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={handleSubmit}
    >
      <h3 className={Classes.modalTitle}>
        Enter your phone number
      </h3>

      <Input
        type="text"
        inputMode="numeric"
        pattern="09[0-9]{9}"
        size={INPUT_SIZE_ENUM.small}
        placeholder="09xxxxxxxxx"
        value={phone}
        onChange={setPhone}
        errorMsg="شماره تلفن وارد شده نادرست است"
        required
      />

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23!"
      >
        confirm
      </Button>
    </form>
  );
}