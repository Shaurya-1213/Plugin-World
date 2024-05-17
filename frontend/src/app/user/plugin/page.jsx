'use client'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const plugin = () => {
  return (
    <div>
      
      <div className="grid gap-4 mx-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product 1 - start */}
            <Fade direction="left" cascade damping={0.1} triggerOnce={true}><div>
              <Link
                href="/user/plugin/plugin-product-manager"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://aira.net/wp-content/uploads/2021/08/best-wordpress-seo-plugins-1024x684.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-voilet-300 p-4 text-center">
                  <span className="text-lg font-bold text-white lg:text-xl">
                    SEO Plugin
                  </span>
                </div>
              </Link>
            </div></Fade>
            {/* product - end */}
            {/* product 2 - start */}
            <Fade direction="left" cascade damping={0.09} triggerOnce={true}><div>
              <Link
                href="/user/plugin/plugin-product-manager"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://ps.w.org/wp-live-chat-software-for-wordpress/assets/screenshot-4.png?rev=2659126"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-voilet-300 p-4 text-center">
                  <span className="text-lg font-bold text-white lg:text-xl">
                    Live Chat Plugin
                  </span>
                </div>
              </Link>
            </div></Fade>
            {/* product - end */}
            {/* product 3 - start */}
            <Fade direction="right" cascade damping={0.09} triggerOnce={true}><div>
              <Link
                href="/user/plugin/plugin-product-manager"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://wpsocialninja.com/wp-content/uploads/2022/07/Facebook-review-plugin-for-WordPress-01-1-1.jpg"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-voilet-300 p-4 text-center">
                  <span className="text-lg font-bold text-white lg:text-xl">
                    Rating And Review Plugin
                  </span>
                </div>
              </Link>
            </div></Fade>
            {/* product - end */}
            {/* product 4 - start */}
            <Fade direction="right" cascade damping={0.1} triggerOnce={true}><div>
              <Link
                href="/user/plugin-details/browse-product"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*Ur6JZVnBL_oPI4-y96IUvg.jpeg"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-voilet-300 p-4 text-center">
                  <span className="text-lg font-bold text-white lg:text-xl">
                    Email Marketing Plugin
                  </span>
                </div>
              </Link>
            </div></Fade>
            {/* product - end */}
          </div>
    </div>
    //cart
    //payment gateway
    //rating and review
  )
}

export default plugin