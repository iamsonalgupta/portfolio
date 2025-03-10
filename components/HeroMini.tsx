import React from "react";
import Image from "next/image";
import HeroImg from "@/public/images/profile-pic.png";
import { profile, seo } from "@/config/profile.config";
import gsap from "gsap";

const HeroMini = () => {

  gsap.from(".profilename", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.from(".description", {
    opacity: 0,
    y: 20,
    duration: 1.2,
    delay: 0.4,
    ease: "power2.out"
  });

  return (
    <div>
      <div className="d-flex flex-column gap-3 mt-4">

        <div className="d-none d-md-block">
          <div className="d-flex gap-3 align-items-center">
            <div className="img-wrapper">
              <Image
                className="img-fluid border border-2 border-dark rounded-circle hero-img"
                priority={true}
                src={HeroImg}
                alt="sonal gupta"
                height={140}
              />
            </div>

            <div>
              <p className="freelancer m-0" style={{ lineHeight: 1 }}>HI, I am</p>
              <h1 className="fw-600 profilename" style={{ fontSize: 40 }}>
                {profile.fullName}
              </h1>
            </div>
          </div>
        </div>

        <div className="d-block d-md-none">
          <div className="d-flex gap-3 align-items-center">
            <div className="img-wrapper">
              <Image
                className="img-fluid border border-2 border-dark rounded-circle hero-img"
                priority={true}
                src={HeroImg}
                alt="sonal gupta"
                height={90}
              />
            </div>
            <div>
              <p className="freelancer m-0" style={{ lineHeight: 1 }}>HI, I am</p>
              <h1 className="fw-600" style={{ fontSize: 30 }}>
                {profile.fullName}
              </h1>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <div>
            <p className="fw-normal fs-6 description">
              <div className="hero-gradient fw-bold">
                OIC Technical Consultant
              </div>
              , <div className="hero-gradient fw-bold">
              MSSQL DBA
            </div> and <div className="hero-gradient fw-bold">
              Full Stack developer
            </div> specializing in creating oracle integrations, MSSQL Database Administration and NodeJS web
              development.
            </p>
          </div>

          <div className="mt-4">
            <p className="desc description">
              I am experienced in creating and managing Oracle Integration Cloud (OIC) integrations using REST, SOAP, FTP, and database adapters. My skills include data migration with FBDI and HCM Data Loader, error handling, and process automation. I have worked with Oracle VBCS for UI development, BIP for reporting, and XSD/XSLT for data transformation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const HighlightWrapper = ({ text }: { text: string }) => (
  <div className="fw-bold">
    {text}
  </div>
);

export default HeroMini;