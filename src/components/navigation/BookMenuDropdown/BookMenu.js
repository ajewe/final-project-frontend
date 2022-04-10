import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React from "react";

import { MenuItem } from ".";

export const BookMenu = ({ bookId, bookTitle, handleDeleteBook }) => (
  <Menu as="div" className="w-full relative">
    <Menu.Button
      key={bookId}
      onClick={(e) => e.preventDefault()}
      className={
        "text-indigo-100 hover:bg-indigo-600 w-full group flex items-center px-2 py-2 text-base font-medium rounded-md"
      }
    >
      <FontAwesomeIcon
        icon={faBook}
        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        aria-hidden="true"
      />
      {bookTitle}
    </Menu.Button>
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="self-end origin-top-right absolute mt-2 right-24 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <MenuItem itemName="new-entry" bookId={bookId}>
          New Entry
        </MenuItem>
        <MenuItem itemName="view-all" bookId={bookId}>
          View All
        </MenuItem>
        <MenuItem
          itemName="delete-book"
          bookId={bookId}
          handleButtonClick={handleDeleteBook}
          useButton
        >
          Delete Book
        </MenuItem>
      </Menu.Items>
    </Transition>
  </Menu>
);
