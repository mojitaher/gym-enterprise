import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { Avatar } from "../../../../../shared/ui/atoms/avatar/avatar";
import { Button } from "../../../../../shared/ui/atoms/button/button";

import Classes from "../styles/Gyms.module.css";

import deletUser from "../../../../../assets/icons/deleteUser.svg";
import location from "../../../../../assets/icons/location.svg";
import phone from "../../../../../assets/icons/phone.svg";
import plan from "../../../../../assets/icons/subscription.svg";
import Antiquity from "../../../../../assets/icons/trophy.svg";
import time from "../../../../../assets/icons/time.svg";

export default function GymDetail() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();


  const handleBack = () => {
    navigate("/dashboard/superadmin");
  };
  const handleGymTrainees = () => {
  navigate(`/dashboard/superadmin/gym/${id}/trainees`);
};

const handleGymCoaches = () => {
  navigate(`/dashboard/superadmin/gym/${id}/coaches`);
};

const handleGymPlans = () => {
  navigate(`/dashboard/superadmin/gym/${id}/plans`);
};

const handleGymManagers = () => {
  navigate(`/dashboard/superadmin/gym/${id}/managers`);
};

  return (
    <section className={Classes.Gymcontainer}>
      <div className={Classes.detailSection}>

        <div className={Classes.gymHeader}>
          <div className={Classes.gymInfo}>
            <Avatar size="small" />

            <div className={Classes.headerInfo}>
              <h2 className={Classes.gymTitle}>
                باشگاه شماره {id}
              </h2>

              <span className={Classes.gymSubTitle}>
                پلن
              </span>
            </div>
          </div>

          <div className={Classes.headerActions}>
            <button
              type="button"
              className={Classes.backButton}
              onClick={handleBack}
            >
              <img
                className={Classes.headerAction}
                src={deletUser}
                alt="بازگشت"
              />
            </button>
          </div>
        </div>

        <div className={Classes.gymDetails}>
          <div className={Classes.infoGrid}>

            <div className={Classes.infoItem}>
              <img
                className={Classes.headerAction}
                src={location}
                alt="آدرس"
              />

              <span className={Classes.value}>
                آدرس باشگاه
              </span>
            </div>

            <div className={Classes.infoItem}>
              <img
                className={Classes.headerAction}
                src={phone}
                alt="شماره تماس"
              />

              <span className={Classes.value}>
                شماره تماس
              </span>
            </div>

            <div className={Classes.infoItem}>
              <img
                className={Classes.headerAction}
                src={plan}
                alt="نوع باشگاه"
              />

              <span className={Classes.value}>
                نوع باشگاه
              </span>
            </div>

            <div className={Classes.infoItem}>
              <img
                className={Classes.headerAction}
                src={Antiquity}
                alt="قدمت"
              />

              <span className={Classes.value}>
                قدمت باشگاه
              </span>
            </div>

            <div className={Classes.infoItem}>
              <img
                className={Classes.headerAction}
                src={time}
                alt="ساعت کاری"
              />

              <span className={Classes.value}>
                ساعت کاری
              </span>
            </div>

          </div>
        </div>

        <section className={Classes.actionSection}>
          <Button
            variant="primary"
            size="large"
            onClick={handleGymTrainees}
          >
            Gym Trainees
          </Button>

          <Button
            variant="primary"
            size="large"
            onClick={handleGymPlans}
          >
            Gym Plans
          </Button>

          <Button
            variant="primary"
            size="large"
            onClick={handleGymCoaches}
          >
            Gym Coaches
          </Button>

          <Button
            variant="primary"
            size="large"
            onClick={handleGymManagers}
          >
            Gym Managers
          </Button>
        </section>
      </div>
    </section>
  );
}