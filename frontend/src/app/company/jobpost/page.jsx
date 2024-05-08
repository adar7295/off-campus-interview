import React from 'react'

const Jobpost = () => {


  
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

                <div>
                  <form >
                    <div>

                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <label htmlFor="" className="text-xs font-semibold px-1">
                          Company name
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Enter Name of Company"
                            />
                        </div>
                      </div>
                      
                    </div>
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="johnsmith@example.com"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Designation"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Enter no. of entry"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Part Time/Full Time"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Enter Salary"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Required Educational qualification"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="Require work experience"
                            />
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
                            
                            className="bg-white w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo"
                            placeholder="location"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                  </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                          LOGIN
                        </button>
                      </div>
                    </div>
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