import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router";

import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { NewEntry } from "./components/newEntry/NewEntry";
import { ViewEntry } from "./components/ViewEntry";
import { ViewAllBookEntries } from "./components/ViewAllBookEntries";

const ProtectedRoute = ({ component: Component, location, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //if no user in redux store, check local storage for token
  if (!user) {
    const userObj = localStorage.getItem("user");
    if (userObj) {
      const action = {
        type: "CREATE_SESSION",
        value: JSON.parse(userObj),
      };
      dispatch(action);
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/new-entry/:id" component={NewEntry} />
      <ProtectedRoute path="/view-entry/:id" component={ViewEntry} />
      <ProtectedRoute path="/view-all/:id" component={ViewAllBookEntries} />
    </Switch>
  );
};

export default Router;
