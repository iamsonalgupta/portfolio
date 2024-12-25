import React, { useEffect } from "react";
import ProgressChart from "./ProgressChart";
import Link from "next/link";
import SkillBar from "./SkillBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverlayText from "./SectionOverlayText";
gsap.registerPlugin(ScrollTrigger);
const skills = [
  {
    name: "Front-End Development",
    percentage: 90,
  },
  {
    name: "Back-End Development",
    percentage: 85,
  },
  {
    name: "Full-Stack Development",
    percentage: 88,
  },
  {
    name: "Database Management",
    percentage: 80,
  },
  {
    name: "Version Control",
    percentage: 95,
  },
  {
    name: "API Integration",
    percentage: 87,
  },
];
const Attainments = () => {
  useGSAP(() => {
    gsap.from(".design-row-item", {
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "back",
      scrollTrigger: {
        trigger: ".attainments",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.from(".developer-row", {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".design-row",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.from(".language-row-item", {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "back",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".developer-row",
        start: "top 60%",
        end: "top 20%",
      },
    });
  });
  return (
    <section id="attainments" className="attainments section position-relative">
      <SectionOverlayText text="attainments" />
      <div className="row pb-120 design-row">
        <div className="col-lg-4">
          <div className="section-title-sm design-row-item">
            <div className="top">
              <h2>Design Skills</h2>
              <span>Highlight My Expertise in:</span>
            </div>
            <span className="serial">01.-</span>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-md-4 design-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="design-chart mb-4">
                  <ProgressChart progress={85} />
                </div>
                <button className="btn btn-outline-secondary px-5">Design</button>
              </div>
            </div>
            <div className="col-md-4 design-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="branding-chart mb-4">
                  <ProgressChart progress={90} />
                </div>
                <button className="btn btn-outline-secondary px-5">Branding</button>
              </div>
            </div>
            <div className="col-md-4 design-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="ecommerce-chart mb-4">
                  <ProgressChart progress={80} />
                </div>
                <button className="btn btn-outline-secondary px-5">Ecommerce</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-120 developer-row">
        <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
          <div className="section-title-sm">
            <div className="top">
              <h2>Developer Skills</h2>
              <span>Highlight My Expertise in:</span>
            </div>
            <span className="serial">02.-</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column gap-3">
            {skills.map(({ name, percentage }) => (
              <SkillBar key={name} skill={name} percentage={percentage} />
            ))}
          </div>
        </div>
      </div>
      <div className="row pb-120 language-row">
        <div className="col-lg-4">
          <div className="section-title-sm language-row-item">
            <div className="top">
              <h2>Language Skills</h2>
              <span>Highlight My Expertise in:</span>
            </div>
            <span className="serial">03.-</span>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row g-3">
            <div className="col-12 col-sm-6 col-md-4 language-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="design-chart mb-4">
                  <ProgressChart progress={95} />
                </div>
                <button className="btn btn-outline-secondary px-5">French</button>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 language-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="branding-chart mb-4">
                  <ProgressChart progress={92} />
                </div>
                <button className="btn btn-outline-secondary px-5">English</button>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 language-row-item">
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="ecommerce-chart mb-4">
                  <ProgressChart progress={88} />
                </div>
                <button className="btn btn-outline-secondary px-5">Dutch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Link href="#fun_facts" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">04/11</span>
          <span className="next">Next Chapter</span>
          <span className="icon">
            <i className="ph ph-arrow-elbow-right-down"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Attainments;
