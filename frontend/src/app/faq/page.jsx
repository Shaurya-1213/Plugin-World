import React from 'react'
import Link from 'next/link';

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
              <Link href="/" className="text-lg font-semibold text-white">
                Home
              </Link>
              <Link
                href="/login"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Signup
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold text-white transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Contact Us
              </Link>
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

{/*Testing */}
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 1
            </h2>
            <p className="leading-relaxed">
              VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
              bespoke try-hard cliche palo santo offal.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 2
            </h2>
            <p className="leading-relaxed">
              Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
              slow-carb health goth, vape typewriter.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={5} r={3} />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 3
            </h2>
            <p className="leading-relaxed">
              Coloring book nar whal glossier master cleanse umami. Salvia +1
              master cleanse blog taiyaki.
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              STEP 4
            </h2>
            <p className="leading-relaxed">
              VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
              bespoke try-hard cliche palo santo offal.
            </p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
              FINISH
            </h2>
            <p className="leading-relaxed">
              Pitchfork ugh tattooed scenester echo park gastropub whatever
              cold-pressed retro.
            </p>
          </div>
        </div>
      </div>
      <img
        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
        src="https://dummyimage.com/1200x500"
        alt="step"
      />
    </div>
  </div>
</section>

</>
    </div>
  )
}

export default faq