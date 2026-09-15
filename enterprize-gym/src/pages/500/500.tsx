import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/atoms/button/button";
import { BUTTON_VARIANT_ENUM } from "../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../shared/ui/atoms/button/enum/buttonSize";
import Classes from "./styles/500.module.css";

const Error500 = () => {
  const navigate = useNavigate();

  return (
    <main className={Classes.page}>
      <div className={Classes.image} />
      <span className={Classes.errorCode}>500</span>
      <h1 className={Classes.title}>خطای سرور</h1>
      <p className={Classes.subtitle}>
        مشکلی در سرور رخ داده است. لطفاً دقایقی بعد دوباره تلاش کنید.
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

export default Error500;
