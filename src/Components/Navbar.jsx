import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    
    if (menuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToHomeAndScroll = (sectionId) => {
    toggleMenu();
    navigate('/');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="px-4 md:px-20 py-4 md:py-10 flex justify-between items-center bg-white fixed w-full top-0 z-100 font-Open-Sans">
      <NavLink to="/">
        <h1 className="text-xl text-gray-800 font-bold">Present Perfect</h1>
      </NavLink>
      <div className="md:flex items-center relative">
        <button
          onClick={toggleMenu}
          className="md:hidden block text-gray-800 focus:outline-none "
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {menuOpen && (
          <div className="md:hidden fixed top-10 right-0 w-64 h-full bg-white z-50">
            <ul className="mt-4 space-y-2 flex flex-col">
              <NavLink to="/" onClick={toggleMenu}>
                <li className="hover:text-purple-300">Home</li>
              </NavLink>
              <li className="hover:text-purple-300">
                <button
                  className="cursor-pointer"
                  onClick={() => navigateToHomeAndScroll('about')}
                >
                  About Us
                </button>
              </li>
              <li className="hover:text-purple-300">
                <button
                  className="cursor-pointer"
                  onClick={() => navigateToHomeAndScroll('footer')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="md:flex items-center hidden">
        <ul className="flex space-x-6">
          <li className="hover:text-purple-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-purple-300">
            <a
              href="#about"
              className="scroll-smooth cursor-pointer"
              onClick={() => navigateToHomeAndScroll('about')}
            >
              About Us
            </a>
          </li>
          <li className="hover:text-purple-300">
            <a
              href="#footer"
              className="cursor-pointer"
              onClick={() => navigateToHomeAndScroll('footer')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
