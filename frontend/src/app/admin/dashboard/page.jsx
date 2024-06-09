'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {
  const [user,setUser]=useState();

  const [products,setProducts]=useState();

  const fetchUser = () => {
    fetch('http://localhost:5000/user/getall')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setUser(data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  const fetchProducts = () => {
    fetch('http://localhost:5000/product/getall')
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);

      setProducts(data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  useEffect(()=>{
    fetchUser();
    fetchProducts();
  },[]);

  return (
    <div>
    <>
  {/* ========== MAIN CONTENT ========== */}
  {/* Sidebar */}
  {/* End Sidebar */}
  {/* Content */}
  <div className="w-full lg:ps-64">
    <div className="p-8\4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Total users
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of daily users
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
              {Array.isArray(user) ? user.length : 0}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Plugins
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
              {Array.isArray(products) ? products.length : 0}
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Card */}
        <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                Income
              </h2>
              <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                $126,238.49
              </p>
            </div>
            <div>
              <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                <svg
                  className="inline-block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
                25%
              </span>
            </div>
          </div>
          {/* End Header */}
          <div id="hs-multiple-bar-charts" />
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                Visitors
              </h2>
              <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                80.3k
              </p>
            </div>
            <div>
              <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                <svg
                  className="inline-block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
                2%
              </span>
            </div>
          </div>
          {/* End Header */}
          <div id="hs-single-area-chart" />
        </div>
        {/* End Card */}
      </div>
    </div>
  </div>
  {/* End Content */}
  {/* ========== END MAIN CONTENT ========== */}
</>

  </div>
  )
}

export default AdminDashboard;