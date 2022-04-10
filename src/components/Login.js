import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { createSession } from "../redux/actions/userActions";
import { SignIn } from "./SignIn";

export const Login = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleTextChange = (e) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSession(userLoginInfo));
  };

  const handleSignUpNavigation = () => {
    history.push("/signup");
  };
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    const userObj = localStorage.getItem("user");

    if (userObj) {
      const action = {
        type: "CREATE_SESSION",
        value: JSON.parse(userObj),
      };
      dispatch(action);
    }
  }, []);

  return (
    <>
      {user.isLoggedIn ? (
        <Redirect to={from} />
      ) : (
        <SignIn
          handleSubmit={handleSubmit}
          userLoginInfo={userLoginInfo}
          handleTextChange={handleTextChange}
          handleSignUpNavigation={handleSignUpNavigation}
        />
      )}
    </>
  );
};
