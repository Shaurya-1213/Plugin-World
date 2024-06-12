'use client'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const plugin = () => {
  return (
    <div>
  {/* hero - start */}
  <div className="bg-voilet-600">
        {/* image - start */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "90vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/015/680/409/non_2x/woman-work-at-office-sitting-at-desk-with-computer-free-vector.jpg')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-85 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <Fade direction='up'>
                  <div className="relative mx-auto flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
            Very proud to introduce
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            Revolutionary way to build the web
          </h1>
          
        </div>
                  </Fade>
                  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-voilet-800 px-8 py-3 text-center text-sm font-semibold text-white border"
            >
              Start now
            </a>
            <a
              href="#"
              className="inline-block rounded-lg text-white px-8 py-3 text-center text-sm font-semibold border "
            >
              Take tour
            </a>
          </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        {/* image - end */}
        {/* overlay - start */}
        <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
        {/* overlay - end */}
  
  {/* hero - end */}

  <div className="bg-voilet-600 py-6 ">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
      <p className="mb-2 text-center font-semibold text-black md:mb-3 lg:text-lg">
        Introducing
      </p>
      <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl">
        The List Of Plugins You Can Use...
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
        These plugins are designed to help you make your website more interactive and user-friendly.
        Very Easy to use and implement.
      </p>
    </div>
  </div>
</div>



      <div className="grid gap-4 mx-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 pb-16">
        {/* product 1 - start */}
        <Fade direction="left" cascade damping={0.1} triggerOnce={true}><div>
          <Link
            href="/user/plugin-details/cart-product"
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
                Cart Plugin
              </span>
            </div>
          </Link>
        </div></Fade>
        {/* product - end */}
        {/* product 2 - start */}
       <Fade direction="left" cascade damping={0.09} triggerOnce={true}><div>
          <Link
            href="/user/plugin-details/rating-product"
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
                Rating Plugin
              </span>
            </div>
          </Link>
        </div></Fade>
        {/* product - end */}
        {/* product 3 - start */}
        <Fade direction="right" cascade damping={0.09} triggerOnce={true}><div>
          <Link
            href="/user/plugin-details/manage-product"
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
                Browse Product Plugin
              </span>
            </div>
          </Link>
        </div></Fade>
        {/* product - end */}
        {/* product 4 - start */}
        <Fade direction="right" cascade damping={0.1} triggerOnce={true}><div>
          <Link
            href="/user/plugin-details/manage-product"
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
                Manage Product Plugin
              </span>
            </div>
          </Link>
        </div></Fade>
        {/* product - end */}
      </div>
    </div>
    </div>
    //cart
    //payment gateway
    //rating and review
  )
}

export default plugin