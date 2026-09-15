import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/atoms/button/button";
import { BUTTON_VARIANT_ENUM } from "../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../shared/ui/atoms/button/enum/buttonSize";
import Classes from "./styles/404.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <main className={Classes.page}>
      <div className={Classes.image} />
      <span className={Classes.errorCode}>404</span>
      <h1 className={Classes.title}>صفحه یافت نشد</h1>
      <p className={Classes.subtitle}>
        متأسفانه صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است.
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

export default Error404;