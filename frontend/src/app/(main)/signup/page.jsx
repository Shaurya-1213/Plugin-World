'use client';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Name pura likho').required('Naam nhi hai kya?'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
    .min(6, 'Too small')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send values to backend
    },
    validationSchema: SignupSchema
  })


  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
      Sign Up
    </h2>
    <form className="mx-auto max-w-lg rounded-lg border-4">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label
            htmlFor="name"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Name
          </label>
          <input
            name="email"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div><div>
          <label
            htmlFor="email"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Email
          </label>
          <input
            name="email"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Password
          </label>
          <input
            name="password"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-bold text-white outline-none ring-gray-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-600 md:text-base">
          Sign Up
        </button>
        
      </div>
      <div className="flex items-center justify-center bg-gray-100 p-4">
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            Login
          </a>
        </p>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Signup;