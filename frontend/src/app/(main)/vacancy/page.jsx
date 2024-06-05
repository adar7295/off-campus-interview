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
    <hr className="my-6 border-gray-200 dark:border-gray-600" />
      <div>

  <span className="ml-2 text-black font-semibold mt-3 ">Qualification</span>
      <a
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
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
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
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
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
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
        className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
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
      <hr className="my-6 border-gray-200 dark:border-gray-600" />
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
            <hr className="my-6 border-gray-200 dark:border-gray-600" />
            <div className='mt-5'>

<span className="ml-2 text-black font-semibold ">Job Type</span>
<a
  className="flex items-center px-4 py-2  text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
  href="#"
>
   <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-gray-600"
      defaultChecked=""
    />
    <span className="ml-2 text-gray-700">Part time</span>
  
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
    <span className="ml-2 text-gray-700">Fulll time</span>
  
</a>
      </div>
     
      
     
    </nav>
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