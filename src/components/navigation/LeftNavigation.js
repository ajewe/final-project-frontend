import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  MenuAlt2Icon,
  PlusCircleIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";

import { BookMenu } from "./BookMenuDropdown";
import { HomeLink, ProfileButton } from "./NavItems";

import { useOutsideClick } from "./LeftNavigation.helpers";
import { addBook, deleteBook } from "../../redux/actions/booksActions";
import { endSession } from "../../redux/actions/userActions";

export const LeftNavigation = ({ user, userToken }) => {
  const ref = React.useRef();
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books);

  const username =
    user.firstName && user.lastName
      ? user.firstName + " " + user.lastName
      : user.email;

  const [bookInput, setBookInput] = React.useState({
    bookName: "",
    displayInput: false,
  });
  const [reversedBooks, setReversedBooks] = React.useState([]);

  const reverseAllBooks = () => {
    let reverseBooksArr = allBooks.sort((a, b) => b.id - a.id);
    setReversedBooks(reverseBooksArr);
  };

  const handleBookChange = (e) => {
    setBookInput({
      ...bookInput,
      bookName: e.target.value,
    });
  };

  useOutsideClick(ref, (e) => {
    //to avoid initial click trigger, before form renders
    if (bookInput.displayInput) {
      //disregard empty, null, space values
      if (bookInput.bookName === "" || bookInput.bookName === " ") {
        setBookInput({
          bookName: "",
          displayInput: false,
        });
      } else {
        handleBookStateSubmit(e);
      }
    }
  });

  const handleBookStateSubmit = (e) => {
    e.preventDefault();
    let bookSubmitObject = {
      bookName: bookInput.bookName,
    };
    dispatch(addBook(bookSubmitObject, userToken));
  };

  const signOut = () => {
    localStorage.removeItem("user");
    //sets isloggedin to false, clears user info from redux store
    dispatch(endSession());
  };

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId, userToken));
  };

  React.useEffect(() => {
    reverseAllBooks();
    setBookInput({
      bookName: "",
      displayInput: false,
    });
  }, [allBooks]);

  return (
    <div className="flex flex-col h-full justify-between px-2 pb-4">
      <div className="flex-1 space-y-1">
        <div className="border-b border-indigo-300 pb-4">
          <HomeLink />
        </div>
        <div className="w-full flex flex-row text-center align-center justify-center py-2">
          <span className="text-2xl text-indigo-100">Books</span>
          <PlusCircleIcon
            className="inline-block cursor-pointer flex-shrink-0 h-7 w-7 text-indigo-300 ml-4"
            onClick={() => {
              setBookInput({
                ...bookInput,
                displayInput: !bookInput.displayInput,
              });
            }}
          />
        </div>
        {bookInput.displayInput && (
          <form ref={ref} onSubmit={handleBookStateSubmit}>
            <div>
              <label htmlFor="new-book" className="sr-only">
                New book
              </label>
              <input
                id="new-book"
                className="appearance-none rounded-md relative block w-full my-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleBookChange}
                autoFocus
              />
            </div>
          </form>
        )}
        {reversedBooks.map((book) => (
          <BookMenu
            key={book.id}
            bookId={book.id}
            bookTitle={book.book}
            handleDeleteBook={handleDeleteBook}
          />
        ))}
      </div>
      <ProfileButton username={username} signOut={signOut} />
    </div>
  );
};
