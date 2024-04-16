import React from 'react'


const Home = () => {
  return (
      <>
  {/* hero - start */}
  <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <header className="mb-8 border-b">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Pluginworld
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16 p-8">
          <a href="#" className="text-lg font-semibold text-indigo-500">
            Home
          </a>
          <a
            href="/login"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Signup
          </a>
          <a
            href="about"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
          <a
            href="contact"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact Us
          </a>
        </nav>
        {/* nav - end */}
       
      </div>
    </header>
    <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Find the 
            <br />
            perfect fit
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            The functionality you want for your E-commerce website.
            Among hundreds of design tool plugins.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src="https://www.extendons.com/wp-content/uploads/2022/03/Abondoned-cart-plugin.png"
              loading="lazy"
              alt="Cart Plugin"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src="https://wpmanageninja.com/wp-content/uploads/2020/09/FT-1-1.png"
              loading="lazy"
              alt="Payment Gateway Plugin"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-2xl font-bold text-gray-900">
      OR DISCOVER THE CATEGORIES BELOW 
      
       </div>
    </section>
  </div>
  {/* hero - end */}
  {/* product-grid - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Selected
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      {/* text - end */}
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
          >
            <img
              src="https://i0.wp.com/blog.easebuzz.in/wp-content/uploads/2022/06/Ecom-Payment-Gatway-copy.jpg?fit=2560%2C1594&ssl=1"
              loading="lazy"
              alt="Cart Plugin"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <div className="flex items-start justify-between gap-2 px-2">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-center text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >
                Cart Plugin
              </a>
            </div>
          </div>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
          >
            <img
              src="https://www.nopcommerce.com/images/thumbs/0015520_livechat-live-chat-plugin.jpeg"
              loading="lazy"
              alt="Live Chat Plugin"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <div className="flex items-start justify-between gap-2 px-2">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              > Live Chat Plugin
              </a>
            </div>
          </div>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
          >
            <img
              src="https://www.imarcgroup.com/blogs/files/44926075-08e5-4767-ad5f-396f44bd93d8c30ae24d9fc5419198900eb293c5417eanyjson_converter.webp"
              loading="lazy"
              alt="Pament Gateway Plugin"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <div className="flex items-start justify-between gap-2 px-2">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >Payment Gateway Plugin
              </a>
            </div>
          </div>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:640/0*WRoDooRbkWd6WbTa.jpg"
              loading="lazy"
              alt="Browse Plugin"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <div className="flex items-start justify-between gap-2 px-2">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >Browse Plugin
              </a>
            </div>
          </div>
        </div>
        {/* product - end */}
      </div>
    </div>
  </div>
  {/* product-grid - end */}
  {/* call to action - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
        {/* content - start */}
        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
          <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            The Best Plugins You Can Get 
            <br />
            For Your E-commerce Website
          </h2>
          <p className="mb-8 max-w-md text-gray-400">
            We're a group of developers who are passionate about creating plugins that makes adding functionality in <br/>
             E-commerce websites easier.  
          </p>
          <div className="mt-auto">
            <a
              href="/signup"
              className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
            >
              Sign Up
            </a>
          </div>
        </div>
        {/* content - end */}
        {/* image - start */}
        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
          <img
            src="https://www.bounteous.com/sites/default/files/insights/2023-07/previews/2023_innovation_lab_twitter.png"
            loading="lazy"
            alt="Photo by Dom Hill"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* image - end */}
      </div>
    </div>
  </div>
  {/* call to action - end */}
  {/* collections - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
        Collections
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
              <span className="text-gray-500">Men</span>
              <span className="text-lg font-bold text-gray-800 lg:text-xl">
                Business Causual
              </span>
            </div>
          </a>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by engin akyurt"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
              <span className="text-gray-500">Women</span>
              <span className="text-lg font-bold text-gray-800 lg:text-xl">
                Summer Season
              </span>
            </div>
          </a>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
              <span className="text-gray-500">Men</span>
              <span className="text-lg font-bold text-gray-800 lg:text-xl">
                Streetwear
              </span>
            </div>
          </a>
        </div>
        {/* product - end */}
        {/* product - start */}
        <div>
          <a
            href="#"
            className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
              loading="lazy"
              alt="Photo by Austin Wade"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
              <span className="text-gray-500">Women</span>
              <span className="text-lg font-bold text-gray-800 lg:text-xl">
                Sale
              </span>
            </div>
          </a>
        </div>
        {/* product - end */}
      </div>
    </div>
  </div>
  {/* collections - end */}
</>
  )
}

export default Home