import Classes from "../styles/Gyms.module.css";
import type { GymMemberProfileProps } from "../interfaces/gymMember.interface";

import phoneIcon from "../../../../../assets/icons/phone.svg";
import subscriptionIcon from "../../../../../assets/icons/subscription.svg";
import trophyIcon from "../../../../../assets/icons/trophy.svg";
import timeIcon from "../../../../../assets/icons/time.svg";
import userIcon from "../../../../../assets/icons/deleteUser.svg";

export default function GymMemberProfile({
  member,
}: GymMemberProfileProps) {
  return (
    <section className={Classes.profileCard}>
      <header className={Classes.profileHeader}>
        <div className={Classes.profileIdentity}>
          <img
            className={Classes.profileAvatar}
            src={member.avatar}
            alt={member.name}
          />

          <div className={Classes.profileHeading}>
            <h2 className={Classes.profileName}>
              {member.name}
            </h2>

            {member.age !== undefined && (
              <span className={Classes.profileAge}>
                Age: {member.age}
              </span>
            )}
          </div>
        </div>

        <button
  type="button"
  className={Classes.profileUserIcon}
  aria-label="حذف کاربر"
  title="حذف کاربر"
>
  <img src={userIcon} alt="" />
</button>
      </header>

      <div className={Classes.profileDetails}>
        {member.phone && (
          <div className={Classes.profileDetail}>
            <img src={phoneIcon} alt="" />
            <span>{member.phone}</span>
          </div>
        )}

        {member.fitnessLevel && (
          <div className={Classes.profileDetail}>
            <img src={subscriptionIcon} alt="" />
            <span>
              Fitness Level: {member.fitnessLevel}
            </span>
          </div>
        )}

        {member.membershipDate && (
          <div className={Classes.profileDetail}>
            <img src={trophyIcon} alt="" />
            <span>
              Membership Date: {member.membershipDate}
            </span>
          </div>
        )}

        {member.workingHours && (
          <div className={Classes.profileDetail}>
            <img src={timeIcon} alt="" />
            <span>{member.workingHours}</span>
          </div>
        )}
      </div>
    </section>
  );
}