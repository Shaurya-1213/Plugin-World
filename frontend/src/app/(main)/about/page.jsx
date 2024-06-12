import React from 'react'

const About = () => {
  return (
    <div>
     <div className="flex flex-wrap bg-voilet-400 items-center pt-36">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-4xl text-black font-bold leading-normal">
                About Us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-black">
                Welcome to Plugin-world, your premier destination for high-quality, React-based plugins designed specifically for e-commerce websites. Our mission is to empower online businesses by providing them with cutting-edge tools that enhance functionality, improve user experience, and drive growth.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative  flex flex-col min-w-0 break-words bg-voilet-800 w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative  p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                    Who We Are
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Plugin-world was founded by a passionate team of web developers, designers, and e-commerce experts who recognized the need for customizable and efficient solutions in the rapidly evolving online retail space. With years of experience in the tech and e-commerce industries, we are committed to creating plugins that not only meet but exceed the diverse needs of our clients.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
            <section className="relative bg-voilet-400 py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-voilet-700 fill-current"
                points="0 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container bg-voilet-400 mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  style={{height:'550px'}}
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://ideogram.ai/assets/image/balanced/response/JkgT1C1tQPiPCxQ3HeHkRA"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-4xl text-black font-bold">
                  Our Vision
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-black text-semibold">
                  We envision a world where every e-commerce platform, regardless of size or technical capability, can easily integrate advanced features that enhance performance and customer satisfaction. By offering a wide range of plugins that are easy to implement and customize, we strive to democratize access to top-tier e-commerce functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default About;