import { Menu } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

import { classNames } from "../LeftNavigation.helpers";

export const MenuItem = ({
  children,
  itemName,
  bookId,
  useButton,
  handleButtonClick,
}) => {
  if (useButton)
    return (
      <Menu.Item key={itemName}>
        {({ active }) => (
          <button
            onClick={() => handleButtonClick(bookId)}
            className={classNames(
              active ? "bg-gray-100" : "",
              "block w-full text-left px-4 py-2 text-sm text-gray-700"
            )}
          >
            {children}
          </button>
        )}
      </Menu.Item>
    );

  return (
    <Menu.Item key={itemName}>
      {({ active }) => (
        <Link
          to={`/${itemName}/${bookId}`}
          className={classNames(
            active ? "bg-gray-100" : "",
            "block w-full text-left px-4 py-2 text-sm text-gray-700"
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
};
