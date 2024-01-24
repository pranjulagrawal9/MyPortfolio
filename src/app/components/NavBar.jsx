"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Photo from "../../../public/assets/images/Photo.png";
import { FaGithub } from "react-icons/fa";
import Profile from "../../../public/assets/images/profile.png";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          document.body.classList.add("nav-fixed");
        } else document.body.classList.remove("nav-fixed");
      },
      {
        threshold: 0,
        rootMargin: "-100px",
      }
    );

    observer.observe(document.getElementById("my-desc"));

    return () => {
      observer.unobserve(document.getElementById("my-desc"));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          document.getElementById("home").style.opacity = "0";
        } else document.getElementById("home").style.opacity = "1";
      },
      {
        threshold: 0,
      }
    );

    observer.observe(document.getElementById("home"));

    return () => {
      observer.unobserve(document.getElementById("home"));
    };
  }, []);

  return (
    <nav
      id="home"
      className="px-7 flex justify-between items-center h-20 mb-8 transition-opacity duration-500"
    >
      <div className="w-14 h-14 max-[850px]:w-12 max-[850px]:h-12 rounded-full overflow-hidden">
        <Image src={Profile} className="w-full h-full" alt="Logo" />
      </div>

      <div
        className={`flex text-sm gap-6 max-[640px]:hidden max-[640px]:gap-4 items-center ${
          showMobileMenu
            ? "!flex max-[640px]:flex-col max-[640px]:absolute max-[640px]:top-20 max-[640px]:left-0 max-[640px]:right-0 max-[640px]:bg-[#243b55] max-[640px]:p-6 max-[640px]:z-30 max-[640px]:shadow-lg"
            : ""
        }`}
      >
        <ul className="flex gap-6 uppercase text-gray-300 items-center max-[640px]:flex-col max-[640px]:gap-4">
          <li
            className="tracking-widest cursor-pointer"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Home
          </li>

          <a href="#portfolio">
            <li className="tracking-widest">Portfolio</li>
          </a>

          <a href="#skills">
            <li className="tracking-widest">Skills</li>
          </a>

          <a href="#contact">
            <li className="tracking-widest">Contact</li>
          </a>
        </ul>
        <a href="https://github.com/pranjulagrawal9" target="_blank">
          <FaGithub size={32} />
        </a>
        {/* <a
          href="/assets/images/Pranjul_Agrawal_Resume.pdf"
          download="Pranjul_Agrawal_Resume.pdf"
        >
          <li className="tracking-widest uppercase bg-red-600 px-2 py-3 rounded-lg font-bold hover:bg-red-700 cursor-pointer select-none active:scale-90 transition-all list-none max-[640px]:w-fit max-[640px]:mx-auto">
            Download CV
          </li>
        </a> */}
      </div>

      <GiHamburgerMenu
        className="text-2xl min-[640px]:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
    </nav>
  );
}

export default NavBar;
