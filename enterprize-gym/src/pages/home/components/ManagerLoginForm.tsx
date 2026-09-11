import { useState } from "react";

import { Button } from "../../../shared/ui/atoms/button/button";
import { Input } from "../../../shared/ui/atoms/input/input";
import { Spinner } from "../../../shared/ui/atoms/spiner/spinner";

import { INPUT_SIZE_ENUM } from "../../../shared/ui/atoms/input/enums/inputSize";
import { BUTTON_VARIANT_ENUM } from "../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../shared/ui/atoms/button/enum/buttonSize";

import Classes from "../style/home.module.css";

interface ManagerLoginFormProps {
  onSubmit: (username: string, password: string) => void;
  onSignupClick?: () => void;
  isLoading?: boolean;
  error?: string | null;
}

export default function ManagerLoginForm({
  onSubmit,
  onSignupClick,
  isLoading = false,
  error = null,
}: ManagerLoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form
      className={Classes.phoneContent}
      onSubmit={handleSubmit}
    >
      <h3 className={Classes.modalTitle}>
        ورود مدیر باشگاه
      </h3>

      {error && (
        <div className={Classes.errorMessage}>
          {error}
        </div>
      )}

      <Input
        type="text"
        size={INPUT_SIZE_ENUM.small}
        placeholder="نام کاربری"
        value={username}
        onChange={setUsername}
        errorMsg="نام کاربری را وارد کنید"
        required
      />

      <Input
        type="password"
        size={INPUT_SIZE_ENUM.small}
        placeholder="رمز عبور"
        value={password}
        onChange={setPassword}
        errorMsg="رمز عبور را وارد کنید"
        required
      />

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23!"
        disabled={isLoading}
      >
        {isLoading ? <Spinner size="small" /> : "ورود"}
      </Button>

      {onSignupClick && (
        <button
          type="button"
          className={Classes.changePhoneLink}
          onClick={onSignupClick}
        >
          من اکانت ندارم، ثبت نام باشگاه جدید
        </button>
      )}
    </form>
  );
}