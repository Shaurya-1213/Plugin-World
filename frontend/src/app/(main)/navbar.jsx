'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Pluginworld
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16 p-8">
          <a href="/" className="text-lg font-semibold text-indigo-500">
            Home
          </a>
          <a
            href="/login"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Signup
          </a>
          <a
            href="about"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
          <a
            href="contact"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact Us
          </a>
        </nav>
        {/* nav - end */}
       
      </div>
    
  );
};

export default Navbar;