'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Footer from './footer';
import { Fade } from "react-awesome-reveal";

const newsLetterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required*')
});

const Home = () => {

  const newsLetter = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://localhost:5000/newsletter/add',
      {
        method:'POST',
        body:JSON.stringify(values),
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status===200){
          toast.success('Successfully Registered');
        }else{
          toast.error('Registeration Failed');
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Registration Failed unfortunately!')
      });
    },
    validationSchema: newsLetterSchema
  })
  return (  
    <>
    {/* navbar
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
  <nav
    className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    aria-label="Global"
  >
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#">
        Brand
      </a>
      <div className="sm:hidden">
        <button
          type="button"
          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
          data-hs-collapse="#navbar-with-collapse"
          aria-controls="navbar-with-collapse"
          aria-label="Toggle navigation"
        >
          <svg
            className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
            <line x1={3} x2={21} y1={6} y2={6} />
            <line x1={3} x2={21} y1={12} y2={12} />
            <line x1={3} x2={21} y1={18} y2={18} />
          </svg>
          <svg
            className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div
      id="navbar-with-collapse"
      className="hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block"
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <a className="font-medium text-blue-500" href="#" aria-current="page">
          Landing
        </a>
        <a
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
          href="#"
        >
          Account
        </a>
        <a
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
          href="#"
        >
          Work
        </a>
        <a
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
          href="#"
        >
          Blog
        </a>
      </div>
    </div>
  </nav>
</header>

    navbar end */}

    {/*Hero*/}
  <div className="pt-0 bg-voilet">
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
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/*Left Col*/}
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
      <Fade direction="down"><h1 className="mt-8 mb-4 text-4xl font-bold text-white ps-10 sm:text-5xl md:mb-8 md:text-6xl">
                Find the
                <br />
                perfect fit
              </h1> </Fade> 
              <Fade direction="up"><p className="max-w-md mb-24 text-white ps-10 leading-relaxed text-gray-500 xl:text-lg">
                The functionality you want for your <br/>E-commerce website.
                Among hundreds of design tool plugins.
              </p></Fade>   
      </div>
      {/*Right Col start*/}
      {/*Right Col end */}
    </div>
  </div>
  <div className="relative mt-12 lg:-mt-24">
    <svg
      viewBox="0 0 1428 174"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g
          transform="translate(-2.000000, 44.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            id="Path-4"
            opacity="0.200000003"
          />
        </g>
        <g
          transform="translate(-4.000000, 76.000000)"
          fill="#D3D3D3"
          fillRule="nonzero"
        >
          <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
        </g>
      </g>
    </svg>
  </div>
      {/* product-grid - start */}
      <div className="bg-voilet-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
          <Fade direction="up"> <h2 id="signup-for-plugin" className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl">
              Get The Best
            </h2></Fade>
            <Fade direction="up"><p className="mx-auto mb-24 max-w-screen-md text-center text-black md:text-lg">
              Find the best plugin for your e-commerce website. <br/>Signup to use our plugins.
            </p></Fade>
          </div>
          {/* text - end */}
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}
            <Fade direction="left" cascade damping={0.1} triggerOnce={true}> <div>
            <a
                href="#"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://ideogram.ai/api/images/direct/uuhwRIiORqynsrRqcEcKrQ.png"
                  loading="lazy"
                  alt="Cart Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-center text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Cart Plugin
                  </a>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="left" cascade damping={0.09} triggerOnce={true}><div>
              <a
                href="#"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://ideogram.ai/api/images/direct/zvFeH5VvQv2JXievsEdoqA.jpg"
                  loading="lazy"
                  alt="Live Chat Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  > Live Chat Plugin
                  </a>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="right" cascade damping={0.09} triggerOnce={true}><div>
              <a
                href="#"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://ideogram.ai/api/images/direct/ebwCrn1dRymZmOLeyST-rg.png"
                  loading="lazy"
                  alt="Pament Gateway Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >Payment Gateway Plugin
                  </a>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="right" cascade damping={0.1} triggerOnce={true}><div>
              <a
                href="#"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="https://ideogram.ai/api/images/direct/RvlZwyPwQDGEuiIkiQ7vhQ.png"
                  loading="lazy"
                  alt="Browse Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >Browse Plugin
                  </a>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
          </div>
        </div>
      </div>
      {/* product-grid - end */}
      {/* call to action - start */}
      <div className="bg-voilet-400 py-6 shadow-lg sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
             <Fade direction="left" triggerOnce={true}> <h2 className="mb-4 text-xl font-bold text-black md:text-2xl lg:text-3xl">
                The Best Plugins You Can Get
                <br />
                For Your E-commerce Website
              </h2></Fade>
              <Fade direction="left" triggerOnce={true}><p className="mb-8 max-w-md text-black">
                We're a group of developers who are passionate about creating plugins that makes adding functionality in <br />
                E-commerce websites easier.
              </p></Fade>
              <div className="mt-auto">
              <Fade direction="left" triggerOnce={true}><a
                  href="/signup"
                  className="inline-block rounded-lg bg-voilet-200 px-8 py-3 text-center text-sm font-semibold text-purple outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Sign Up
                </a></Fade>
              </div>
            </div>
            {/* content - end */}
            {/* image - start */}
            <div className="order-first h-48 w-full bg-voilet-400 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <Fade direction="right" triggerOnce={true}><img
                src="https://ideogram.ai/api/images/direct/_fy4mKOgTOS88V7RTrH6FQ.png"
                loading="lazy"
                alt="Photo by Dom Hill"
                className="h-full w-full object-cover object-center"
              /></Fade>
            </div>
            {/* image - end */}
          </div>
        </div>
      </div>
      {/* call to action - end */}
      {/* collections - start */}
      <div className="bg-voilet-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Fade direction="up"><h2 className="mb-8 text-center text-2xl font-bold text-black md:mb-12 lg:text-3xl">
            Best Plugin Collection for your E-Commerce website
          </h2></Fade>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product 1 - start */}
            <Fade direction="left" cascade damping={0.1} triggerOnce={true}><div>
              <a
                href="#"
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
              </a>
            </div></Fade>
            {/* product - end */}
            {/* product 2 - start */}
            <Fade direction="left" cascade damping={0.09} triggerOnce={true}><div>
              <a
                href="#"
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
              </a>
            </div></Fade>
            {/* product - end */}
            {/* product 3 - start */}
            <Fade direction="right" cascade damping={0.09} triggerOnce={true}><div>
              <a
                href="#"
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
              </a>
            </div></Fade>
            {/* product - end */}
            {/* product 4 - start */}
            <Fade direction="right" cascade damping={0.1} triggerOnce={true}><div>
              <a
                href="#"
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
              </a>
            </div></Fade>
            {/* product - end */}
          </div>
        </div>
      </div>
      {/* collections - end */}
      <div className="bg-voilet-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <Fade direction="up"><h2 className="mb-8 text-center text-2xl font-bold text-black md:mb-12 lg:text-3xl">
            What others say about us
          </h2></Fade>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {/* quote - start */}
            <Fade direction="up " triggerOnce={true}>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-darkpurple px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “Easy to use plaugins ready at your disposal. Very Helpfull.”
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    Avijeet Yadav
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div></Fade>
            {/* quote - end */}
            {/* quote - start */}
            <Fade direction="up" triggerOnce={true}>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-darkpurple px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “Nice to have a helping hand, only need to copy and paste. Appreciate it.”
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    Abhay Gupta
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CFO / Dashdash
                  </p>
                </div>
              </div>
            </div></Fade>
            {/* quote - end */}
          </div>
        </div>
      </div>
       {/* newsletter - start */}
  <div className="bg-voilet-500 text-black">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
        <div className="mb-4 sm:mb-8 lg:mb-0">
          <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">
          Want to learn about new plugins ahead of the rest?
          </h2>
          <p className="text-center text-black lg:text-left sm:text-xl">
            Sign up for our newsletter
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <form onSubmit={newsLetter.handleSubmit} className="mb-3 flex w-full max-w-md gap-3">
            <input
              placeholder="Email"
              onChange={newsLetter.handleChange} 
              value={newsLetter.values.email}
              id="email"
              className="bg-voilet-950 w-full flex-1 rounded border border-blue px-3 py-2 text-white placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />{newsLetter.touched.email &&(
              <small className="text-red">{newsLetter.errors.email}</small>
            )}
            <button type="submit" className="inline-block rounded bg-purple px-6 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Send
            </button>
          </form>
          <p className="text-center text-xs text-gray-900 lg:text-right">
            By signing up to our newsletter you agree to our{" "}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Term of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* newsletter - end */}
  <Footer /> 
    </>
  )
}

export default Home