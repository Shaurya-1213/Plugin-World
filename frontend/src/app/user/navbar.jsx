'use client'

import Link from "next/link";

export const Nav = () => {

  return (
    <>
        <div className="mx-16">

        <header className=''>
            <div style={{width:'90%'}} className="bg-white/75 fixed top-0 z-50 rounded-xl mb-0 mt-10 flex items-center justify-between">
              {/* logo - start */}
              <div className='flex'>
                <Link href="/">
                  <img style={{ height: 45 }} src="/shortlogoblack.png" alt="" /></Link>
              </div>
              {/* logo - end */}
              {/* nav - start */}
              <nav className="hidden gap-12 lg:flex  2xl:ml-16 p-4">
                <Link href="/user/homepage" className="text-lg font-semibold text-black">
                  Home
                </Link>
                <Link
                  href="/user/profile" className="text-lg font-semibold text-black"
                >
                  Profile
                </Link>
                <Link
                  href="/user/plugin" className="text-lg font-semibold text-black"
                >
                  Plugin
                </Link>
                <Link
                  href="/user/feedback" className="text-lg font-semibold text-black"
                >
                  Feedback
                </Link>
                <Link
                  href="/" className="text-lg font-semibold text-black"
                >
                  Logout
                </Link>
              </nav>
              {/* nav - end */}
            </div>
        </header>
        </div>
    </>
  );
};