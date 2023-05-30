import React from "react";
import nodejs from "../../../public/assets/images/node.png";
import mongodb from "../../../public/assets/images/mongodb.png";
import git from "../../../public/assets/images/git.png";
import Image from "next/image";
import { motion as m } from "framer-motion";

function BackendSkills() {
  return (
    <m.div
      className="mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex flex-col gap-5">
        <li className="flex items-center">
          <div className="w-1/4 flex justify-center">
            <Image src={nodejs} className="w-20" />
          </div>
          <div className="w-3/4">
            <div className="bg-black w-full h-5 rounded-md flex items-center">
              <m.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.4 }}
              ></m.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 flex justify-center">
            <h3 className="text-3xl">express</h3>
          </div>
          <div className="w-3/4">
            <div className="bg-black w-full h-5 rounded-md flex items-center">
              <m.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ duration: 0.4 }}
              ></m.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 flex justify-center">
            <Image src={mongodb} className="w-20 px-2" />
          </div>
          <div className="w-3/4">
            <div className="bg-black w-full h-5 rounded-md flex items-center">
              <m.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.4 }}
              ></m.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 flex justify-center">
            <Image src={git} className="w-20" />
          </div>
          <div className="w-3/4">
            <div className="bg-black w-full h-5 rounded-md flex items-center">
              <m.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></m.div>
            </div>
          </div>
        </li>
      </ul>
    </m.div>
  );
}

export default BackendSkills;
