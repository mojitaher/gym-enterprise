import { Button } from "../../../../shared/ui/atoms/button/button";

import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from '../../../../shared/ui/atoms/button/enum/buttonSize';

import type { SignupSuccessStepProps } from "./interfaces/signupSuccessStepProps.interface";

import Classes from "../../style/signup.module.css";
import cityItem from '../../../../shared/data/cityData.json'

export default function SignupSuccessStep({
  gymData,
  managerData,
  planData
}: SignupSuccessStepProps) {
  return (
    <div className={Classes.successContent}>
      <div className={Classes.successIcon} />
      <h3 className={Classes.successTitle}>
        ثبت نام با موفقیت انجام شد
      </h3>
      <h5 className={Classes.subSuccessTitle}>
       کارت عالی بود
      </h5>

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
            <span className={Classes.infoLabel}>شهر:</span> {cityItem.find((city) => city.id === gymData.city)?.name}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>آدرس:</span> {gymData.address}
          </p>
          {gymData.description && <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>توضیحات:</span> {gymData.description}
          </p> }
        </div>
      )}

      {managerData && (
        <div className={Classes.infoCard}>
          <h4 className={Classes.infoCardTitle}>
            اطلاعات مدیر
          </h4>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نام :</span> {managerData.firstName}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نام خانوادگی :</span> {managerData.lastName}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>نام کاربری :</span> {managerData.username}
          </p>
          <p className={Classes.infoCardItem}>
            <span className={Classes.infoLabel}>تلفن:</span> {managerData.phone}
          </p>
        </div>
      )}

      {planData && (<div className={Classes.infoCard}>
    <h4 className={Classes.infoCardTitle}>
      اطلاعات پلن اشتراک
    </h4>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>نام پلن:</span>{" "}
      {planData.planName}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>شماره پلن:</span>{" "}
      {planData.planNumber}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>مناسب برای:</span>{" "}
      {planData.bestFor}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>مربیان:</span>{" "}
      {planData.coach}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>ورزشکاران:</span>{" "}
      {planData.trainee}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>مدت اشتراک:</span>{" "}
      {planData.duration}
    </p>

    <p className={Classes.infoCardItem}>
      <span className={Classes.infoLabel}>قیمت:</span>{" "}
      {planData.price}
    </p>
  </div>)}
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