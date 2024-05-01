import React from 'react'

const AdminNavbar = () => {
  return (

    <div>

      {/* navbar */}
      <div className='fixed w-full z-30 top-0'>
        <div className="w-full py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky left-0">
          <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
            <h2 className="font-bold text-black text-2xl">
              Plugin-{" "}
              <span className="bg-[#f84525] text-white px-3 rounded-md">World</span>
            </h2>
          </a>
          <button
            type="button"
            className="text-lg text-gray-900 font-semibold sidebar-toggle"
          >
            <i className="ri-menu-line" />
          </button>
          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">
              <a
                href="/admin/dashboard"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                Dashboard
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/admin/plugins"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                Add Plugin
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/admin/manageuser"
                className="text-black mr-4 rounded flex items-center justify-center  hover:text-gray-600"
              >
                Users
              </a>
            </li>

            <li className="dropdown ml-3">
              <a href="/admin/profile" className="dropdown-toggle flex items-center">
                <div className="flex-shrink-0 w-10 h-10 relative">
                  <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                      alt=""
                    />
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping" />
                    <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full" />
                  </div>
                </div>
                <div className="p-2 md:block text-left">
                  <h2 className="text-sm font-semibold text-gray-800">Shaurya Singh</h2>
                  <p className="text-xs text-gray-800">Administrator</p>
                </div>
              </a>
            </li>
            <li className="mr-1 dropdown">
              <a
                href="/"
                className="text-black mr-1 rounded flex items-center justify-center  hover:text-gray-600"
              >
              <img style={{height:45}}src="/logout.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end navbar */}
    </div>
  );
};

export default AdminNavbar;