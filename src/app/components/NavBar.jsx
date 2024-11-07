"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-[1px] border-[#676767]' >
    <div className="flex items-center justify-between  mx-10 mt-2 p-4 md:p-0">
      <div className="flex items-center space-x-3">
        <img className="w-14 h-10" src="/logo.png" alt="Logo" />
        <h1 className="text-white text-[30px] md:text-[40px] font-semibold">Wolf Decentralized</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-14">
        <ul className="flex space-x-16 items-center">
          <li className="cursor-pointer hover:text-[#00C4F4] hover:scale-105">Home</li>
          <li className="cursor-pointer hover:text-[#00C4F4] hover:scale-105">About</li>
          <li className="cursor-pointer hover:text-[#00C4F4] hover:scale-105">Our App</li>
          <li className="cursor-pointer hover:text-[#00C4F4] hover:scale-105">Pages</li>
          <li className="cursor-pointer hover:text-[#00C4F4] hover:scale-105">Token Sale</li>
        </ul>
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <RxCross2 className="w-8 h-8 text-white" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center space-y-6 md:hidden">
          <ul className="text-center text-white space-y-6">
            <li className="cursor-pointer hover:text-[#00C4F4] text-2xl" onClick={toggleMenu}>Home</li>
            <li className="cursor-pointer hover:text-[#00C4F4] text-2xl" onClick={toggleMenu}>About</li>
            <li className="cursor-pointer hover:text-[#00C4F4] text-2xl" onClick={toggleMenu}>Our App</li>
            <li className="cursor-pointer hover:text-[#00C4F4] text-2xl" onClick={toggleMenu}>Pages</li>
            <li className="cursor-pointer hover:text-[#00C4F4] text-2xl" onClick={toggleMenu}>Token Sale</li>
          </ul>
          <Link href="#" className="bg-[#00C4F4] rounded-lg font-semibold text-xl px-8 py-4 text-white hover:scale-105">
            Download App
          </Link>
        </div>
      )}

      {/* Download Button (Desktop only) */}
      <div className="hidden md:block">
        <Link href="#" className="bg-[#00C4F4] rounded-lg font-semibold text-sm px-4 py-4 hover:scale-105">
          Download App
        </Link>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
