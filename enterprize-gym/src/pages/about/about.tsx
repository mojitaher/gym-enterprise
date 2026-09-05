import Classes from "./style/about.module.css";
import logo from "../../assets/icons/logo.svg";
import profileIcon from "../../assets/icons/profile1.svg";
import { Button } from "../../shared/ui/atoms/button/button";
import { useModal } from "../home/hooks/useLoginModal";
import { BodyCard } from "../../shared/ui/molcoule/bodyCard/bodyCard";

export default function AboutPage() {
  const { openModal } = useModal(
    <div className={Classes.roleContent}>
      <div className={Classes.roleRow}>
        <Button variant="primary" size="large" className="max-w-25">
          Trainee
        </Button>
        <Button variant="primary" size="large" className="max-w-25">
          Coach
        </Button>
      </div>
      <Button variant="primary" size="large" className="max-w-25">
        Manager
      </Button>
    </div>,
    "choose your Role"
  );

  return (
    <div className={Classes.aboutPage}>
      {/* ============ بک‌گراند About — پشت محتوا ============ */}
      <div className={Classes.aboutBg} />

      {/* ============ Header — logo سمت چپ، پروفایل سمت راست ============ */}
      <header className={Classes.header}>
        <div className={Classes.brandWrap}>
          <img src={logo} alt="My Gym logo" className={Classes.logo} />
          <span className={Classes.brand}>My Gym</span>
        </div>
        <button
          type="button"
          className={Classes.profileBtn}
          aria-label="Profile"
          onClick={openModal}
        >
          <img src={profileIcon} alt="profile" className={Classes.profileIcon} />
        </button>
      </header>

      {/* ============ بخش‌ها — BodyCard به‌ترتیب راست/چپ/راست/چپ ============ */}
      <main className={Classes.sections}>
        <div className={Classes.bodyRow}>
          <BodyCard
            dir="right"
            image="/images/aboutus1.png"
            imageWidth="60%"
            imageHeight="400px"
            imageClassName={Classes.firstImage}
            hideImageOnMobile
            title="Who We Are"
            description="My Gym is more than a place to lift weights — it's a community built on discipline, progress and support. Since day one we've helped members of every level train smarter, stay consistent and reach goals they once thought were out of reach."
          >
            <Button variant="primary" size="large" onClick={openModal}>
              Start Now
            </Button>
          </BodyCard>
        </div>

        <div className={Classes.bodyRow}>
          <BodyCard
            dir="left"
            image="/images/aboutus2.png"
            imageWidth="315px"
            imageHeight="210px"
            mobileImage="/images/aboutus1.png"
            mobileImageClassName={Classes.secondImage}
            title="What We Offer"
            description="From modern machines and free weights to group classes and one-on-one coaching — everything you need to train effectively lives under one roof, in a clean, spacious floor plan."
          />
        </div>

        <div className={Classes.bodyRow}>
          <BodyCard
            dir="right"
            image="/images/aboutus3.png"
            imageWidth="300px"
            imageHeight="330px"
            title="Why Choose My Gym"
            mobileImage="/images/aboutus3.png"
            description="Certified coaches, flexible plans and a floor designed around real progress. No crowds, no waiting — just a focused environment that gets you results."
          >
            <Button variant="primary" size="large" onClick={openModal}>
              Get Started
            </Button>
          </BodyCard>
        </div>

        <div className={Classes.bodyRow}>
          <BodyCard
            dir="left"
            image="/images/aboutus4.png"
            imageWidth="376px"
            imageHeight="335px"
            mobileImageClassName={Classes.lastImage}
            title="Our Vision"
            mobileImage="/images/aboutus4.png"
            description="We believe fitness should be simple, welcoming and sustainable. Our vision is a gym where everyone — from beginners to athletes — feels at home and keeps coming back."
          >
            <Button variant="primary" size="large" onClick={openModal}>
              Log in
            </Button>
          </BodyCard>
        </div>
      </main>
    </div>
  );
}
