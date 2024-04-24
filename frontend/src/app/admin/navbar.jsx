import React from 'react'

const AdminNavbar = () => {
    return (
     
         <div>
          <>
  {/* component */}
  <nav className="bg-darkblue pt-5 pb-5 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
        {/* logo - start */}
        <div className='flex'>
        <img style={{ height: 50 }} src="/shortlogowhite.png" alt="" />
        </div>
        {/* logo - end */}
      </a>
      
      <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 text-xl md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block pr-14 pl-1 text-gray-700 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>

         </div>
        );
      };
  
export default AdminNavbar;