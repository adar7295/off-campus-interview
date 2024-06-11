'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const VacancyDetails = () => {

  const { id } = useParams();
  const [Data, setData] = useState([])

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:5000/jobpost/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setData(data)
  }

  useEffect(() => {
    fetchJobs()
  }, [])


  const applyInterview = () => {
    if (currentUser === null) {
      return toast.error('Login  to Apply')
    } else {
      fetch('http://localhost:5000/apply/checkapplication/' + id + '/' + currentUser._id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data) {
            toast.error('You have applied already!!')
          } else {

            fetch('http://localhost:5000/apply/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                interview: id,
                user: currentUser._id
              })
            })
              .then((response) => {
                if (response.status === 200) {
                    toast.success('Applied Successfully');
                }
              }).catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }

  const displayJobs = () => {
    if (Data !== null) {
      return <div><section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            More About Job Details
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
              <div className='w-1/2 ml-24'>
                <h1 className="mx-4 text-xl font-semibold  text-black dark:text-white">
                  Job Description
                </h1>
                <label className='text-gray-900'>

                  {Data.jobDescription}
                </label>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div className='w-1/2 ml-24'>
                <h1 className="mx-4 text-xl font-semibold text-gray-700 dark:text-white">
                </h1>
                <button className='bg-blue-500 py-3 px-4 rounded-md text-white' onClick={applyInterview}>Apply</button>
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