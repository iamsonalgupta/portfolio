import React from "react";
import Image from "next/image";
import HeroImg from "@/public/images/profile-pic.png";
import { profile, seo } from "@/config/profile.config";

const HeroMini = () => {
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
              <h1 className="fw-600" style={{ fontSize: 40 }}>
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
            <p className="fw-normal fs-6">{seo.description}</p>
          </div>

          <div className="mt-4">
            <p className="desc">
              I have experience in <HighlightWrapper text="NodeJS" />, <HighlightWrapper
              text="Typescript" />, <HighlightWrapper text="ExpressJS" />, <HighlightWrapper
              text="MongoDB" /> and <HighlightWrapper text="MSSQL" />. Over the past 2 years I have
              built{" "}
              <HighlightWrapper text="REST APIs" />, developed <HighlightWrapper text="Third Party Integrations" /> and
              worked as <HighlightWrapper text="Database Administration" /> to implement secure and
              scalable databases.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const HighlightWrapper = ({ text }: { text: string }) => (
  <strong className="underlinedXfst-italic">
    {text}
  </strong>
);

export default HeroMini;