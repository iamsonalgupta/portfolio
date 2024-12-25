import Image from "next/image";
import React from "react";
import arrow from "@/public/images/arrow.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionTitle from "./SectionTitle";
import SectionOverlayText from "./SectionOverlayText";
import { experience } from "@/config/experience.config";

const Experience = () => {
  useGSAP(() => {
    gsap.from(".experience-item", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".experience-item"
      }
    });

    gsap.utils.toArray(".experience-item").forEach((item: any) => {
      gsap.to(item, {
        "--item-height": "100%",
        stagger: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 20%"
        }
      });
    });

    gsap.to(".experience-wrapper", {
      duration: 2,
      ease: "back",
      delay: 0.5,
      "--height": "100%",
      scrollTrigger: {
        trigger: ".experience-wrapper"
      }
    });
  });
  return (
    <section id="experience" className="experience section position-relative">
      <SectionOverlayText text="experiences" />
      <SectionTitle subtitle="Highlight My key Experiences" title="My Experience" />
      <div className="row pb-60">
        <div className="col-lg-10 col-xl-8">
          <div className="experience-wrapper d-flex flex-column">
            {experience.timeline.map(timelineItem => (
              <div className="experience-item">
                <h5>{`@${timelineItem.employer}`}</h5>
                <h3>{`${timelineItem.role}`}</h3>
                <h5>{timelineItem.timespan}</h5>
                <p>{timelineItem.description}</p>
              </div>
            ))}
          </div>

          <Link href="/resumes/Node JS Resume - Sonal Gupta.pdf" target="_blank" className="download-cv position-relative" download>
            <div className="waves-top-md">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <svg width="45" height="54" viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 31.449L22.5 52.949L1 31.449L8.98204 23.3382L16.8353 31.449V0.550781H28.1647V31.449L36.018 23.3382L44 31.449Z"
                stroke="currentColor" />
            </svg>
            <div className="waves-bottom-md">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-12">
        <Link href="#projects" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">06/11</span>
          <span className="next">Next Chapter</span>
          <span className="icon">
            <i className="ph ph-arrow-elbow-right-down"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
