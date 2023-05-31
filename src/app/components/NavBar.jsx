"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Photo from "../../../public/assets/images/Photo.png";

function NavBar() {
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
          document.getElementById("home").style.opacity='0';
        }
        else
          document.getElementById("home").style.opacity='1';
      },
      {
        threshold: 0
      }
    );

    observer.observe(document.getElementById("home"));
  
    return () => {
      observer.unobserve(document.getElementById("home"));
    }
  }, [])
  

  return (
    <nav id="home" className="px-7 flex justify-between items-center h-20 mb-8 transition-opacity duration-500">
      <div className="w-16 h-16 bg-black rounded-full overflow-hidden border-[3px] border-gray-700">
        <Image
          src={Photo}
          width="64"
          className="w-32 h-32 object-cover "
          alt="Logo"
        />
      </div>

      <div>
        <ul className="flex gap-6 uppercase text-gray-300 text-sm items-center">
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

          <a href="/assets/images/Resume_Pranjul.pdf" download="Resume.pdf">
            <li className="tracking-widest bg-red-600 px-2 py-3 rounded-lg font-bold hover:bg-red-700 cursor-pointer select-none active:scale-90 transition-all">
              Download CV
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
