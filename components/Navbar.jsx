"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
          isScrolled
            ? "bg-slate-900 shadow-lg translate-y-0"
            : "bg-black translate-y-0"
        }`}
        aria-label="Navegación principal"
      >
        <nav className="flex items-center justify-between max-w-[1300px] mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/" title="Inicio - DXN Ayacucho">
              <Image
                src="/logodxn.webp"
                alt="logo DXN Ayacucho"
                width={100}
                height={100}
              />
            </a>
          </div>

          {/* Menu icon for small screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu links */}
          <ul
            className={`lg:flex lg:items-center lg:space-x-10 text-lg absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="/" className="block p-4 hover:text-red-600">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="https://dxnayacucho.vercel.app/nosotros"
                className="block p-4 hover:text-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="https://dxnayacucho.vercel.app/afiliacion"
                className="block p-4 hover:text-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Afiliarse
              </a>
            </li>
            <li>
              <a
                href="https://dxnayacucho.vercel.app/allproducts"
                className="block p-4 hover:text-red-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/51918237837"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contáctenos por WhatsApp"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg">
                    Contáctenos
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
