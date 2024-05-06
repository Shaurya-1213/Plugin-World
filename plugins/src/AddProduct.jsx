'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const ProductSchema = Yup.object().shape({
  title: Yup.string().min(1,'Enter Name').required('Required*'),
  brand: Yup.string().min(1,'Enter brand').required('Required*'),
  model: Yup.string().min(1,'Enter model').required('Required*'),
  features: Yup.string().required('Required*'),
  price: Yup.string().required('Required*')
});

const AddProduct = () => {



  const productForm = useFormik({
    initialValues: {
      title:'',
      brand:'',
      model:'',
      features:'',
      price:'',
      offer:'',
      description:'',
      images:''
    },
    onSubmit: (values) => {
      console.log(values);//send values to backend

      fetch('http://localhost:5000/product/add', 
      {
        method:'POST',
        body:JSON.stringify(values),
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status===200){
          toast.success('Product added Successfully');
        }else{
          toast.error('Process Failed');
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Process Failed Unfortunately!')
      });
    },
    validationSchema: ProductSchema
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File Uploaded');
        productForm.setFieldValue('images', [file.name]);
      }
    });
  };

  return (

     <>
  {/* Card Section */}
  <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <form onSubmit={productForm.handleSubmit}>
      {/* Card */}
      <div className="bg-white border border-4 rounded-xl shadow ">
        <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
        </div>
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          {/* Grid */}
          <div className="space-y-4 mt-5 sm:space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="af-submit-app-project-name"
                className="inline-block text-sm font-medium text-black mt-2.5 "
              >
                Product name
              </label>
              <input
                  type="text"
                  onChange={productForm.handleChange}
                  value={productForm.values.title}
                  id="title"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Type plugin name"
                />{productForm.touched.title && (
                  <small className="text-red">{productForm.errors.title}</small>
                )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5 "
              >
                Brand Name
              </label>
              <input
                  type="text"
                  name="brand"
                  onChange={productForm.handleChange}
                  value={productForm.values.brand}
                  id="brand"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Brand"
                  required=""
                />{productForm.touched.brand && (
                  <small className="text-red">{productForm.errors.brand}</small>
                )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                Model
              </label>
              <input
                  type="text"
                  name="model"
                  onChange={productForm.handleChange}
                  value={productForm.values.model}
                  id="model"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Model"
                  required=""
                />{productForm.touched.model && (
                  <small className="text-red">{productForm.errors.model}</small>
                )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                Features
              </label>
              <input
                  type="text"
                  name="features"
                  onChange={productForm.handleChange}
                  value={productForm.values.features}
                  id="features"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Features"
                  required=""
                />{productForm.touched.features && (
                  <small className="text-red">{productForm.errors.features}</small>
                )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                Price
              </label>
              <input
                  type="number"
                  name="price"
                  onChange={productForm.handleChange}
                  value={productForm.values.price}
                  id="price"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="price"
                  required=""
                />{productForm.touched.username && (
                  <small className="text-red">{productForm.errors.username}</small>
                )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                Offer
              </label>
              <input
                  type="text"
                  name="offer"
                  onChange={productForm.handleChange}
                  value={productForm.values.offer}
                  id="offer"
                  className="bg-voilet-50 border border-black-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Offer"
                  required=""
                />{productForm.touched.offer && (
                  <small className="text-red">{productForm.errors.offer}</small>
                )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                description
              </label>
              <textarea
                    onChange={productForm.handleChange}
                    value={productForm.values.description}
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-black bg-voilet-50 rounded-lg border border-black "
                  placeholder="Write a plugin description..."
                />{productForm.touched.description && (
                  <small className="text-red">{productForm.errors.description}</small>
                )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="af-submit-app-upload-images"
                className="inline-block text-sm font-medium text-black mt-2.5"
              >
                Preview image
              </label>
              <label
                htmlFor="images"
                className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
              >
                <input
                  id="images"
                  onChange={uploadFile}
                  type="file"
                  className="sr-only"
                />
                <svg
                  className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                <span className="mt-2 block text-sm text-black">
                  Browse your device or{" "}
                  <span className="group-hover:text-blue-700 text-blue-600">
                    drag 'n drop'
                  </span>
                </span>
              </label>
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="submit"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add Plugin
            </button>
          </div>
        </div>
      </div>
      {/* End Card */}
    </form>
  </div>
  {/* End Card Section */}
  </>
  )
}
export default AddProduct;