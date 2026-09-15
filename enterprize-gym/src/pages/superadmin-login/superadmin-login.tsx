import { useNavigate } from "react-router-dom";

import SuperadminLoginForm from "./components/superadmin-login/SuperadminLoginForm";

import Classes from "./style/superadmin-login.module.css";

export default function SuperadminLoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (data: { username: string; password: string }) => {
    console.log("Superadmin login submitted:", data);
    // TODO: Backend needed - API call here
    // await superadminLoginApi(data);
  };

  return (
    <div className={Classes.loginPage}>
      <div className={Classes.container}>
        <div className={Classes.content}>
          <SuperadminLoginForm onBack={handleBack} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}