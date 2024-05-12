'use client'

import Link from "next/link";

export const Nav = () => {

  return (
    <>
    <header className=" border-none">
          <div className="mx-auto flex max-w-screen-xl  justify-end  ">
            {/* nav - start */}
            <nav className="hidden gap-10 lg:flex p-4">
              <Link href="/user/homepage" className="text-lg font-semibold text-white">
                Home
              </Link>
              <Link
                href="/user/profile"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Profile
              </Link>
              <Link
                href="/user/plugin"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Plugin
              </Link>
              <Link
                href="/user/feedback"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Feedback
              </Link>
              <Link
                href="/"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              > 
                Logout
              </Link>
            </nav>
            {/* nav - end */}

          </div>
        </header>
    </>
  );
};