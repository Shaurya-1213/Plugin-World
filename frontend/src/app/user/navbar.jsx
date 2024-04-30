'use client'

export const Nav = () => {

  return (
    <>
    <header className=" border-none">
          <div className="mx-auto flex max-w-screen-xl  justify-end  ">
            {/* nav - start */}
            <nav className="hidden gap-10 lg:flex p-4">
              <a href="/user/homepage" className="text-lg font-semibold text-white">
                Home
              </a>
              <a
                href="/user/profile"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Profile
              </a>
              <a
                href="/user/plugin"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Plugin
              </a>
              <a
                href="/user/feedback"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Feedback
              </a>
              <a
                href="/"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              > 
                Logout
              </a>
            </nav>
            {/* nav - end */}

          </div>
        </header>
    </>
  );
};