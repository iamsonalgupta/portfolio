"use client";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SolarFileTextBoldDuotone } from "@/components/icons/SolarFileTextBoldDuotone";
import { SvgSpinners270Ring } from "@/components/icons/SvgSpinners270Ring";
import HeroMini from "@/components/HeroMini";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
      document.documentElement.style.setProperty("--primary", savedColor);
    }
    const savedDir = localStorage.getItem("dir");
    if (savedDir) {
      document.documentElement.dir = savedDir;
    }
    setLoading(false);
  }, []);


  if (loading) {
    return (
      <div className="loader-container w-100  d-flex align-items-center justify-content-center" style={{
        background: "rgba(215, 211, 201)"
      }}>
        <SvgSpinners270Ring height={60} />

      </div>
    );
  }
  return (
    <>
      {/*<Header navOpen={navOpen} classes="d-xl-none" setNavOpen={setNavOpen} />*/}

      <main className="container-xl">
        <div className="col-12" data-bs-spy="scroll" data-bs-target="#navigation">

          <nav className={`navigation-sticky ${navOpen ? "opened" : ""}`} id="navigation">
            {/*<Image src={Logo} className="d-xl-none d-xxl-block" height="40" alt="logo" />*/}
            <div className="d-flex align-items-center gap-2">
              <SolarFileTextBoldDuotone className="text-dark" />
              <h5>Portfolio</h5>
            </div>
            <ul>
              {/*<li className="nav-link">*/}
              {/*  <Link href="#top" className="active">*/}
              {/*    <span className="text">top</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className="nav-link">
                <Link href="#about_me">
                  <span className="text">about</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#services">
                  <span className="text">Skills</span>
                </Link>
              </li>
              {/*<li className="nav-link">*/}
              {/*  <Link href="#attainments">*/}
              {/*    <span className="text">skills</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li className="nav-link">*/}
              {/*  <Link href="#fun_facts">*/}
              {/*    <span className="text">facts</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className="nav-link">
                <Link href="#experience">
                  <span className="text">experiences</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="#projects">
                  <span className="text">projects</span>
                </Link>
              </li>
              {/*<li className="nav-link">*/}
              {/*  <Link href="#how_i_work">*/}
              {/*    <span className="text">how i work</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li className="nav-link">*/}
              {/*  <Link href="#testimonials">*/}
              {/*    <span className="text">testimonials</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className="nav-link">
                <Link href="#contact">
                  <span className="text">contact me</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="d-block d-lg-none">
            <HeroMini />
          </div>

          <div className="d-none d-lg-block">
            <Hero classes="hero-left-bar" />
          </div>


          {/*<div className="nav-overlay d-xl-none" onClick={() => setNavOpen(false)}></div>*/}

          {/* <!-- about me --> */}
          <div className="d-none d-lg-block">
            <AboutMe />
          </div>

          {/* <!-- services --> */}
          <Services />

          {/* <!-- attainments --> */}
          {/*<Attainments />*/}

          {/* <!-- fun facts --> */}
          {/*<FunFacts />*/}

          {/* <!-- experience --> */}
          <Experience />

          {/* <!-- projects --> */}
          <br />
          <Projects />

          {/* <!-- how i work --> */}
          {/*<HowIWork />*/}

          {/* blogs */}
          {/*<Blogs />*/}

          {/* <!-- testimonials --> */}
          {/*<Testimonials />*/}

          {/* <!-- contact --> */}
          <br />
          <Contact />
        </div>
      </main>
      {/* <!-- color switcher --> */}
    </>
  );
}
