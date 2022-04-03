import { BeakerIcon, LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createUser } from "../redux/actions/userActions";

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUserData, setNewUserData] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(newUserData));
    history.push("/login");
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <BeakerIcon className="mx-auto h-12 w-auto text-blue-500" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up
            </h2>
          </div>
          <form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex justify-between w-full">
                <label htmlFor="email-address" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  autoComplete="fname"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mr-1"
                  placeholder="First Name"
                  value={newUserData.firstName}
                  onChange={handleChange}
                  autoFocus
                />
                <label htmlFor="last-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  autoComplete="lname"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ml-1"
                  placeholder="Last Name"
                  value={newUserData.lastName}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-4"
                  placeholder="Email address"
                  value={newUserData.email}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                  placeholder="Password"
                  value={newUserData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account? Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
