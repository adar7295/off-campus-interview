'use client'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const jobPostSchema = Yup.object().shape({

  email: Yup.string().email('Invalid Email').required('Enter Email'),
  designation: Yup.string().required('Enter Designation'),
  numberOfEntries: Yup.string().required('Enter Number Of Entries'),
  jobType: Yup.string().required("Enter Job Type"),
  salary: Yup.string().required("Enter Salary"),
  eduQualification: Yup.string().required("Enter Educational qualification"),
  workExperience: Yup.string().required("Enter required Work Experience"),
  location: Yup.string().required("Enter Location"),
});

const Jobpost = () => {

  const [currentCompany, setCurrentCompany] = useState(
    JSON.parse(sessionStorage.getItem('company'))
  );
  console.log(currentCompany);

  const jobPostForm = useFormik({
    initialValues: {
      company: currentCompany._id,
      email: '',
      designation: '',
      numberOfEntries: '',
      jobType: '',
      salary: '',
      eduQualification: '',
      workExperience: '',
      location: '',
    },
    onSubmit: (values) => {
      console.log(values);

      fetch('http://localhost:5000/jobpost/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("job Posted Successfully");
          }
          else {
            toast.error("job Posting Failed");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("job Posting Failed");
        });
    },
    validationSchema: jobPostSchema
  })

  return (
    <div>
      <div>
        <>
          {/* component */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
            }}
          />
          <div className="min-w-screen min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-5 py-5">
            <div
              className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
              style={{ maxWidth: 1000 }}
            >
              <div className="md:flex w-full">


                <div className="hidden md:block w-1/2 bg-white py-32 px-10">
                  <img src="/p1.png" alt="" />
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 bg-blue-250 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-black">Post Jobs here</h1>
                    <p>Enter information about Job </p>
                  </div>
                  <div>

                    <form onSubmit={jobPostForm.handleSubmit}>
                      <div>
                        <div>


                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Email
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="email"
                                  id="email"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.email}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="johnsmith@example.com"
                                />
                                {
                                  jobPostForm.touched.email &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.email}</small>
                                }
                              </div>
                            </div>

                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Designation
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="designation"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.designation}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Designation"
                                />
                                {
                                  jobPostForm.touched.designation &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.designation}</small>
                                }
                              </div>
                            </div>

                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Number of Entries
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="numberOfEntries"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.numberOfEntries}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Enter no. of entry"
                                />
                                {
                                  jobPostForm.touched.numberOfEntries &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.numberOfEntries}</small>
                                }
                              </div>
                            </div>

                          </div>
                        </div>
                        <div>

                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Job Type
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="jobType"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.jobType}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Part Time/Full Time"
                                />
                                {
                                  jobPostForm.touched.jobType &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.jobType}</small>
                                }
                              </div>
                            </div>

                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Salary
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="salary"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.salary}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Enter Salary"
                                />
                                {
                                  jobPostForm.touched.salary &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.salary}</small>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Educational Qualification
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="eduQualification"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.eduQualification}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Required Educational qualification"
                                />
                                {
                                  jobPostForm.touched.eduQualification &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.eduQualification}</small>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Work Experience
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="workExperience"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.workExperience}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="Require work experience"
                                />
                                {
                                  jobPostForm.touched.workExperience &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.workExperience}</small>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                              <label htmlFor="" className="text-xs font-semibold px-1">
                                Location
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                  type="text"
                                  id="location"
                                  onChange={jobPostForm.handleChange}
                                  values={jobPostForm.values.location}
                                  className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                                  placeholder="location"
                                />
                                {
                                  jobPostForm.touched.location &&
                                  <small className='text-sm text-red-500'>{jobPostForm.errors.location}</small>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                            LOGIN
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Buy me a beer"
                href="https://www.buymeacoffee.com/scottwindon"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                />
              </a>
            </div>
          </div>
        </>

      </div>
    </div>
  )
}

export default Jobpost