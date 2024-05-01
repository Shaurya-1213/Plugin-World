'use client'

const Navbar = () => {

  return (
   <div>
    <header className=" border-b">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
            {/* logo - start */}
            <div className='flex'>
            <a href="/"> <img style={{ height: 50 }} src="/shortlogowhite.png"  alt="" /></a>
            </div>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex  2xl:ml-16 p-4">
              <a href="/" className="text-lg font-semibold text-white">
                Home
              </a>
              <a
                href="/login"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Signup
              </a>
              <a
                href="/about"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Contact Us
              </a>
            </nav>
            {/* nav - end */}

          </div>
        </header>
   </div>
    
  );
};

export default Navbar;