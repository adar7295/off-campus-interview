'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './(main)/navbar'


const Home = () => {

  const [jobList, setJobList] = useState([]);

  const fetchJobs = () => {
    fetch('http://localhost:5000/jobpost/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setJobList(data);
        setMasterList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchJobs();
  }, [])
  

  return (
    <>
      <Navbar />
      <>
        {/* hero - start */}
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
          <header className="mb-8 border-b">

          </header>
          <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
              <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                  Find your dream
                  <br />
                  job online
                </h1>
                <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                  This PlateForm will  help you land your dream job
                  Easily and effectively... <br />
                  <span className='font-semibold text-black textlg'> Keep Growing with TALENTO..</span>
                </p>
              </div>
              <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                  <img
                    src="/p3.jpeg"
                    loading="lazy"
                    alt="Photo by Kaung Htet"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  <img
                    src="/p2.jpeg"
                    loading="lazy"
                    alt="Photo by Manny Moreno"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-black text-lg font-semibold justify-between gap-8 md:flex-row">
              "Land the job you've been dreaming of."
              {/* social - start */}
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                  Social
                </span>
                <span className="h-px w-12 bg-gray-200" />
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* social - end */}
            </div>
          </section>
        </div>
        {/* hero - end */}
        <div className="ml-48 w-full flex md:mb-16 lg:w-2/3">
          <div className="w-1/2 h-1/2 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src="/p4.jpeg"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className='ml-64 px-18 text-black'>
            <h1 className='font-bold text-3xl'>Post Jobs Here...</h1><br />
            Attract top talent and build your dream team
            <br />
            <br />
            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex mr-1'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Get Unlimited Application</p>
            </div>
            <br />

            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Simplified Job Posting</p>
            </div>
            <br />

            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Effortless Hiering</p>
            </div>
          </div>
        </div>

        <div className="ml-48 mt-44 w-full justify-item-end flex md:mb-16 lg:w-2/3">
          <div className='mr-64  text-black'>
            <h1 className='font-bold text-3xl'>Find Jobs Here...</h1><br />
            Unlock your potential and discover your next career
            <br />
            <br />
            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex mr-1'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Get Unlimited Oppartunities</p>
            </div>
            <br />

            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Get Hiered Easily</p>
            </div>
            <br />

            <div className='text-lg bg-gray-300 rounded-lg'>
              <p className='text-md flex'><svg className="h-6 m-1 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
                Job Alerts On Phone</p>
            </div>
          </div>

          <div className="w-1/2 h-1/2 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src="/p5.jpeg"
              loading="lazy"
              alt="Photo by Kaung Htet"
              className="h-full w-full object-cover object-center"
            />
          </div>

        </div>
        {/* product-grid - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Selected
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real written
                text but is random or otherwise generated.
              </p>
            </div>
            {/* text - end */}
            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {
                jobList.slice(0, 4).map(job => (

              <div>
                <a
                  href="#"
                  className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <img
                    src={"http://localhost:5000/" + job.company.logo}
                    loading="lazy"
                    alt="Photo by Austin Wade"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-0 flex gap-2">
                   
                   
                  </div>
                </a>
                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      {job.designation}
                    </a>
                    <span className="text-gray-500">by {job.company.compName}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">{job.salary}</span>
                  </div>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* product-grid - end */}
        {/* call to action - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
              {/* content - start */}
              <div className="flex w-full bg-indigo-500 flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 className="mb-4 text-xl font-bold text-black md:text-2xl lg:text-4xl">
                  Want To Hire?
                  <br />

                </h2>
                <p className="mb-8 max-w-md text-white">
                  Streamline your hiring process and find
                  the perfect fit for your team with our
                  tailored recruitment solutions.
                </p>
                <div className="mt-auto">
                  <a
                    href="/compSignup"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    SignUp
                  </a>
                </div>
              </div>
              {/* content - end */}
              {/* image - start */}
              <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <img
                  src="/p6.jpeg"
                  loading="lazy"
                  alt="Photo by Dom Hill"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* image - end */}
            </div>
          </div>
        </div>
        {/* call to action - end */}
        {/* collections - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
              Customer Reviews
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {/* review - start */}
              <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                <div>
                  <span className="block text-sm font-bold md:text-base">
                    John McCulling
                  </span>
                  <span className="block text-sm text-gray-500">August 28, 2024</span>
                </div>
                {/* stars - start */}
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {/* stars - end */}
                <p className="text-gray-600">
                  "Thanks talento for helping me find a job without much hassle.
                  If you are a fresher or a skilled person with expert
                  knowledge in a specific field, you can easily find
                  a job through the Talento."
                </p>
              </div>
              {/* review - end */}
              {/* review - start */}
              <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                <div>
                  <span className="block text-sm font-bold md:text-base">
                    Kate Berg
                  </span>
                  <span className="block text-sm text-gray-500">July 21, 2024</span>
                </div>
                {/* stars - start */}
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {/* stars - end */}
                <p className="text-gray-600">
                  "It is definitely a great app with correct and true information
                  on the job details. I am happy to use it and I would also
                  recommend my friends to use it for their career development."
                </p>
              </div>
              {/* review - end */}
              {/* review - start */}
              <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                <div>
                  <span className="block text-sm font-bold md:text-base">
                    Greg Jackson
                  </span>
                  <span className="block text-sm text-gray-500">March 16, 2021</span>
                </div>
                {/* stars - start */}
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {/* stars - end */}
                <p className="text-gray-600">
                  This website is very helpful if you are looking for a job
                  and the team is also very supportive and friendly.
                  They guided me through every stage. It is very easy to
                  find a job on Talento because there are a lot of job options here for everyone.
                  I got a job interview call very quickly after applying.
                </p>
              </div>
              {/* review - end */}
            </div>
          </div>
        </div>

        {/* collections - end */}
        {/* newsletter - start */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
              <div className="mb-4 sm:mb-8 lg:mb-0">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">
                  Get the latest updates
                </h2>
                <p className="text-center text-gray-500 lg:text-left">
                  Sign up for our newsletter
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <form className="mb-3 flex w-full max-w-md gap-2">
                  <input
                    placeholder="Email"
                    className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                  <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Send
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 lg:text-right">
                  By signing up to our newsletter you agree to our{" "}
                  <a
                    href="#"
                    className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Term of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter - end */}
        {/* footer - start */}
        <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
          <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
              <div className="col-span-full lg:col-span-2">
                {/* logo - start */}
                <div className="mb-4 lg:-mt-2">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                    aria-label="logo"
                  >

                    <img src="/logo.png" className='h-12 w-12' alt="" />TALENTO
                  </a>
                </div>
                {/* logo - end */}
                <p className="mb-6 text-gray-500 sm:pr-8">
                  Filler text is dummy text which has no meaning however looks very
                  similar to real text.
                </p>
                {/* social - start */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                    </svg>
                  </a>
                </div>
                {/* social - end */}
              </div>
              {/* nav - start */}
              
              {/* nav - end */}
              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Company
                </div>
                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="/about"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      About
                    </a>
                  </div>
                  
                  <div>
                    <a
                      href="/vacancy"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Jobs
                    </a>
                  </div>
                  
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Blog
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}
              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Support
                </div>
                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="/contact"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Contact
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Documentation
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Chat
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      FAQ
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}
              {/* nav - start */}
              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Legal
                </div>
                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Terms of Service
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Cookie settings
                    </a>
                  </div>
                </nav>
              </div>
              {/* nav - end */}
            </div>
            <div className="border-t py-8 text-center text-sm text-gray-400">
              © 2024
              - Present Talento. All rights reserved.
            </div>
          </footer>
        </div>
        {/* footer - end */}
      </>


    </>
  )
}

export default Home