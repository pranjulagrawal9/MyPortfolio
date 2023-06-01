import React from "react";
import Image from "next/image";
import CSS from "../../../public/assets/images/CSS.png";
import HTML from "../../../public/assets/images/HTML.png";
import react from "../../../public/assets/images/react.png";
import js from "../../../public/assets/images/js.png";
import redux from "../../../public/assets/images/redux.png";
import git from "../../../public/assets/images/git.png";
import { motion } from "framer-motion";

function FrontEndSkills() {
  return (
    <motion.div
      className="mt-10"
      initial={{opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{opacity: 1}}
    >
      <ul className="flex flex-col gap-5">
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <Image src={HTML} className="w-20 max-[640px]:w-14" alt="html" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <Image src={CSS} className="w-20 max-[640px]:w-14" alt="css" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <div className="flex items-center gap-1 max-[850px]:flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
                className="w-20 max-[640px]:w-14"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-xl font-bold max-[640px]:text-base">tailwindcss</span>
            </div>
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <Image src={js} className="w-20 px-2 max-[640px]:w-14" alt="javascript" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <Image src={react} className="w-20 max-[640px]:w-14" alt="react" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex flex-col items-center">
            <Image src={redux} className="w-20 max-[640px]:w-14" alt="redux" />
            <div className="text-xl font-bold max-[640px]:text-base">Redux</div>
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 103.22"
              className="w-24 max-[640px]:w-16"
            >
              <path
                d="M340.36.04h89.18V16.5h-35.38v86.6h-17.69V16.5h-36.11V.04zM503.8 70.86c-.19-1.82-1.03-3.25-2.49-4.27-1.48-1.03-3.38-1.54-5.72-1.54-1.64 0-3.05.25-4.23.74-1.17.49-2.08 1.15-2.71 1.99-.62.84-.93 1.8-.96 2.87 0 .9.22 1.68.64 2.33.42.66.98 1.22 1.71 1.67.72.46 1.52.83 2.4 1.14.89.31 1.77.57 2.66.78l4.09 1c1.64.38 3.23.89 4.76 1.54 1.52.64 2.9 1.45 4.11 2.43 1.21.98 2.17 2.16 2.87 3.54.71 1.39 1.07 3.01 1.07 4.87 0 2.52-.65 4.73-1.95 6.64-1.31 1.9-3.19 3.39-5.66 4.46-2.46 1.07-5.43 1.61-8.93 1.61-3.38 0-6.33-.52-8.81-1.56-2.49-1.03-4.44-2.54-5.84-4.52-1.4-1.99-2.15-4.41-2.26-7.26h7.76c.11 1.49.59 2.73 1.41 3.74.82.99 1.9 1.72 3.22 2.22 1.33.48 2.82.73 4.46.73 1.71 0 3.22-.26 4.53-.77 1.29-.51 2.31-1.21 3.04-2.14.75-.9 1.12-1.98 1.13-3.21-.01-1.12-.35-2.05-.99-2.79-.66-.73-1.57-1.34-2.74-1.84-1.17-.49-2.54-.94-4.1-1.33l-4.96-1.25c-3.58-.91-6.42-2.3-8.5-4.15-2.08-1.86-3.11-4.31-3.11-7.39 0-2.53.69-4.75 2.1-6.65 1.39-1.9 3.29-3.38 5.7-4.43 2.42-1.06 5.15-1.58 8.2-1.58 3.09 0 5.8.52 8.14 1.58 2.33 1.05 4.17 2.51 5.5 4.38s2.02 4 2.06 6.42h-7.6zm-40.09-11.8h7.84v30.19c-.01 2.78-.61 5.15-1.79 7.15-1.18 2-2.83 3.52-4.93 4.59-2.1 1.07-4.56 1.61-7.35 1.61-2.55 0-4.84-.46-6.88-1.36-2.04-.9-3.66-2.24-4.84-4.01-1.2-1.78-1.79-3.98-1.79-6.63h7.85c.01 1.16.28 2.16.78 3 .5.84 1.2 1.48 2.08 1.93.9.45 1.94.67 3.1.67 1.26 0 2.33-.26 3.21-.79.87-.52 1.55-1.3 2.01-2.34.46-1.03.7-2.3.71-3.82V59.06zm-30.19 43.41c-1.3 0-2.4-.45-3.32-1.35-.92-.89-1.38-1.98-1.37-3.27-.01-1.25.45-2.32 1.37-3.22.92-.9 2.02-1.35 3.32-1.35 1.25 0 2.34.45 3.26 1.35.93.9 1.4 1.97 1.41 3.22-.01.85-.22 1.63-.66 2.33-.44.71-1 1.26-1.71 1.67-.7.41-1.46.62-2.3.62zm-329-.14L22.11 0H0v103.06h17.69V22.03l65.22 81.07h110.78V86.64H122.2v-27.2h57.49V42.98H122.2V16.5h71.49V.04h-89.18V16.5h.01v85.83zM261.98 73.7l-11.6-14.42-35.37 43.94h23.21l23.76-29.52zM238.22.09h-23.15l82.92 103.05h23.21l-41.46-51.49L321.14.16 297.99.2l-29.84 37.06L238.22.09z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.4 }}
                viewport={{once: true}}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <Image src={git} className="w-20 max-[640px]:w-14" alt="git" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default FrontEndSkills;
