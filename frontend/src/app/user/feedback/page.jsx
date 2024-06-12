'use client';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';

const Feedback = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [rating, setRating] = useState(4)

  const feedbackForm = useFormik({
    initialValues: {
      user: currentUser._id,
      rating: 4,
      feedback: ''
    },
    onSubmit: (values) => {
      values.rating = rating;
      console.log(values);
      fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Feedback Submitted');
            response.json()
              .then((data) => {
                console.log(data);

              })
          } else {
            console.log('Failed');
          }
        }).catch((err) => {
          console.log(err);
        })
    }
  })

  return (
    <div><>
      {/* Contact */}
      <div className="bg-voilet-400 m-0 pt-48">
        <div className="max-w-5xl px-4 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 ">
            <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
              Feedback
            </h2>

          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form onSubmit={feedbackForm.handleSubmit}>
                <div className="space-y-4">

                  <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    changeRating={setRating}
                    numberOfStars={5}
                    name='rating'
                  />
                  {/* Input */}
                  <div className="relative">
                    <textarea
                      type="text"
                      id="feedback"
                      onChange={feedbackForm.handleChange}
                      value={feedbackForm.values.feedback}
                      className="peer p-4 block w-full bg-white border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
          focus:pt-6
          focus:pb-2
          [&:not(:placeholder-shown)]:pt-6
          [&:not(:placeholder-shown)]:pb-2
          autofill:pt-6
          autofill:pb-2"
                      placeholder="Name"
                    ></textarea>
                    <label
                      htmlFor="hs-tac-input-name"
                      className="absolute top-0 start-0 p-4 h-full text-black text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-neutral-400
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Review
                    </label>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-red">
                    All fields are required
                  </p>
                  <p className="mt-5">
                    <button
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                      type='submit'
                    >
                      Submit
                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </p>
                </div>
              </form>
            </div>
            {/* End Col */}
            <div className="space-y-14">
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <h4 className="text-black font-semibold">Our address:</h4>
                  <address className="mt-1 text-black text-sm not-italic">
                    300 Bath Street, Tay House
                    <br />
                    Glasgow G2 4JR, United Kingdom
                  </address>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className="text-black font-semibold">Email us:</h4>
                  <a
                    className="mt-1 text-black text-sm"
                    href="#mailto:example@site.co"
                    target="_blank"
                  >
                    hello@example.so
                  </a>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className="text-black font-semibold">We're hiring</h4>
                  <p className="mt-1 text-black">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                  </p>
                  <p className="mt-8">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline mb-24"
                      href="#"
                    >
                      Job openings
                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Contact */}
    </>
    </div>
  )
}

export default Feedback