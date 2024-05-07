'use client';
import React, { useEffect, useState } from 'react'

const BrowseProduct = () => {

  const [pluginList, setPluginList] = useState([]);

  const fetchPlugins = () => {
    fetch('http://localhost:5000/product/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setPluginList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchPlugins();
  }, []);

  const displayPlugins = () => {
    return pluginList.map(plugin => (
      <>
       {/* product - start */}
       <div>
       
       <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
         <div className="flex flex-col">
           <a
             href="#"
             className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
           >
             {plugin.title}
           </a>
           <span className="text-sm text-gray-500 lg:text-base">
           {plugin.price}
           </span>
         </div>
         <div className="flex flex-col items-end">
           <span className="font-bold text-gray-600 lg:text-lg">{plugin.description}</span>
         </div>
       </div>
     </div>
     </>
      ))
  }

  return (
    <>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Plugins
      </h2>
    </div>
    {/* text - end */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* product - start */}
      <div>
        {displayPlugins()}
      </div>
      {/* product - end */}
      
    </div>
  </div>
</div>

    </>
  )
}

export default BrowseProduct