'use client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
          <Link
            to={"/productdetails/" + plugin._id}
            className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
            <div
              style={{ backgroundImage: `url("http://localhost:5000/${plugin.images[0]}")` }}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            ></div>
            <div className="relative flex w-full flex-col rounded-lg bg-voilet-300 text-center">
              <span className="text-lg font-bold text-white lg:text-xl">
                {plugin.title}
              </span><br />
              <span className="text-lg font-bold text-white lg:text-xl">
                {plugin.price}
              </span>
            </div>
          </Link>
        </div>
        {/* product - end */}
      </>
    ))
  }

  return (
    <>
    <div className="pt-0 bg-voilet">
  <header className=" border-b">
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex text-black 2xl:ml-16 p-4">
              <Link to="./AddProduct" className="text-lg font-semibold">
                Add Plugin
              </Link>
              <Link
                to="/"
                className="text-lg font-semibold"
              >
                Browse Plugins
              </Link>
              <Link
                to="/ReviewProduct"
                className="text-lg font-semibold "
              >
                Review
              </Link>
              <Link
                to="/ProductManager"
                className="text-lg font-semibold "
              >
                Product Manager
              </Link>
              <Link
                to="/ProductDetails"
                className="text-lg font-semibold "
              >
                Product Details
              </Link>
            </nav>
            {/* nav - end */}
        </header>
  </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Plugins
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {displayPlugins()}
          </div>
        </div>
      </div>

    </>
  )
}

export default BrowseProduct