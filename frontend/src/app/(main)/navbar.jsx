'use client'

import Link from "next/link";

const Navbar = () => {

  return (
    
    <div className="mx-16">

    <header className=''>
        <div style={{width:'90%'}} className="bg-voilet-900/75 fixed top-0 z-50 rounded-xl mb-0 mt-10 flex items-center justify-between">
          {/* logo - start */}
          <div className='flex'>
            <Link href="/">
              <img style={{ height: 45 }} src="/shortlogowhite.png" alt="" /></Link>
          </div>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex  2xl:ml-16 p-4">
            <Link href="/" className="text-lg font-semibold text-white">
              Home
            </Link>
            <Link
              href="/login"
              className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Signup
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Contact Us
            </Link>
          </nav>
          {/* nav - end */}
        </div>
    </header>
    </div>     
      
  );
};

export default Navbar;