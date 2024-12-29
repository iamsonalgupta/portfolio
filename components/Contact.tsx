import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFormik } from "formik";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitBtn, setSubmitBtn] = React.useState("Submit");
  const [submitting, setSubmitting] = useState(false);
  const searchParams = new URLSearchParams();
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
          scrub: true
        }
      }
    );
    gsap.from(".submit-btn", {
      scale: 0,
      duration: 3.5,
      ease: "elastic",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".submit-btn"
      }
    });
    gsap.from(".contact-item", {
      scale: 0,
      duration: 0.8,
      ease: "back",
      scrollTrigger: {
        trigger: ".contact-items"
      }
    });

    gsap.from(".contact-input", {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-input"
      }
    });
  });


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",

      utmSource: searchParams?.get("utm_source"),
      utmMedium: searchParams?.get("utm_medium"),
      utmCampaign: searchParams?.get("utm_campaign")
    },

    onSubmit: async (values) => {

      setSubmitting(true);
      setSubmitBtn("Sending...");

      await fetch("/api/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formik.values)
      })
        .then((response) => {

          toast.success("Inquiry submitted !");

          formik.resetForm();

          setSubmitBtn("Submit");
        })
        .catch((err) => {
          setSubmitBtn("Submit");
          console.log(err);
        }).finally(() => {
          setSubmitting(false);
        });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formik.handleSubmit(e)
  }


  return (
    <section id="contact" className="contact section position-relative">

      <span className="section-title-overlay-text">contact</span>

      <SectionTitle subtitle="Let's Get in touch" title="Contact me" />

      <form ref={form} onSubmit={handleSubmit} id="contact-form" className="contact-form">
        <div className="row g-4 g-xl-5">
          <div className="col-sm-6 contact-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="col-sm-6 contact-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              placeholder="Your e-mail"
              required
            />
          </div>
          <div className="col-12 contact-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              placeholder="Your message"
            >
          </textarea>
          </div>
          <div className="col-12">
            {/* @ts-ignore */}
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
