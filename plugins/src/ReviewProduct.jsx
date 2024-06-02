'use client';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';


const ReviewSchema = Yup.object().shape({
  firstname: Yup.string().required('Required*'),
  lastname: Yup.string().required('Required*'),
  email: Yup.string().email('Invalid email').required('Required*'),
  company: Yup.string().required('Required*'),
  subject: Yup.string().required('Required*'),
});

const ReviewProduct = () => {

  const [rating, setRating] = useState(3);

  const reviewForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: "",
      company: "",
      subject: "",
      message: ""
    },
    onSubmit: (values) => {
      values.rating = rating;
      console.log(values);
      /*1- send request to backend
        2- recieve request at backend
        3- process the request
        4- send response back to frontend
        {
          1-GET: Data is sent with URL.(to fetch data)
          2-POST: Data is sent in request body.(to store data)
          3-PUT:To upload data.
          4-DELETE:To delete data.
        }
        */
      fetch('http://localhost:5000/review/add',
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
            toast.success('Review Successfully  Sent!');
            resetForm();
          } else {
            toast.error('Review Failed ');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Review sent Failed')
        });
    },
    validationSchema: ReviewSchema
  })



  return (
    <div>
      <>
        {/* Hire Us */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto align-center">
          {/* Grid */}
          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* End Col */}
            <div className="relative">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 bg-white sm:p-6 lg:p-10 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-black ">
                  Fill in the form
                </h2>

                <StarRatings
                  rating={rating}
                  starRatedColor="blue"
                  changeRating={setRating}
                  numberOfStars={5}
                  name='rating'
                />
                <form onSubmit={reviewForm.handleSubmit} >
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="firstname"
                          className="block mb-2 text-sm text-black font-medium"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          onChange={reviewForm.handleChange}
                          value={reviewForm.values.firstname}
                          name="firstname"
                          id="firstname"
                          className="py-3 px-4 block w-full bg-white border-2 border-black rounded-lg text-sm"
                        />{reviewForm.touched.firstname && (
                          <small className="text-red">{reviewForm.errors.firstname}</small>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="lastname"
                          className="block mb-2 text-sm text-black font-medium"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          onChange={reviewForm.handleChange}
                          value={reviewForm.values.lastname}
                          name="lastname"
                          id="lastname"
                          className="py-3 px-4 block w-full bg-white border-2 border-black rounded-lg text-sm"
                        />{reviewForm.touched.lastname && (
                          <small className="text-red">{reviewForm.errors.lastname}</small>
                        )}
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-black font-medium"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        onChange={reviewForm.handleChange}
                        value={reviewForm.values.email}
                        name="email"
                        id="email"
                        className="py-3 px-4 block w-full bg-white border-2 border-black rounded-lg text-sm"
                      />{reviewForm.touched.email && (
                        <small className="text-red">{reviewForm.errors.email}</small>
                      )}
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block mb-2 text-sm text-black font-medium"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          onChange={reviewForm.handleChange}
                          value={reviewForm.values.company}
                          name="company"
                          id="company"
                          className="py-3 px-4 block w-full bg-white border-2 border-black rounded-lg text-sm"
                        />{reviewForm.touched.company && (
                          <small className="text-red">{reviewForm.errors.company}</small>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm text-black font-medium"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          onChange={reviewForm.handleChange}
                          value={reviewForm.values.subject}
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full bg-white border-2 border-black rounded-lg text-sm "
                        />{reviewForm.touched.subject && (
                          <small className="text-red">{reviewForm.errors.subject}</small>
                        )}
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-black font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full border-2 border-black rounded-lg text-sm bg-white"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* End Grid */}
                <div className="mt-3 text-center">
                  <p className="text-sm text-black ">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hire Us */}
      </>


    </div>
  )
}
export default ReviewProduct