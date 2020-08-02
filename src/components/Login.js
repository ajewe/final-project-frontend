import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { createSession } from '../redux/actions/userActions'
import { useHistory } from 'react-router-dom'
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40%"
  },
  txtField: {
    margin: "10px"
  },
  btn: {
    marginTop: "30px"
  }
})

export const Login = ({ location }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.user)
  const [ userLoginInfo, setUserLoginInfo ] = React.useState({
    email: "",
    password: ""
  })
  // const [ redirectToReferrer, setRedirectToReferrer ] = React.useState(false)

  const handleTextChange = e => {
    setUserLoginInfo({
      ...userLoginInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createSession(userLoginInfo))
  }

  const handleSignUp = () => {
    history.push("/signup")
  }
  const { from } = location.state || {from: { pathname:"/" }};

  useEffect(() => {
    const user = localStorage.getItem('token')

    if (user) {
      const action = {
        type: 'CREATE_SESSION',
        value: user
      }
      dispatch(action)
    }
  }, []);
  
  return (
    <>
      { user.isLoggedIn ? 
        <Redirect to={from} /> :
        <Container maxWidth="sm">
          <form className={ classes.root } onSubmit={ handleSubmit } >
            <TextField className={ classes.txtField } 
                      label="Email" 
                      name="email" 
                      value={ userLoginInfo.email }
                      onChange={ handleTextChange } 

            />
            <TextField className={ classes.txtField } 
                      label="Password" 
                      name="password" 
                      value={ userLoginInfo.password }
                      onChange={ handleTextChange }
            />
            <Button className={ classes.btn } type="submit" variant="contained">
              Login
            </Button>
            <Button className={ classes.btn } 
                    onClick={ () => handleSignUp() } 
                    variant="contained"
            >
              Sign Up
            </Button>
          </form>
        </Container>
      }
    </>
  );
}