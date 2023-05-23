import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/images/Logo.png";

function NavBar() {
  return (
    <nav className="py-3 px-7 flex justify-between items-center mb-10">
      <div className="w-16 h-16 bg-black rounded-full overflow-hidden relative border-[3px] border-gray-700">
        <Image
          src={Logo}
          width="64"
          className="w-32 h-32 object-cover absolute -top-2"
        />
      </div>

      <div>
        <ul className="flex gap-6 uppercase text-gray-300 text-sm">
          <li>Home</li>
          <li>Portfolio</li>
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
