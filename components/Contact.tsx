import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { profile } from "@/config/profile.config";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [submitBtn, setSubmitBtn] = React.useState("Submit");
  useGSAP(() => {
    gsap.fromTo(
      ".section-title-overlay-text",
      { y: "50%" },
      {
        y: "-50%",
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    gsap.from(".submit-btn", {
      scale: 0,
      duration: 3.5,
      ease: "elastic",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".submit-btn",
      },
    });
    gsap.from(".contact-item", {
      scale: 0,
      duration: 0.8,
      ease: "back",
      scrollTrigger: {
        trigger: ".contact-items",
      },
    });

    gsap.from(".contact-input", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-input",
      },
    });
  });
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Sending...");
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current!, { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string }).then(
      function () {
        console.log("SUCCESS!");
        form.current?.reset();
        setSubmitBtn("Success");
        setTimeout(function () {
          setSubmitBtn("Submit");
        }, 3000);
      },
      function (error) {
        setSubmitBtn("Submit");
        console.log("FAILED...", error);
      },
    );
  };
  return (
    <section id="contact" className="contact section position-relative">
      <span className="section-title-overlay-text">contact</span>
      <SectionTitle subtitle="Let's Get in touch" title="Contact me" />

      {/*<div className="row pb-120 contact-items">*/}
      {/*  <div className="row g-4">*/}
      {/*    <div className="col-sm-6 col-xl-4 col-xxl-4">*/}
      {/*      <div className="contact-item">*/}
      {/*        <div className="icon-box">*/}
      {/*          <i className="ph ph-phone-call"></i>*/}
      {/*        </div>*/}
      {/*        <p>{profile.mobile}</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="col-sm-6 col-xl-4 col-xxl-4">*/}
      {/*      <div className="contact-item">*/}
      {/*        <div className="icon-box">*/}
      {/*          <i className="ph ph-envelope-open"></i>*/}
      {/*        </div>*/}
      {/*        <p>{profile.email}</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    /!*<div className="col-sm-6 col-xl-4 col-xxl-3">*!/*/}
      {/*    /!*  <div className="contact-item">*!/*/}
      {/*    /!*    <div className="icon-box">*!/*/}
      {/*    /!*      <i className="ph ph-map-pin"></i>*!/*/}
      {/*    /!*    </div>*!/*/}
      {/*    /!*    <p>4730 Crystal Springs Dr, Los Angeles, CA</p>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <div className="col-sm-6 col-xl-4 col-xxl-4 d-flex align-items-center">*/}
      {/*      <div className="d-flex gap-3 social-icons">*/}
      {/*        <a href="#">*/}
      {/*          <i className="ph ph-facebook-logo"></i>*/}
      {/*        </a>*/}
      {/*        <a href="#">*/}
      {/*          <i className="ph ph-linkedin-logo"></i>*/}
      {/*        </a>*/}
      {/*        <a href="#">*/}
      {/*          <i className="ph ph-twitter-logo"></i>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <form ref={form} onSubmit={handleSubmit} id="contact-form" className="contact-form">
        {/*<h4>Leave a Message</h4>*/}
        <div className="row g-4 g-xl-5">
          <div className="col-sm-6 contact-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="Your name" required />
          </div>
          <div className="col-sm-6 contact-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Your e-mail" required />
          </div>
          <div className="col-12 contact-input">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message"></textarea>
          </div>
          <div className="col-12">
            <button type="submit" id="submit-btn" className="submit-btn position-relative">
              <div className="waves-top-md">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {submitBtn}
              <div className="waves-bottom-md">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </form>
      <div className="col mt-5 pt-5 next-chapter">
        <span className="page">11/11</span>
      </div>
    </section>
  );
};

export default Contact;
