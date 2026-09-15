import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/atoms/button/button";
import { BUTTON_VARIANT_ENUM } from "../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../shared/ui/atoms/button/enum/buttonSize";
import Classes from "./styles/no-internet.module.css";

const NoInternet = () => {
  const navigate = useNavigate();

  return (
    <main className={Classes.page}>
      <div className={Classes.image} />
      <span className={Classes.errorCode}>!</span>
      <h1 className={Classes.title}>قطع اینترنت</h1>
      <p className={Classes.subtitle}>
        اتصال اینترنت شما قطع است. لطفاً اتصال شبکه خود را بررسی کنید و دوباره تلاش کنید.
      </p>
      <Button
        variant={BUTTON_VARIANT_ENUM.primary}
        size={BUTTON_ENUMS_SIZE.large}
        onClick={() => navigate("/")}
      >
        بازگشت به صفحه اصلی
      </Button>
    </main>
  );
};

export default NoInternet;
