import React from 'react';

const Login = () => {
  return (
    <div>
       <>
       <div className="flex h-screen bg-voilet-50 ">
       <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
          Login
        </h1>
        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
          Join to Our Community with all time access and free{" "}
        </h1>
        <form action="#" method="POST" className="space-y-4">
          {/* Your form elements go here */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full bg-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full bg-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full bg-white border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-darkblue text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <a href="/signup" className="text-blue hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  {/* component */}
  
    {/* Left Pane */}
    <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
      <div className="max-w-md text-center">
      <img style={{ backgroundSize:"cover" }} src="/bglogin.webp" alt="" />
      </div>
    </div>
    {/* left Pane */}
    
  </div>
</>
    </div>
  )
}

export default Login;