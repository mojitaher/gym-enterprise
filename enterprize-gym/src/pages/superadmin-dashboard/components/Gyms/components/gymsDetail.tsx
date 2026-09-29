import { Avatar } from "../../../../../shared/ui/atoms/avatar/avatar";
import Classes from "../styles/Gyms.module.css";
import deletUser from '../../../../../assets/icons/deleteUser.svg'
import location from '../../../../../assets/icons/location.svg'
import phone from '../../../../../assets/icons/phone.svg'
import plan from '../../../../../assets/icons/subscription.svg'
import Antiquity from '../../../../../assets/icons/trophy.svg'
import time  from "../../../../../assets/icons/time.svg";
import backICon from "../../../../../assets/icons/backIcon.svg"
import { Button } from "../../../../../shared/ui/atoms/button/button";
import type { GYM_DETAIL_INTERFACE } from "../interfaces/GymDetail";


export default function GymDetail({
  id,
  onBack,
  onDelete
}: GYM_DETAIL_INTERFACE){
    console.log(id)
  return (
    <section className={Classes.Gymcontainer}>
      <div className={Classes.detailSection}>
        <div className={Classes.gymHeader}>
          <div className={Classes.gymInfo}>
            <Avatar size="small" />

            <div className={Classes.headerInfo}>
              <h2 className={Classes.gymTitle}>
اسم             </h2>
              <span className={Classes.gymSubTitle}>
               <h4>پلن</h4> 
              </span>
            </div>
          </div>
<div className={Classes.headerActions}>
    <button
    type="button"
    className={Classes.backButton}
    onClick={()=>onDelete(id)}
   
  >
    <img
    className={Classes.headerAction}
    src={deletUser}
    alt="حذف کاربر"
  />
  </button>
  <button
    type="button"
    className={Classes.backButton}
    onClick={onBack}
  >
    <img
      className={Classes.headerAction}
      src={backICon}
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
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed at dolore labore impedit amet aspernatur quis nemo distinctio, tenetur maxime ex vero nulla corrupti dolores consectetur nisi neque, officia illo.
      </span>
    </div>

    <div className={Classes.infoItem}>
      <img
        className={Classes.headerAction}
        src={phone}
        alt="شماره تماس"
      />


      <span className={Classes.value}>
        09056404
      </span>
    </div>

    <div className={Classes.infoItem}>
      <img
        className={Classes.headerAction}
        src={plan}
        alt="نوع باشگاه"
      />
      <span className={Classes.value}>
        نوع
      </span>
    </div>

    <div className={Classes.infoItem}>
      <img
        className={Classes.headerAction}
        src={Antiquity}
        alt="جام"
      />


      <span className={Classes.value}>
        قدمت
      </span>
    </div>
    <div className={Classes.infoItem}> <img className={Classes.headerAction} src={time} alt="ساعت کاری" /> <span className={Classes.value}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum autem ipsum accusamus amet minima recusandae praesentium odio corporis esse non omnis nulla, reprehenderit placeat itaque consequuntur modi quo est! </span> </div>
    <span className={Classes.value}> Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates deserunt alias explicabo maiores et veniam cumque nesciunt atque minus, magnam libero eum in totam aliquam vel eveniet officiis. Dolorem.</span>
  </div>
</div>
<section className={Classes.actionSection}> 
    <Button 
    variant="primary"
   size='large'>Gym Trainees</Button> 
   <Button 
    variant="primary"
   size='large'> Gym Plans</Button> 
   <Button 
    variant="primary"
   size='large'> Gym Couches</Button> 
   <Button 
    variant="primary"
   size='large'>Gym Managers</Button> 
 
</section>
      </div>
    </section>
  );
}
