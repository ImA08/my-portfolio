import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import personalBrand from '../../public/personal_brand.png'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];
  return (
    <header
      className="fixed top-0 left-0 w-full z-90 text-white backdrop-blur-lg"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic text-white">
          <img src={personalBrand} alt="Imanul Aufa" className="w-15 h-15" />
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-200 text-lg"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-full text-lg cursor-pointer">
            Contact
          </button>
          </a>
        </nav>
        {/* MOBILE NAVIGATION */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-[#1e3a8a] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-5 text-white cursor-pointern "
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>

          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg text-white hover:text-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}

          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-full text-lg cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
