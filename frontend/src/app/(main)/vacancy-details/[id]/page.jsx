'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const VacancyDetails = () => {

    const { id } = useParams();
const [Data, setData] = useState([])

 const fetchJobs = async () => {
    const res = await  fetch("http://localhost:5000/jobpost/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setData(data)
 }
useEffect(() => {
    fetchJobs()
},[])


const displayJobs = () => {
    if (Data !== null ) {
        return   <div><section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Have any Questions?
          </h1>  
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12 rounded-lg  ">
              <h1 className="text-xl font-bold text-black dark:text-white">
                Job Information

              </h1>
              <div className="mt-4 ml-5 space-y-4 lg:mt-8">
                <label
                  className="block text-black font-semibold  dark:text-blue-400"
                >
                  Job-Type 
                </label>
                
                {Data.jobType}

                <label
                    
                  className="block text-black font-semibold dark:text-gray-300"
                >
                  Job Title 
                </label>
                {Data.designation}

                <label
                  className="block text-black font-semibold dark:text-gray-300"
                >
                  Qualification
                </label>
                {Data.eduQualification}
                <label
                  className="block text-black font-semibold dark:text-gray-300"
                >
                  Salary
                </label>
                {Data.salary}
                <label
                  className="block text-black font-semibold dark:text-gray-300"
                >
                  Experience
                </label>
                {Data.workExperience}
                <label
                  className="block text-black font-semibold dark:text-gray-300"
                >
                  Location
                </label>
                {Data.location}
              </div>
            </div>
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
             
                 
                  <h1 className="mx-4 text-xl font-semibold  text-black dark:text-white">
                    Job Description
                  </h1>
                  <label className='text-gray-900'>

                  {Data.jobDescription}
                  </label>
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500" />
                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    
                  </p>
                </div>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              
              <div>
               
                  
                  <h1 className="mx-4 text-xl font-semibold text-gray-700 dark:text-white">
                   Required Skills, Experience and Qualification
                  </h1>
                  <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500" />
                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                   
                  </p>
                </div>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
             
            
            </div>
          </div>
        </div>
      </section>
      </div>
    }
    else {
        <p>Loading...</p>
        }
} 
  return (
  <section>{displayJobs()}</section>
  )
}

export default VacancyDetails;