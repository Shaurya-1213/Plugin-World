import React from 'react'

const feedback = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl">
        Reach Out To Us
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-black md:text-lg">
        Share your views and ideas to us. We are always open for feedback , suggestions or just a chat. Your feeback will help us grow. We respect your opinions.
      </p>
    </div>
    {/* text - end */}
    {/* form - start */}
    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="first-name"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          First name*
        </label>
        <input
          name="first-name"
          className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Last name*
        </label>
        <input
          name="last-name"
          className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Company
        </label>
        <input
          name="company"
          className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Email*
        </label>
        <input
          name="email"
          className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Subject*
        </label>
        <input
          name="subject"
          className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Message*
        </label>
        <textarea
          name="message"
          className="h-64 w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          defaultValue={""}
        />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
          Send
        </button>
        <span className="text-sm text-black">*Required</span>
      </div>
      <p className="text-xs text-black">
        By signing up to our newsletter you agree to our{" "}
        <a
          href="#"
          className="underline transition duration-100 hover:text-darkblue active:text-blue"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
    {/* form - end */}
  </div>
</div>    
    </div>
  )
}

export default feedback