import Classes from "./style/home.module.css";
import { Button } from "../../shared/ui/atoms/button/button";
import profileIcon from "../../assets/icons/profile1.svg";
import documentIcon from "../../assets/icons/documentAlign.svg";
import { useNavigate } from "react-router-dom";
import { useModal } from "./hooks/useLoginModal";
import AuthModal from "./components/AuthModal";
import LoginModal from "./components/LoginModal";

export default function HomePage() {
  const navigate = useNavigate();

  // Login Modal for Trainer/Coach
  const { openModal: openLoginModal } = useModal({
    content: <LoginModal />,
    title: "ورود ترینر/مربی",
  });

  // AuthChoiceModal for Manager (Login or Signup)
  const { openModal: openManagerModal } = useModal({
    content: (closeModal) => (
      <AuthModal
        onSignupClick={() => {
          closeModal();
          navigate("/signup");
        }}
      />
    ),
    title: "مدیریت باشگاه",
  });

  return (
    <div className={Classes.homePage}>
      <div className={Classes.bgImage} />

      <div className={Classes.layeredBg} />

      <div className={Classes.content}>
        <h1 className={Classes.title}>My Gym</h1>

        <p className={Classes.description}>
          Manage your gym with ease. Streamline workout, member management,
          nutrition plan, and payment all in one powerful platform.
        </p>

        <div className={Classes.actions}>
          <Button
            variant="secondary"
            size="large"
            startIcon={<img src={profileIcon} alt="profileicon" />}
            onClick={openLoginModal}
          >
            Log In
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={openManagerModal}
          >
            Sign up your gym
          </Button>
          <Button
            variant="primary"
            size="large"
            startIcon={<img src={documentIcon} alt="about" />}
            onClick={() => navigate("/aboutus")}
          >
            About Us
          </Button>
        </div>

        <p className={Classes.adminLink}>Administrator Login</p>
      </div>
    </div>
  );
}