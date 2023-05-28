import Image from "next/image";
import React from "react";
import Photo from "../../../public/assets/images/Photo.png";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="py-3 px-7 flex justify-between items-center mb-10">
      <div className="w-16 h-16 bg-black rounded-full overflow-hidden border-[3px] border-gray-700">
        <Image
          src={Photo}
          width="64"
          className="w-32 h-32 object-cover "
          alt="Logo"
        />
      </div>

      <div>
        <ul className="flex gap-6 uppercase text-gray-300 text-sm">
          <li>Home</li>

          <a href="#portfolio"><li>Portfolio</li></a>
          <li>Resume</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
