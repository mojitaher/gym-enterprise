import { Button } from "../../../../shared/ui/atoms/button/button";

import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from '../../../../shared/ui/atoms/button/enum/buttonSize';

import type { SignupSuccessStepProps } from "./interfaces/signupSuccessStepProps.interface";

import Classes from "../../style/signup.module.css";

export default function SignupSuccessStep({
  gymData,
  managerData,
}: SignupSuccessStepProps) {
  return (
    <div className={Classes.successContent}>
      <div className={Classes.successIcon} />
      <h3 className={Classes.successTitle}>
        ثبت نام با موفقیت انجام شد
      </h3>

      {gymData && (
        <div className={Classes.infoCard}>
          <h4 className={Classes.infoCardTitle}>
            اطلاعات باشگاه
          </h4>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نام:</span> {gymData.name}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>تلفن:</span> {gymData.phone}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>آدرس:</span> {gymData.address}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نوع:</span> {gymData.type}
          </p>
        </div>
      )}

      {managerData && (
        <div className={Classes.infoCard}>
          <h4 className={Classes.infoCardTitle}>
            اطلاعات مدیر
          </h4>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نام کامل:</span> {managerData.fullName}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>تلفن:</span> {managerData.phone}
          </p>
        </div>
      )}

      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        className="w-23! mt-6"
        onClick={() => window.location.href = "/"}
      >
        ورود به سامانه
      </Button>
    </div>
  );
}