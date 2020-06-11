import React from 'react';
import { Switch, Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux';
import { Login } from './components/Login'
import { Home } from './components/Home'
import { NewEntry } from './components/newEntry/NewEntry'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const userAuth = useSelector(state => state.user.isLoggedIn)

  return (
    <Route
    {...rest}
    render={(props) => userAuth === true
      ? <Component {...props} />
      : <Redirect to="/login" />}
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <ProtectedRoute exact path="/" component={ Home } />
      <ProtectedRoute path="/new-entry/:id" component={ NewEntry } />
    </Switch>
  )
}

export default Router