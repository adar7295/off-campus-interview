'use client'
import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

const Contact = () => {

  //const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const contactForm = useFormik({
    initialValues: {
      firstname:'',
      lastName:'',
      company:"",
      email:"",
      subject:'',
      message:''
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      fetch('http://localhost:5000/contact/add/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Message Send Successfully")
            resetForm({values});
          }
          else {
            toast.error("Message Send Failed")
          }
        }).catch((err) => {
          console.log(err);
          toast.error("Contact us Failed")
        });
    },
  })

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center ">
            <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              We’d love to hear from you
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Chat to our friendly team.
            </p>
          </div>
          <img
            className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
            alt=""
          />
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Chat to sales
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Speak to our friendly team.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                hello@merakiui.com
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Visit us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Visit our office HQ..
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Call us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +1 (91) 000-0000
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Get in touch
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={contactForm.handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Full Name*
              </label>
              <input
                type='text'
                id="firstName"
                onChange={contactForm.handleChange}
                value={contactForm.values.firstName}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                type='text'
                id="lastName"
                onChange={contactForm.handleChange}
                value={contactForm.values.lastName}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Company
              </label>
              <input
                type='text'
                id="company"
                onChange={contactForm.handleChange}
                value={contactForm.values.company}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                type='email'
                id="email"
                onChange={contactForm.handleChange}
                value={contactForm.values.email}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Subject*
              </label>
              <input
                type='text'
                id="subject"
                onChange={contactForm.handleChange}
                value={contactForm.values.subject}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message*
              </label>
              <textarea
                type="text"
                id="message"
                onChange={contactForm.handleChange}
                value={contactForm.values.message}
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
              <span className="text-sm text-gray-500">*Required</span>
            </div>
            <p className="text-xs text-gray-400">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
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

export default Contact;