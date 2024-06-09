"use client";
import { useFormik } from "formik";
import { comment } from "postcss";
import React ,{useState} from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import StarRatings from 'react-star-ratings';

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string().min(4, "Write your fullname").required("name is required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   comment: Yup.string().required("Comment is required").min(6, "Too small"),
// });

// const Feedback = () => {

//   const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
//   const [rating, setRating] = useState(4)


//   const feedback = useFormik({
//     initialValues: {
//       name: currentUser.name,
//       email: currentUser.email,
//       comment: "",
//       rating: 4,
//     },
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       values.rating = rating;
//       fetch("http://localhost:5500/feedback/add", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: {
//           "content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           console.log(response.status);
//           if (response.status === 200) {
//             toast.success("Feedback added Successfully");
//             resetForm();
//           } else {
//             toast.error("Feedback Failed");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           toast.error("Feedback Failed");
//         });
//     },
//     validationSchema: FeedbackSchema,
//   });
  return (
    <div>
      <>
        {/* Comment Form */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                Feed<span className="text-blue-700">back</span>
              </h2>
            </div>
            
           
            {/* Card */}
            <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
              <form onSubmit={feedback.handleSubmit}>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-name-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="py-3 px-4 text-gray-700 bg-white border-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Full name"
                    onChange={feedback.handleChange}
                    value={feedback.values.name}
                  />
                  {feedback.touched.name && (
                    <small class="text-red-600">{feedback.errors.name}</small>
                  )}
                </div>
                <div className="mb-4 sm:mb-8">
                  <label
                    htmlFor="hs-feedback-post-comment-email-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="py-3 px-4 block text-gray-700 bg-white border-2 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email address"
                    onChange={feedback.handleChange}
                    value={feedback.values.email}
                  />
                  {feedback.touched.email && (
                    <small class="text-red-600">{feedback.errors.name}</small>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="hs-feedback-post-comment-textarea-1"
                    className="block mb-2 text-sm font-medium dark:text-white"
                  >
                    Comment
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="comment"
                      // name="hs-feedback-post-comment-textarea-1"
                      // rows={3}
                      className="py-3 px-4 bg-white text-black border-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Leave your comment here..."
                      // defaultValue={""}
                      onChange={feedback.handleChange}
                      value={feedback.values.comment}
                    />
                    {feedback.touched.comment && (
                      <small class="text-red-600">
                        {feedback.errors.name}
                      </small>
                    )}
                  </div>
                </div>
                <StarRatings
                  className="mt-4"
                    rating={rating}
                    starRatedColor="blue"
                    changeRating={setRating}
                    numberOfStars={5}
                    name='rating'
                  />
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            {/* End Card */}
          </div>
        </div>
        {/* End Comment Form */}
      </>
    </div>
  );
};

export default Feedback;    