'use client';
import React, { useRef , useEffect , useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Footer from './footer';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const newsLetterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required*')
});

const Home = () => {
  
  const [feedbackList, setFeedbackList] = useState([]);

  const fetchFeedbacks = () => {
    fetch('http://localhost:5000/feedback/getall')
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data);
            setFeedbackList(data);
          })
      })
  }

  useEffect(() => {
    fetchFeedbacks();
  }, [])

  const carousal = () => {
    return (
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
    )
  }

  const displayFeedbacks = () => {
    return feedbackList.map((feedback) => (
      <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <StarRatings
          rating={feedback.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          starDimension="30px"
          starSpacing="15px"
        />
        <div className="text-center text-gray-600">
          {feedback.feedback}
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img
              src=""
              loading="lazy"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
              {feedback.user.name}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  const newsLetter = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://localhost:5000/newsletter/add',
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Successfully Registered');
          } else {
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
      {/*Hero*/}
      <div className="pt-10 bg-voilet-100 ">
        <div className="mx-16">

        <header className='mt-10'>
            <div style={{width:'90%'}} className="bg-voilet-900/75 fixed top-0 z-50 rounded-xl mb-0 mt-10 flex items-center justify-between">
              {/* logo - start */}
              <div className='flex'>
                <Link href="/">
                  <img style={{ height: 45 }} src="/shortlogowhite.png" alt="" /></Link>
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
        </div>

        <>
        <div className="bg-voilet-100 mt-24 flex justify-center">
          <div className="py-24 shadow-2xl max-w-screen-xl m-0 bg-voilet-900 shadow sm:rounded-xl flex justify-center flex-1">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/*Left Col*/}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <Fade direction="down"><h1 className="text-4xl mb-4 font-bold text-white ps-10 sm:text-5xl md:text-6xl">
              Find the
              <br />
              perfect fit
            </h1> </Fade>
            <Fade direction="up"><p className="max-w-md mb-24 text-white ps-10 leading-relaxed text-gray-500 xl:text-lg">
              The functionality you want for your <br />E-commerce website.
              Among hundreds of design tool plugins.
            </p></Fade>
          </div>
          {/*Right Col start*/}
          <div className="h-88 flex flex-col w-88 md:w-2/5 justify-center rounded-xl items-start text-center md:text-left">
          <img src="/bgone.webp" alt="" />
           
          </div>
          {/*Right Col end */}
        </div>
          </div>
        </div>
      </>        
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
              Find the best plugin for your e-commerce website. <br />Signup to use our plugins.
            </p></Fade>
          </div>
          {/* text - end */}
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}
            <Fade direction="left" cascade damping={0.1} triggerOnce={true}> <div>
              <Link
                href="#signup-for-plugin"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="/cart.webp"
                  loading="lazy"
                  alt="Cart Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link
                    href="#signup-for-plugin"
                    className="text-center text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Cart Plugin
                  </Link>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="left" cascade damping={0.09} triggerOnce={true}><div>
              <Link
                href="#signup-for-plugin"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="/rating.webp"
                  loading="lazy"
                  alt="Rating Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link
                    href="#signup-for-plugin"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  > Rating Plugin
                  </Link>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="right" cascade damping={0.09} triggerOnce={true}><div>
              <Link
                href="#signup-for-plugin"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="/browse.webp"
                  loading="lazy"
                  alt="Browse Product Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link
                    href="#signup-for-plugin"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >Browse Product Plugin
                  </Link>
                </div>
              </div>
            </div></Fade>
            {/* product - end */}
            {/* product - start */}
            <Fade direction="right" cascade damping={0.1} triggerOnce={true}><div>
              <Link
                href="#signup-for-plugin"
                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <img
                  src="/manage.webp"
                  loading="lazy"
                  alt="Manage Product Plugin"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <Link
                    href="#signup-for-plugin"
                    className="text-lg font-bold text-black transition duration-100 hover:text-gray-500 lg:text-xl"
                  >Manage Product Plugin
                  </Link>
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
                <Fade direction="left" triggerOnce={true}>
                  <Link
                    href="/signup"
                    className="inline-block rounded-lg bg-voilet-200 px-8 py-3 text-center text-sm font-semibold text-purple outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Sign Up
                  </Link></Fade>
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
            4 Easy Steps To Use Any Plugin
          </h2></Fade>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-7 xl:grid-cols-7">
            {/* product - start */}
            <Fade direction="left" cascade damping={0.1} triggerOnce={true}> <div>
                <img
                  src="/step1.webp"
                  loading="lazy"
                  alt="Cart Plugin"
                  className="h-48 w-48 rounded-full object-cover object-center transition duration-200 group-hover:scale-110"
                /></div></Fade>
            {/* product - end */}
            <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="88"  height="88"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" /><path d="M16 12l-4 -4" /><path d="M16 12h-8" /><path d="M12 16l4 -4" /></svg>
            </div>
            {/* product - start */}
            <Fade direction="left" cascade damping={2.1} triggerOnce={true}><div>
                <img
                  src="/step2.webp"
                  loading="lazy"
                  alt="Rating Plugin"
                  className="h-48 w-48 rounded-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
             </div></Fade>
            {/* product - end */}
            <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="88"  height="88"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" /><path d="M16 12l-4 -4" /><path d="M16 12h-8" /><path d="M12 16l4 -4" /></svg>
            {/* product - start */}
            </div>
            <Fade direction="left" cascade damping={4.1} triggerOnce={true}><div>             
                <img
                  src="/step3.webp"
                  loading="lazy"
                  alt="Browse Product Plugin"
                  className="h-48 w-48 rounded-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
            </div></Fade>
            {/* product - end */}
            <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="88"  height="88"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" /><path d="M16 12l-4 -4" /><path d="M16 12h-8" /><path d="M12 16l4 -4" /></svg>
            {/* product - start */}
            </div>
            <Fade direction="left" cascade damping={6.1} triggerOnce={true}><div>
                <img
                  src="/step4.webp"
                  loading="lazy"
                  alt="Manage Product Plugin"
                  className="h-48 w-48 rounded-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
            </div></Fade>
            {/* product - end */}
          </div>
        </div>
      </div>
    {/* collections - end */}
      {/*<div className="bg-voilet-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <Fade direction="up"><h2 className="mb-8 text-center text-2xl font-bold text-black md:mb-12 lg:text-3xl">
            What others say about us
          </h2></Fade>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {/* quote - start */}
          {/*  <Fade direction="up" triggerOnce={true}>
            <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
              {/* quote - start */}
             {/*} {displayFeedbacks()}
            </div></Fade>
            {/* quote - end 
          </div>
        </div>
      </div> */} 
      {/* collections - end */}
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
                />{newsLetter.touched.email && (
                  <small className="text-red">{newsLetter.errors.email}</small>
                )}
                <button type="submit" className="inline-block rounded bg-purple px-6 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Send
                </button>
              </form>
              <p className="text-center text-xs text-gray-900 lg:text-right">
                By signing up to our newsletter you agree to our{" "}
                <Link
                  href="#"
                  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Term of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </Link>
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