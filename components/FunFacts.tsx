"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const FunFacts = () => {
  const [offsetX, setOffestX] = useState(0);
  const [offsetY, setOffestY] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".section-title-overlay-text",
      { y: "50%" },
      {
        y: "-50%",
        scrollTrigger: {
          trigger: ".fun_facts",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.from(".fun-fact", {
      scale: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".fun-fact",
      },
    });
  });
  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
  }, []);
  const mouseMove = (e: MouseEvent) => {
    setOffestX((e.clientX - window.innerWidth / 2) * 0.01);
    setOffestY((e.clientY - window.innerHeight / 2) * 0.01);
  };
  return (
    <section id="fun_facts" className="fun_facts section">
      <span className="section-title-overlay-text">my facts</span>
      <SectionTitle subtitle="Some interesting facts about me" title="Fun Facts" />

      <div className="row pb-60">
        <div className="col-sm-6 col-md-4 col-xl-3">
          <div className="fun-fact">
            <div className="numbers">
              <span className="number-outline-one" style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)` }}>
                145
              </span>
              <span className="number-outline-two" style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
                145
              </span>
              <span className="number-main">145</span>
            </div>
            <p>Finished Projects</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
          <div className="fun-fact">
            <div className="numbers">
              <span className="number-outline-one" style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)` }}>
                128
              </span>
              <span className="number-outline-two" style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
                128
              </span>
              <span className="number-main">128</span>
            </div>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="row pb-60">
        <div className="col-sm-6 col-md-4 offset-md-2 offset-xl-5 col-xl-3">
          <div className="fun-fact">
            <div className="numbers">
              <span className="number-outline-one" style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)` }}>
                865
              </span>
              <span className="number-outline-two" style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
                865
              </span>
              <span className="number-main">865</span>
            </div>
            <p>Working Hours</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
          <div className="fun-fact">
            <div className="numbers">
              <span className="number-outline-one" style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)` }}>
                232
              </span>
              <span className="number-outline-two" style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}>
                232
              </span>
              <span className="number-main">232</span>
            </div>
            <p>Coffe Cups</p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Link href="#experience" className="d-flex gap-4 align-items-center next-chapter">
          <span className="page">05/11</span>
          <span className="next">Next Chapter</span>
          <span className="icon">
            <i className="ph ph-arrow-elbow-right-down"></i>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default FunFacts;
