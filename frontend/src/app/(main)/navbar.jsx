'use client'

import Link from "next/link";

const Navbar = () => {

  return (
   <div>
    <header className=" border-b">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
            {/* logo - start */}
            <div className='flex'>
            <Link href="/"> <img style={{ height: 50 }} src="/shortlogowhite.png"  alt="" /></Link>
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