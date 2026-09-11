import { useState } from "react";

import { Button } from "../../../shared/ui/atoms/button/button";
import { Input } from "../../../shared/ui/atoms/input/input";
import { Spinner } from "../../../shared/ui/atoms/spiner/spinner";

import { INPUT_SIZE_ENUM } from "../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../shared/ui/atoms/button/enum/buttonSize";

import type { VerifyModalProps } from "../interfaces/verifyModalProps.interface";

// ⛔ کامنت شده: countdown غیرفعال شده
// import Countdown from "../../../shared/ui/molcoule/countdown/Countdown";
import Classes from "../style/home.module.css";

export default function VerifyModal({
  expiresIn: _expiresIn,
  onBack,
  onSubmit,
  isVerifying,
}: VerifyModalProps) {
  const [code, setCode] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSubmit(code);
  };

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={handleSubmit}
    >
      <h3 className={Classes.modalTitle}>
        Verify your phone number
      </h3>

      <Input
        type="text"
        inputMode="numeric"
        pattern="[0-9]{6}"
        size={INPUT_SIZE_ENUM.small}
        placeholder="کد ۶ رقمی"
        value={code}
        onChange={setCode}
        errorMsg="کد وارد شده نادرست است"
        required
        disabled={isVerifying}
      />

      <div className={Classes.footer}>
        <button
          type="button"
          className={Classes.changePhoneLink}
          onClick={onBack}
          disabled={isVerifying}
        >
          Change phone number
        </button>

        {/* ⛔ کامنت شده: بلوک Countdown و expired */}
        {/* {!isExpired ? (
          <Countdown
            expiresIn={expiresIn}
            onExpire={handleExpire}
          />
        ) : (
          <Button
            variant={BUTTON_VARIANT_ENUM.secondary}
            size={BUTTON_ENUMS_SIZE.small}
            disabled={isVerifying}
          >
            ارسال مجدد کد
          </Button>
        )} */}
      </div>

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23!"
        disabled={isVerifying}
      >
        {isVerifying ? <Spinner size="small" /> : "confirm"}
      </Button>
    </form>
  );
}