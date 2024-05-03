import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="py-4 bg-voilet-900 text-white">
    <div className="container mx-auto flex flex-col md:flex-row my-12 md:my-36">
      <div className="flex flex-col w-full lg:w-2/5 p-8">
        <p className="text-3xl md:text-5xl text-yellow-500 my-4 leading-relaxed md:leading-snug">
          Contact our team
        </p>
        <p className="font-sans text-sm md:text-lg my-2 md:my-4">
          <svg
            className="inline-block fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          Digipodium Hazratganj Lucknow Uttar Pradesh,226045
        </p>
        <p className="font-sans text-sm md:text-lg my-2 md:my-4">
          <svg
            className="inline-block fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
          </svg>{" "}
          pluginworld@gmail.com
        </p>
        <p className="font-sans text-sm md:text-lg my-2 md:my-4">
          <svg
            className="inline-block fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
          </svg>
          +919999999999
        </p>{" "}
        
      </div>
      <div className=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
        <div className="container">
          <div className="relative flex flex-col min-w-0 break-words w-full">
            <div className="flex-auto lg:p-10">
              <img
                src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png"
                alt="contact image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
<>
  {/* Contact */}
  <div className="bg-voilet-900">
    <div className="max-w-5xl px-4 xl:px-0 pb-24 mx-auto"> 
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
          Contact us
        </h2>
        <p className="mt-1 text-neutral-400">
          Whatever your goal - we will get you there.
        </p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
        <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
          <form>
            <div className="space-y-4">
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  id="hs-tac-input-name"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Name"
                />
                <label
                  htmlFor="hs-tac-input-name"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Name
                </label>
              </div>
              {/* End Input */}
              {/* Input */}
              <div className="relative">
                <input
                  type="email"
                  id="hs-tac-input-email"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Email"
                />
                <label
                  htmlFor="hs-tac-input-email"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Email
                </label>
              </div>
              {/* End Input */}
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  id="hs-tac-input-company"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Company"
                />
                <label
                  htmlFor="hs-tac-input-company"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Company
                </label>
              </div>
              {/* End Input */}
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  id="hs-tac-input-phone"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Phone"
                />
                <label
                  htmlFor="hs-tac-input-phone"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Phone
                </label>
              </div>
              {/* End Input */}
              {/* Textarea */}
              <div className="relative">
                <textarea
                  id="hs-tac-message"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="This is a textarea placeholder"
                  defaultValue={""}
                />
                <label
                  htmlFor="hs-tac-message"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Tell us about your project
                </label>
              </div>
              {/* End Textarea */}
            </div>
            <div className="mt-2">
              <p className="text-xs text-neutral-500">
                All fields are required
              </p>
              <p className="mt-5">
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
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
                </a>
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
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h4 className="text-white font-semibold">Email us:</h4>
              <a
                className="mt-1 text-neutral-400 text-sm"
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
              <path d="m3 11 18-5v12L3 14v-3z" />
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            <div className="grow">
              <h4 className="text-white font-semibold">We're hiring</h4>
              <p className="mt-1 text-neutral-400">
                We're thrilled to announce that we're expanding our team and
                looking for talented individuals like you to join us.
              </p>
              <p className="mt-2">
                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline"
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

export default Contact