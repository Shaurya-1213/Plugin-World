import React from 'react'

const AdminProfile = () => {
  return (
    <>
    <div className='pl-64 pt-48'>
  {/* component */}
  <main className="mt-32 profile-page">
    <section className="relative block ">
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <img src="/admin.jpg" alt="" className="absolute left-80 -top-24 ml-48 w-48 h-48 mx-auto rounded-full dark:bg-gray-500 aspect-square z-40" />
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-24">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-black mb-2">
                Shaurya Singh
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-black" />
                Lucknow, Uttar Pradesh
              </div>
              <div className="mb-2 text-black mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-black" />
                Founder - Plugin World
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-black">
                    A developer trying to provide people's an easy way to add functionalities to their E-Commerce website.
                    A youngster trying to change the world in his own terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </div>
</>
  )
}

export default AdminProfile;