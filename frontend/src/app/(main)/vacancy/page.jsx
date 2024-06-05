'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Vacancy = () => {

  const [jobList, setJobList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  const fetchJobs = () => {
    fetch('http://localhost:5000/jobpost/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setJobList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const fetchCompanies = () => {
    fetch('http://localhost:5000/company/getall')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setCompanyList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, []);

  const displayJobs = () => {
    return jobList.map(job => {
      return <div className='flex flex-wrap '>
        <div className="w-full max-w-md px-8 py-4 mt-16 ml-10  bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 dark:border-blue-400"
              alt="Testimonial avatar"
              src={"http://localhost:5000/" + job.company.logo}
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            {job.designation}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">

            <div className='gap-4 flex'>
              <label className='font-semibold'> Job Type : {job.jobType} </label>
              <div>
                <label className='font-semibold'> Qualification : {job.eduQualification} </label>
              </div>
            </div>
            <div>
              <label className='font-semibold'> Entries : {job.numberOfEntries} </label>
            </div>
            {job.jobDescription}
          </p>
          <div className="flex justify-end mt-4">
            <Link
              href={`/vacancy-details/${job._id}`}
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              tabIndex={0}
              role="link"
              >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div className='flex'>
    <div className=''>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
  <span className='text-black font-semibold text-lg '>Filters</span>
  <div className="relative mt-6">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <input
      type="text"
      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      placeholder="Search"
    />

  </div>
  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav>
      <div>

  <span className="ml-2 text-black font-semibold mt-3 ">Qualification</span>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
        href="#"
        >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
          />
          <span className="ml-2 text-gray-700">BCA</span>
      </a>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
        href="#"
      >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
            />
          <span className="ml-2 text-gray-700">MCA</span>
      </a>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
        href="#"
      >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
          />
          <span className="ml-2 text-gray-700">B.Com</span>
      </a>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
        href="#"
      >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
            />
          <span className="ml-2 text-gray-700">M.Com</span>
      </a>
      </div>
      <div className='mt-5'>

      <span className="ml-2 text-black font-semibold ">Salary</span>
      <a
        className="flex items-center px-4 py-2  text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
         <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
          />
          <span className="ml-2 text-gray-700">10000-15000</span>
        
      </a>
      <a
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
        >
         <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
            />
          <span className="ml-2 text-gray-700">15000-20000</span>
        
      </a>
      <a
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
        >
         <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            defaultChecked=""
            />
          <span className="ml-2 text-gray-700">20000-25000</span>
        
      </a>
            </div>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Tickets</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Settings</span>
      </a>
      <hr className="my-6 border-gray-200 dark:border-gray-600" />
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Tickets</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Settings</span>
      </a>
    </nav>
    <a href="#" className="flex items-center px-4 -mx-2">
      <img
        className="object-cover mx-2 rounded-full h-9 w-9"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="avatar"
      />
      <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
        John Doe
      </span>
    </a>
  </div>
</aside>
    </div>

      <div className="col-span-10">
        <div className='grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
        {displayJobs()}
        </div>
      </div>
</div>

  )
}

export default Vacancy