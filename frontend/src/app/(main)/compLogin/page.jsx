'use client'
import React from "react";
import { useFormik } from 'formik';
import Link from "next/link";     
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const compLogin = () => {


    const router = useRouter();
  
    const loginForm = useFormik({
      initialValues: {
        compEmail: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values);
        fetch('http://localhost:5000/company/authenticate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.status === 200) {
              toast.success('Login Successfull');
  
              response.json()
                .then((data) => {
                  
                  sessionStorage.setItem('company', JSON.stringify(data));
                  router.push('/company/jobpost');
                });
  
            }
            else {
              toast.error('Invalid Credentials');
            }
  
          })
          .catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
  
          });
        }
    })
  
    return(
           <>
           <>
  {/* component */}
  {/* This is an example component */}
  <div className="font-sans">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label
            htmlFor=""
            className="block mt-3 text-sm text-gray-700 text-center font-semibold"
          >
            Login
          </label>
          <form onSubmit={loginForm.handleSubmit}>
            <div>
              <input
                type="email"
                id="compEmail"
                onChange={loginForm.handleChange}
                value={loginForm.values.compEmail}
                placeholder="Enter your Email"
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-lg shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="mt-7">
              <input
                type="password"
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                placeholder="Enter your Password"
                className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="mt-7 flex">
              <label
                htmlFor="remember_me"
                className="inline-flex items-center w-full cursor-pointer"
              >
                <input
                  id="remember_me"
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  name="remember"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <div className="w-full text-right">
                <a
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-7">
              <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>
            <div className="flex mt-7 items-center text-center">
              <hr className="border-gray-300 border-1 w-full rounded-md" />
              <label className="block font-medium text-sm text-gray-600 w-full">
                Login via
              </label>
              <hr className="border-gray-300 border-1 w-full rounded-md" />
            </div>
            <div className="flex mt-7 justify-center w-full">
              <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
               <Link href='/login'> Looking for a Job?</Link>
              </button>
            </div>
            <div className="mt-7">
              <div className="flex justify-center items-center">
                <label className="mr-2">Don't have an account?</label>
                <a
                  href="#"
                  className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Signup
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
export default compLogin;