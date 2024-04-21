'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
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
    <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl">
    </h2>
    <form className="mx-auto max-w-lg rounded-lg border">
        <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label
            htmlFor="name"
            className="mb-2 inline-block text-sm text-black sm:text-base"
          >
            Name
          </label>
          <input
            name="name"
            className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 inline-block text-sm text-black sm:text-base"
          >
            Password
          </label>
          <input
            name="password"
            className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 inline-block text-sm text-black sm:text-base"
          >
            Email
          </label>
          <input
            name="email"
            className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="mb-2 inline-block text-sm text-black sm:text-base"
          >
            Contact
          </label>
          <input
            name="contact"
            className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        
        <button className="block rounded-lg bg-darkpurple px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
          Signup
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
          <svg
            className="h-5 w-5 shrink-0"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
              fill="#4285F4"
            />
            <path
              d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
              fill="#34A853"
            />
            <path
              d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
              fill="#FBBC05"
            />
            <path
              d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>
      </div>
      <div className="flex items-center justify-center bg-gray-100 p-4">
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue transition duration-100 hover:text-indigo-600 active:text-indigo-700"
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