import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

const TopbarHeader = ({ setNavOpen, navOpen, classes }: { setNavOpen: Dispatch<SetStateAction<boolean>>; navOpen: boolean; classes?: string }) => {
  return (
    <header className="header-topbar">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>

        <div className="d-flex gap-2 gap-sm-3 align-items-center">
          <Link className="d-flex gap-2 align-items-center" href="mailto:emily@devis.com">
            <i className="ph ph-envelope"></i> emily@devis.com
          </Link>
          <button onClick={() => setNavOpen((p) => !p)} className="bg-transparent border-0">
            <div className={`nav-icon ${navOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
      <nav className={`navigation-topbar ${navOpen ? "opened" : ""}`} id="navigation">
        <ul>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#top" className="active">
              <span className="text">top</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#about_me">
              <span className="text">about me</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#services">
              <span className="text">my services</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#attainments">
              <span className="text">skills</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#fun_facts">
              <span className="text">facts</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#experience">
              <span className="text">experiences</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#projects">
              <span className="text">projects</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#how_i_work">
              <span className="text">how i work</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#testimonials">
              <span className="text">testimonials</span>
            </Link>
          </li>
          <li className="nav-link" onClick={() => setNavOpen(false)}>
            <Link href="#contact">
              <span className="text">contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNavOpen(false)} className="nav-overlay"></div>
    </header>
  );
};

export default TopbarHeader;
