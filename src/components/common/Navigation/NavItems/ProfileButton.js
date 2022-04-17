import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/outline";
import React from "react";

import { classNames } from "../LeftNavigation.helpers";

export const ProfileButton = ({ username, signOut }) => (
  <Menu as="div" className="ml-3 relative">
    <Menu.Button className="w-full flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <div className="w-full text-indigo-100 group flex items-center px-2 py-2 text-base font-medium rounded-md">
        <span className="sr-only">Open user menu</span>
        <UserIcon
          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
          aria-hidden="true"
        />
        {username}
      </div>
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
      <Menu.Items className="self-end origin-top-right absolute right-0 -top-16 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item key="Sign out">
          {({ active }) => (
            <button
              onClick={() => signOut()}
              className={classNames(
                active ? "bg-gray-100" : "",
                "block w-full text-left px-4 py-2 text-sm text-gray-700"
              )}
            >
              Sign out
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
);
