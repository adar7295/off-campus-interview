'use client';
import React, { useEffect, useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

const ManageVacancy = () => {

    const [currentCompany, setCurrentCompany] = useState(JSON.parse(sessionStorage.getItem('company')));
    const [interviewList, setInterviewList] = useState([]);

    let [isOpen, setIsOpen] = useState(false);
    const [applicationList, setApplicationList] = useState([]);

    const fetchVacancies = () => {
        fetch('http://localhost:5000/jobpost/getbycompany/' + currentCompany._id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setInterviewList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const fetchApplications = (interviewId) => {
        fetch('http://localhost:5000/apply/getbyinterview/' + interviewId)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setApplicationList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchVacancies();
    }, [])


    const displayInterviews = () => {
        return <>

            {/* Table Section */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                {/* Header */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                            Users
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            Add users, edit and more.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                                href="#"
                                            >
                                                View all
                                            </a>
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                                href="#"
                                            >
                                                <svg
                                                    className="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5v14" />
                                                </svg>
                                                Add user
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Header */}
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Position
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Portfolio
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Created
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end" />
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {
                                            interviewList.map(interview => (
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">

                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                        {interview.designation}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {interview.jobType}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Active
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 dark:text-neutral-500">
                                                                    1/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                                                                        role="progressbar"
                                                                        style={{ width: "25%" }}
                                                                        aria-valuenow={25}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                                28 Dec, 12:12
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <button
                                                                onClick={() => {
                                                                    fetchApplications
                                                                    setIsOpen(true)
                                                                }}
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Table Section */}
        </>

    }

    return (
        <div>
            <Transition
                show={isOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 flex w-full items-center justify-center p-4">
                        <DialogPanel className="w-2xl space-y-4 border bg-white p-12">
                            <DialogTitle className="font-bold">Job Applicants</DialogTitle>
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-800">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Position
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Status
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Portfolio
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Created
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-end" />
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {
                                        // applicationList.map(application => (
                                        //     <tr>
                                        //         <td className="size-px whitespace-nowrap">
                                        //             <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                        //                 <div className="flex items-center gap-x-3">

                                        //                     <div className="grow">
                                        //                         <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                        //                             {interview.designation}
                                        //                         </span>
                                        //                     </div>
                                        //                 </div>
                                        //             </div>
                                        //         </td>
                                        //         <td className="h-px w-72 whitespace-nowrap">
                                        //             <div className="px-6 py-3">
                                        //                 <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                        //                     {interview.jobType}
                                        //                 </span>
                                        //             </div>
                                        //         </td>
                                        //         <td className="size-px whitespace-nowrap">
                                        //             <div className="px-6 py-3">
                                        //                 <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                        //                     <svg
                                        //                         className="size-2.5"
                                        //                         xmlns="http://www.w3.org/2000/svg"
                                        //                         width={16}
                                        //                         height={16}
                                        //                         fill="currentColor"
                                        //                         viewBox="0 0 16 16"
                                        //                     >
                                        //                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        //                     </svg>
                                        //                     Active
                                        //                 </span>
                                        //             </div>
                                        //         </td>
                                        //         <td className="size-px whitespace-nowrap">
                                        //             <div className="px-6 py-3">
                                        //                 <div className="flex items-center gap-x-3">
                                        //                     <span className="text-xs text-gray-500 dark:text-neutral-500">
                                        //                         1/5
                                        //                     </span>
                                        //                     <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                        //                         <div
                                        //                             className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                                        //                             role="progressbar"
                                        //                             style={{ width: "25%" }}
                                        //                             aria-valuenow={25}
                                        //                             aria-valuemin={0}
                                        //                             aria-valuemax={100}
                                        //                         />
                                        //                     </div>
                                        //                 </div>
                                        //             </div>
                                        //         </td>
                                        //         <td className="size-px whitespace-nowrap">
                                        //             <div className="px-6 py-3">
                                        //                 <span className="text-sm text-gray-500 dark:text-neutral-500">
                                        //                     28 Dec, 12:12
                                        //                 </span>
                                        //             </div>
                                        //         </td>
                                        //         <td className="size-px whitespace-nowrap">
                                        //             <div className="px-6 py-1.5">
                                        //                 <button
                                        //                     onClick={() => {
                                        //                         fetchApplications
                                        //                         setIsOpen(true)
                                        //                     }}
                                        //                     className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                        //                 >
                                        //                     Edit
                                        //                 </button>
                                        //             </div>
                                        //         </td>
                                        //     </tr>
                                        // ))
                                    }
                                </tbody>
                            </table>
                            <div className="flex gap-4">
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
            {displayInterviews()}
        </div>
    )
}

export default ManageVacancy;