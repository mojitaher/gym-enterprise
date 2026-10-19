import Classes from "../styles/Gyms.module.css";
import type { GymMember } from "../interfaces/gymMember.interface";

import phoneIcon from "../../../../../assets/icons/phone.svg";
import subscriptionIcon from "../../../../../assets/icons/subscription.svg";
import trophyIcon from "../../../../../assets/icons/trophy.svg";
import timeIcon from "../../../../../assets/icons/time.svg";

interface GymMemberProfileProps {
  member: GymMember;
  title: string;
}

export default function GymMemberProfile({
  member,
  title,
}: GymMemberProfileProps) {
  return (
    <section className={Classes.Gymcontainer}>
      <div className={Classes.detailSection}>
        <div className={Classes.gymHeader}>
          <div className={Classes.gymInfo}>
            <img
              className={Classes.profileAvatar}
              src={member.avatar}
              alt={member.name}
            />

            <div className={Classes.headerInfo}>
              <h2 className={Classes.gymTitle}>
                {member.name}
              </h2>

              <span className={Classes.gymSubTitle}>
                {title}
              </span>
            </div>
          </div>
        </div>

        <div className={Classes.gymDetails}>
          <div className={Classes.infoGrid}>
            {member.phone && (
              <div className={Classes.infoItem}>
                <img src={phoneIcon} alt="" />
                <span className={Classes.value}>
                  {member.phone}
                </span>
              </div>
            )}

            {member.fitnessLevel && (
              <div className={Classes.infoItem}>
                <img src={subscriptionIcon} alt="" />
                <span className={Classes.value}>
                  Fitness Level: {member.fitnessLevel}
                </span>
              </div>
            )}

            {member.membershipDate && (
              <div className={Classes.infoItem}>
                <img src={trophyIcon} alt="" />
                <span className={Classes.value}>
                  Membership Date: {member.membershipDate}
                </span>
              </div>
            )}

            {member.workingHours && (
              <div className={Classes.infoItem}>
                <img src={timeIcon} alt="" />
                <span className={Classes.value}>
                  {member.workingHours}
                </span>
              </div>
            )}
          </div>

          {member.description && (
            <p className={Classes.profileDescription}>
              {member.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
