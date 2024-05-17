'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { CopyBlock, dracula } from 'react-code-blocks';

const pluginInfo = {
  "manage-product" : {
    banner: '',
    code : `<div id="manage-plugin"></div>
    <script src="http://localhost:5000/main.js"></script>`,
    title: 'Product Manager',
    description: 'Product Manager Description',
    price:"29"
  },
  "browse-product" : {
    banner: '',
    code : `<div id="browse-plugin"></div>
    <script src="http://localhost:5000/main.js"></script>`,
    title: 'Browse Product',
    description: 'Product Manager Description',
    price:"29"
  },
  "cart-product" : {
    banner: '',
    code : `<div id="cart-plugin"></div>
    <script src="http://localhost:5000/main.js"></script>`,
    title: 'Cart',
    description: 'Cart Description',
    price:"29"
  },
  "rating-product" : {
    banner: '',
    code : `<div id="rating-plugin"></div>
    <script src="http://localhost:5000/main.js"></script>`,
    title: 'Rating',
    description: 'Rating Description',
    price:"29"
  }
};

const PluginProductManager = () => {

  const { pluginname } = useParams();

  const fetchPlugins = () => {
    fetch('http://localhost:5000/product/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setPluginsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchPlugins();
  }, []);

  // const displayPlugins = () => {
  //   return pluginsList.map(Plugins => (

  //     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
  //       <th
  //         scope="row"
  //         className="font-medium text-black whitespace-nowrap"
  //       >
  //         {plugins._id}
  //       </th>
  //       <td className="px-6 py-4">{plugins.username}</td>
  //       <td className="px-6 py-4">{plugins.email}</td>
  //       <td className="px-6 py-4">{plugins.createdAt}</td>
  //     </tr>
  //   ))
  // }


  return (
    <div>
      <>
        {/* component */}

        <div className="container relative mx-auto">
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "80vh"
            }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://attentioninsight.com/wp-content/uploads/2021/09/ai_plugin_chrome.jpg')"
              }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
            </div>
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
                <Fade direction='up'>
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Your story starts with us.
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Make your E-Commerce website fully functional  and easy to use, we will take care of the rest!
                      Use our plugins to  create a website that is tailored for your needs.
                    </p>
                  </div>
                </Fade>
              </div>

            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <div className=" w-full md:w-4/12 mb-10 px-4 mx-auto text-center z-40">
          <Fade direction='up' triggerOnce={true}>
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              style={{ height: "55vh", width: "600px" }}
              className="block mx-auto rounded-lg -mt-48 z-50 object-cover object-center"
            />
          </Fade>
        </div>

        {/* call to action - start */}
        <div className="bg-voilet-400 py-6 shadow-lg sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
              {/* content - start */}
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <Fade direction="left" triggerOnce={true}> <h2 className="mb-4 text-xl font-bold text-black md:text-2xl lg:text-3xl">
                  {pluginInfo[pluginname].title}
                </h2></Fade>
                <Fade direction="left" triggerOnce={true}><p className="mb-8 max-w-md text-black">
                  {pluginInfo[pluginname].description}
                </p></Fade>
                <div className="mt-auto">
                  <Fade direction="left" triggerOnce={true}>
                  <p className="mb-8 max-w-md text-black">
                  {pluginInfo[pluginname].price}
                </p>
                    </Fade>
                </div>
              </div>
              {/* content - end */}
              {/* image - start */}
              <div className="order-first h-48 w-full bg-voilet-400 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <CopyBlock
                  text={`
<div id="browse-plugin"></div>
<script src="http://localhost:5000/main.js"></script>
                  `}
                  language={'html'}
                  showLineNumbers={true}
                  theme={dracula}
                />
              </div>
              {/* image - end */}
            </div>
          </div>
        </div>
        {/* call to action - end */}

        {/* component */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* hero section */}
      </>

    </div>
  )
}
export default PluginProductManager