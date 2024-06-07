'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required*'),
  password: Yup.string().required('Required*')
});

const Login = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);//send values to backend
      // alert('Login Successful');

      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success('Login Successfull');

            response.json()
              .then((data) => {
                sessionStorage.setItem('user', JSON.stringify(data));
                router.push('/user/homepage'); 
              })

          } else {
            toast.error('Invalid Credentials');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });

      /*1- send request to backend
        2- recieve request at backend
        3- process the request
        4- send response back to frontend*/
    },
    validationSchema: LoginSchema
  })
  return (
    <div>
      <>
        <div className="flex h-screen bg-voilet-50 ">
          <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
           <Fade direction='left'>
            <div className="max-w-md w-full p-6">
              <h1 className="text-5xl font-semibold mb-6 text-black text-center">
                Login
              </h1>
              <h1 className="text-l font-semibold mb-6 text-black text-center">
                Join to Our Community with all time access and free{" "}
              </h1>
              <form action="#" onSubmit={loginForm.handleSubmit} method="POST" className="space-y-4">
                {/* Your form elements go here */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-l font-medium text-black"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.username}
                    id="username"
                    name="username"
                    className="mt-1 p-2 w-full bg-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                  {loginForm.touched.username && (
                    <small className="text-red">{loginForm.errors.username}</small>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-l font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full bg-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                  {loginForm.touched.password && (
                    <small className="text-red">{loginForm.errors.password}</small>
                  )}
                </div>
                <div className="mt-4 text-l text-black">
                  <Link href="/signup" className="text-blue hover:underline">
                    Forget Password?
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-4 text-sm text-black text-center">
                <p>
                  Already have an account?{" "}
                  <Link href="/signup" className="text-blue hover:underline">
                    Signup
                  </Link>
                </p>
              </div>
            </div></Fade> 
          </div>
          {/* component */}

          {/* Right Pane */}
            <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <Fade direction='right'>
            <div className="max-w-md text-center">
              <img style={{ backgroundSize: "cover" }} src="/bglogin.webp" alt="" />
            </div>
          </Fade>
          </div>
          {/* Right Pane */}

        </div>
      </>
    </div>
  )
}

export default Login;