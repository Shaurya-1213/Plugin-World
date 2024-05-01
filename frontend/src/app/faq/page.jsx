import React from 'react'

const faq = () => {
  return (
    <div>
      <header className=" border-b">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
            {/* logo - start */}
            <div className='flex'>
            <a href="/"> <img style={{ height: 45 }} src="/shortlogowhite.png"  alt="" /></a>
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
      <div className="bg-white  py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-dark md:mb-6 lg:text-3xl">
        Frequently asked questions
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-voilet-800 md:text-lg">
        The questions most of the people's ask to us about our platform. If you can’t find the information you need, feel free to ask.
        We’re here to help answer any questions you may have about the plugins we create. 
        Here are some answers to common questions
      </p>
    </div>
    {/* text - end */}
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
      {/* question - start */}
      <div className="rounded-lg bg-voilet-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-purple sm:text-lg md:text-xl">
            How does the plugin work?
          </h3>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-voilet-300 text-voilet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="text-voilet-700">
          We've designed our plugins with a user-friendly interface that allows users to easily interact with their data. Just copy and where you want to use it.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="rounded-lg bg-voilet-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-purple sm:text-lg md:text-xl">
            What are the features?
          </h3>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-voilet-300 text-voilet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="text-voilet-700">
          Our  plugin is designed to provide a seamless user experience by integrating various functionalities into your website
          The plugin is designed to provide a simple and intuitive API for interacting with the Ethereum blockchain.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="rounded-lg bg-voilet-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-purple sm:text-lg md:text-xl">
            Can we become member?
          </h3>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-voilet-300 text-voilet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="text-voilet-700">
          Yes , you can join our community by creating an account on our website. You will be able to access all of our services and benefits, such as posting and adding your own designed plugin.
        </p>
      </div>
      {/* question - end */}
      {/* question - start */}
      <div className="rounded-lg bg-voilet-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-purple sm:text-lg md:text-xl">
            Is support available?
          </h3>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-voilet-300 text-voilet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="text-voilet-700">
          Yes , you can contact us through our email or join our discord server where a team of experienced developers will provide you support in whatever you need.
        </p>
      </div>
      {/* question - end */}
    </div>
  </div>
</div>

    </div>
  )
}

export default faq