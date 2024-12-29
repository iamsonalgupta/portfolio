import Image from "next/image";
import React from "react";
import HeroImg from "@/public/images/img.png";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { profile, seo } from "@/config/profile.config";

const Hero = ({ classes }: { classes?: string }) => {
  useGSAP(() => {
    gsap.from(".img-wrapper", { duration: 1.5, scale: 1.5, ease: "back", delay: 0.3, opacity: 0 });
    gsap.from(".work-btn", { duration: 1.2, scale: 0, opacity: 0, ease: "bounce" });
    gsap.from(".contact-btn", { duration: 1.2, scale: 0, opacity: 0, ease: "bounce" });

    const freelancer = SplitType.create(".freelancer").chars;
    const desc = SplitType.create(".description").chars;
    gsap.from(freelancer, { duration: 1.5, rotateX: 180, opacity: 0, ease: "bounce", stagger: 0.05 });
    gsap.from(desc, { duration: 1, rotateY: 180, stagger: 0.05 });
  });
  return (
    <section id="top" className={`hero ${classes}`}>
      <div className="row gx-4 justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-xl-6 hero-content">
          <div className="mb-3">
            <h4 className="text-uppercase freelancer">HI, I am</h4>
            {/* SOFTWARE ENGINEER */}
            <h1 style={{ fontSize: 84 }}>
              {profile.fullName}
            </h1>
            {/*<Typewriter*/}
            {/*  component={"h1"}*/}
            {/*  options={{*/}
            {/*    strings: ["Developer", "DB Admin", "OIC Technician"],*/}
            {/*    autoStart: true,*/}
            {/*    loop: true,*/}
            {/*  }}*/}
            {/*/>*/}
            <h2 className="fw-normal fs-5">{seo.description}</h2>
            {/*<p className="description">based in {profile.address.city}, {profile.address.state}</p>*/}
          </div>
          <div className="d-flex gap-4 mt-5">
            <Link href="#projects" className="btn work-btn text-capitalize btn-secondary">
              view my work
            </Link>
            <Link href="#contact" className="btn contact-btn text-capitalize btn-outline-secondary">
              contact me
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-5 offset-md-1 offset-xxl-2 col-xl-4 d-flex justify-content-center">
          <div className="img-wrapper">
            <div className="waves-top">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Image className="img-fluid rounded-circle hero-img" priority={true} src={HeroImg} alt="" />
            <div className="waves-bottom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Link href="#about_me" className="d-flex gap-4 align-items-center next-chapter mt-5">
            <span className="page">01/11</span>
            <span className="next">Next Chapter</span>
            <span className="icon">
              <i className="ph ph-arrow-elbow-right-down"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
