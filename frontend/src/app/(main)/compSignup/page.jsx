'use client'
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';

const compSignupSchema = Yup.object().shape({
  name : Yup.string().min(4,"Enter Full Name").required("Full Name Required"),
  compEmail : Yup.email().required("Email is Required"),
  Password : Yup.string().min(4,"Enter Strong Password").required("Password is Required").matches(/[a-z]/, 'Must Include Lowercase')
  .matches(/[A-Z]/, 'Must Include Uppercase').matches(/\W/, 'Must Include Special Character'),
  confirmPassword : Yup.string().oneOf([Yup.ref("password"),null], "password must match").required("Password is Required"),
  
})
const compSignup = () => {

const compSignupForm = useFormik({
  initialValues:{
    compName:"",
    compEmail:"",
    password:"",
    confirmPassword:"",
  },
  onSubmit : (values,{resetForm}) => {
    console.log(values);
    fetch('http://localhost:5000/comp/add',{
      method : 'POST',
      body : JSON.stringify(values),
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then((response) => {
       console.log(response.status);
       if(response.status ===200)
       {
        toast.success("user Registered Successfuly");
        resetForm();
       }
       else{
        toast.error("User Registeration failed");
       }
    })
    .catch((err) => {
      console.log(err);
      toast.error("User Registeration failed");
    });
    
  },
  validationSchema : compSignupSchema
})

  
  return (
    <>
      <>
        {/* component */}
        <div className="font-sans">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-indigo-500 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-xl  w-full h-full rounded-3xl absolute  transform rotate-6" />
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label
                  htmlFor=""
                  className="block mt-3 text-lg text-gray-700 text-center font-bold"
                >
                  Company Registration
                </label>
                <form method="#" action="#" className="mt-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-lg shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="email"
                      placeholder="Email"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Password"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <button className="bg-indigo-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Register
                    </button>
                  </div>
                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-600 w-full">
                      Register From
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                  <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-indigo-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>
                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Google
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="mr-2">Already have an account?</label>
                      <a
                        href="#"
                        className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}
export default compSignup;