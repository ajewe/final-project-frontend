import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
// import { useHistory } from 'react-router-dom'
import { Home } from './components/home/Home';
import { NewEntry } from './components/newEntry/NewEntry';
import { ViewEntry } from './components/ViewEntry';

const ProtectedRoute = ({component: Component, location, ...rest}) => {
  //maybe it should check document header for token?

  const user = useSelector(state => state.user)
  console.log('PR', user,  user.isLoggedIn)
  return (
    <Route
    {...rest}
    render={(props) => user.isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{ 
          pathname: "/login",
          state: { from: location }
          }}
        />
    }
    />
  )
}

const Router = () => {
  // const user = useSelector(state => state.user)
  // const history = useHistory()

  // useEffect(() => {
  //   console.log('here router')

  //   if(user.isLoggedIn) {
  //     history.push('/home')
  //   }
  // }, [user.isLoggedIn])


  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/signup" component={ SignUp } />
      <ProtectedRoute path="/" component={ Home } />
      <ProtectedRoute path="/new-entry/:id" component={ NewEntry } />
      <ProtectedRoute path="/view-entry/:id" component={ ViewEntry } />
    </Switch>
  )
}

export default Router