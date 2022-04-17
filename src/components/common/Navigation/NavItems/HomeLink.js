import { HomeIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export const HomeLink = () => (
  <Link
    key="home"
    to="/"
    className={
      "text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
    }
  >
    <HomeIcon
      className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
      aria-hidden="true"
    />
    Home
  </Link>
);
