'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Vacancy = () => {

  const [jobList, setJobList] = useState([]);

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

  useEffect(() => {
    fetchJobs();
  }, []);

  const displayJobs = () => {
    return jobList.map(job => {
      return <div className='flex flex-wrap '>
        <div className="w-full max-w-md px-8 py-4 mt-16 ml-10  bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
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
              href="vacancy-details/._id"
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
    <div className='flex flex-wrap '>
      {displayJobs()}
    </div>

  )
}

export default Vacancy