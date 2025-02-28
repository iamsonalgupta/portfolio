import Link from "next/link";
import React from "react";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";
import { profile } from "@/config/profile.config";
import { FormkitEmail } from "@/components/icons/FormkitEmail";
import { UiwMailO } from "@/components/icons/UiwMailO";
import { BxMapPin } from "@/components/icons/BxMapPin";

const AboutMe = () => {
  return (
    <section id="about_me" className="about section">
      <SectionOverlayText text="About Me" />
      <SectionTitle subtitle="Let me introduce myself" title="Know Me More" />
      {/*<SectionTitle subtitle="Some Word About Me" title="Know Me More" />*/}
      <div className="row mb-4 mb-lg-5 align-items-center">
        <div className="col-lg-7 col-xl-8 about-desc">
          <h2 className="">I&apos;m <span className="hero-gradient fw-bold">{profile.fullName}</span></h2>
          {/*, a Web Developer*/}
          <p className="desc">
            {/*I have experience in NodeJS, Typescript, ExpressJS, MongoDB and MSSQL. Over the past 2 years I have built*/}
            {/*REST APIs, developed third party integrations and worked as database administrator to implement secure and*/}
            {/*scalable databases.*/}

            I am experienced in creating and managing Oracle Integration Cloud (OIC) integrations using REST, SOAP, FTP, and database adapters. My skills include data migration with FBDI and HCM Data Loader, error handling, and process automation. I have worked with Oracle VBCS for UI development, BIP for reporting, and XSD/XSLT for data transformation.

            {/* 1 year in Oracle Integration Cloud and Oracle Fusion and 2 years of experience as a Full Stack Developer and Database Administrator I offer a comprehensive skill set backed by hands-on experience

            1 year in Oracle Integration Cloud

            I have successfully designed and developed integrations for AR Invoice, AP Payable processes and scheduled FBDI Automation integrations. I have experience working with data migration tools such as FBDI and HDL and creating BI Publisher reports, XSD/XSLT schemas, and HCM extracts. I have built ERP-SFTP integrations for bulk data transfer, GL Daily Rates loading, and user feedback management, ensuring reliability through testing. */}
          </p>
          <div className="row about-contact">
            <div className="col-sm-6 about-contact-item">
              <p>
                <span className="d-flex gap-1 align-items-center fw-normal">
                  <UiwMailO />
                Email
                </span>
              </p>
              <Link href="mailto:chat@portify.com">
                {profile.email}
              </Link>
            </div>
            {/*<div className="col-sm-4 about-contact-item">*/}
            {/*  <p>Date of Birth:</p>*/}
            {/*  <span>11 November, 1987</span>*/}
            {/*</div>*/}
            <div className="col-sm-6 about-contact-item">
              <p>
                <span className="d-flex gap-1 align-items-center fw-normal">
                  <BxMapPin />
                From
                </span>
              </p>
              <span>{profile.address.city}, {profile.address.state}</span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="experience-card">
            <div className="card-inner"></div>
            <div>
              <div className="numbers">
                <span className="number-outline-one">2</span>
                <span className="number-outline-two">2</span>
                <span className="number-main">2</span>
              </div>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="col-12">*/}
      {/*  <Link href="#services" className="d-flex gap-4 align-items-center next-chapter">*/}
      {/*    <span className="page">02/11</span>*/}
      {/*    <span className="next">Next Chapter</span>*/}
      {/*    <span className="icon">*/}
      {/*      <i className="ph ph-arrow-elbow-right-down"></i>*/}
      {/*    </span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </section>
  );
};

export default AboutMe;
