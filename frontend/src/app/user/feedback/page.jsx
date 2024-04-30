'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const FeedbackSchema = Yup.object().shape({
  firstname: Yup.string().required('Required*'),
  lastname: Yup.string().required('Required*'),
  company: Yup.string().required('Required*'),
  email: Yup.string().email('Invalid email').required('Required*'),
  subject: Yup.string().required('Required*'),
  message: Yup.string().required('Required*')
} );

const feedback = () => {

  const feedBack = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      company: "",
      email: "",
      subject:"",
      message: ""
    },
    onSubmit: (values) => {
      console.log(values);
      /*1- send request to backend
        2- recieve request at backend
        3- process the request
        4- send response back to frontend
        {
          1-GET: Data is sent with URL.(to fetch data)
          2-POST: Data is sent in request body.(to store data)
          3-PUT:To upload data.
          4-DELETE:To delete data.
        }
        */
        fetch('http://localhost:5000/feedback/add',
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
          toast.success('Feedbak Successfully  Sent!');
          resetForm();
        }else{
          toast.error('Feedback Failed ');
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Feedback sent Failed')
      });
    },
    validationSchema: FeedbackSchema
  })

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
    <form onSubmit={feedBack.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="firstname"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          First name*
        </label>
        <input
          name="firstname"
          onChange={feedBack.handleChange} 
          value={feedBack.values.firstname}
          id="firstname"
          className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
        />{feedBack.touched.firstname &&(
          <small className="text-red">{feedBack.errors.firstname}</small>
        )}
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Last name*
        </label>
        <input
          name="lastname"
          onChange={feedBack.handleChange} 
          value={feedBack.values.lastname}
          id="lastname"
          className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
        />{feedBack.touched.lastname &&(
          <small className="text-red">{feedBack.errors.lastname}</small>
        )}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Company
        </label>
        <input
          onChange={feedBack.handleChange} 
          value={feedBack.values.company}
          id="company"
          name="company"
          className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
        />{feedBack.touched.company &&(
          <small className="text-red">{feedBack.errors.company}</small>
        )}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Email*
        </label>
        <input
          onChange={feedBack.handleChange} 
          value={feedBack.values.email}
          id="email"
          name="email"
          className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
        />{feedBack.touched.email &&(
          <small className="text-red">{feedBack.errors.email}</small>
        )}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Subject*
        </label>
        <input
          onChange={feedBack.handleChange} 
          value={feedBack.values.subject}
          id="subject"
          name="subject"
          className="w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
        />{feedBack.touched.subject &&(
          <small className="text-red">{feedBack.errors.subject}</small>
        )}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 inline-block text-sm text-black sm:text-base"
        >
          Message*
        </label>
        <textarea
          onChange={feedBack.handleChange} 
          value={feedBack.values.message}
          id="message"
          name="message"
          className="h-64 w-full rounded border bg-white px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
          defaultValue={""}
        />
      </div>
        <button 
        type="submit" 
        className="inline-block rounded-lg bg-purple px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
        Send
        </button>
    </form>
    {/* form - end */}
  </div>
</div>  
    </div>
  )
}

export default feedback