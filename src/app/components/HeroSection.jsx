"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Photo from "../../../public/assets/images/Photo.png";
import Lottie from "lottie-react";
import reactAnimation from '../../../public/assets/images/react.json'
import jsAnimation from '../../../public/assets/images/javascript.json'
import cssAnimation from '../../../public/assets/images/css.json'

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer.", "Freelancer.", "Developer."],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1600,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex mb-48">
      <div className="w-2/3 pt-10 pr-6">
        <div className="mb-5">
          <h3 className="uppercase tracking-[0.2em] mb-5">
            Transforming Ideas into Software
          </h3>
          <h1 className="text-6xl text-white font-bold max-[1150px]:text-5xl">
            Hi, I’m{" "}
            <span className="text-[#ff014f] font-bold">Pranjul Agrawal</span>
            <br />
            <span className="text-5xl font-medium max-[1150px]:text-4xl">
              a <span ref={el}></span>
            </span>
          </h1>
        </div>
        <p className="leading-7 mb-24 max-[1150px]:mb-10">
          I am a passionate frontend developer dedicated to crafting captivating
          user experiences through clean and intuitive web interfaces. Driven by
          collaboration and staying up-to-date with the latest trends, I create
          modern and engaging digital experiences that bring ideas to life.
        </p>

        <div className="flex justify-between">
          <div>
            <h4 className="uppercase mb-3">Connect With Me</h4>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className="group cursor-pointer"
              >
                <path
                  fill="#000"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  className="group-hover:fill-[#0288D1]"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className="group cursor-pointer"
              >
                <path
                  className="group-hover:fill-[#039be5]"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                />
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className="group cursor-pointer"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fd5" />
                  <stop offset=".328" stopColor="#ff543f" />
                  <stop offset=".348" stopColor="#fc5245" />
                  <stop offset=".504" stopColor="#e64771" />
                  <stop offset=".643" stopColor="#d53e91" />
                  <stop offset=".761" stopColor="#cc39a4" />
                  <stop offset=".841" stopColor="#c837ab" />
                </radialGradient>
                <path
                  fill="#000"
                  className="group-hover:fill-[url(#yOrnnhliCrdS2gy~4tD8ma)]"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#4168c9" />
                  <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                />
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="uppercase">My Top Skills</h4>
            <div className="flex gap-4">
              <Lottie animationData={reactAnimation} style={{width: '70px'}} />
              <Lottie animationData={jsAnimation} style={{width: '50px'}} />
              <Lottie animationData={cssAnimation} style={{width: '70px'}} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 pl-6">
        <div className="relative before:w-full before:h-3/4 before:bg-[#19283b] before:rounded-t-full before:block before:absolute before:bottom-0 before:-z-10">
          <Image src={Photo} width="100%" alt="Pranjul Agrawal" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
