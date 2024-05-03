'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const addProductSchema = Yup.object().shape({
  username: Yup.string().min(4, 'Enter Full Name').required('Required*'),
  password: Yup.string().min(6, 'Password should be at least  6 characters').required('Required*')
    .matches(/[a-z]/, 'Must Use Lowercase').matches(/[A-Z]/, 'Must Use Uppercase').matches(/[0-9]/, 'Must Use Number')
    .matches(/\w/, 'Must Use Special Character'),
});

const AddProduct = () => {

  const router = useRouter();

  const addproductForm = useFormik({
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
                router.push('/'); 
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
    validationSchema: addProductSchema
  })

  return (
    <>
      <section className="bg-white dark:bg-voilet-500 mt-14 border-b">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Add Plugin
          </h2>
          <form action="#" onSubmit={addproductForm.handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Plugin Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={addproductForm.handleChange}
                  value={addproductForm.values.name}
                  id="name"
                  className="bg-voilet-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Type plugin name"
                  required=""
                />{addproductForm.touched.username && (
                  <small className="text-red">{addproductForm.errors.username}</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  onChange={addproductForm.handleChange}
                  value={addproductForm.values.brand}
                  id="brand"
                  className="bg-voilet-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700"
                  placeholder="Product brand"
                  required=""
                />{addproductForm.touched.username && (
                  <small className="text-red">{addproductForm.errors.username}</small>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  onChange={addproductForm.handleChange}
                  value={addproductForm.values.price}
                  id="price"
                  className="bg-voilet-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="₹299"
                  required=""
                />{addproductForm.touched.username && (
                  <small className="text-red">{addproductForm.errors.username}</small>
                )}
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-voilet-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option selected="">Select</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  onChange={addproductForm.handleChange}
                  value={addproductForm.values.item-weight}
                  id="item-weight"
                  className="bg-voilet-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Ex. 12"
                  required=""
                />{addproductForm.touched.username && (
                  <small className="text-red">{addproductForm.errors.username}</small>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                    onChange={addproductForm.handleChange}
                    value={addproductForm.values.description}
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-black bg-voilet-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Write a plugin description..."
                />{addproductForm.touched.username && (
                  <small className="text-red">{addproductForm.errors.username}</small>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add Plugin
              </button>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default AddProduct;