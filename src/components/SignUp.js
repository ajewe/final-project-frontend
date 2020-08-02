import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/actions/userActions'
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

export const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  const [ newUserData, setNewUserData ] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  })

  const handleChange = e => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createUser(newUserData))
    history.push("/login")
  }

  return (
    <Container maxWidth="sm">
      <form className={ classes.root } onSubmit={ handleSubmit } >
        <TextField 
          className={ classes.txtField } 
          name="email"
          label="Email" 
          value={ newUserData.email }
          onChange={ handleChange }
        />
        <TextField 
          className={ classes.txtField } 
          name="firstName"
          label="First Name" 
          value={ newUserData.firstName }
          onChange={ handleChange }
        />
        <TextField 
          className={ classes.txtField } 
          name="lastName"
          label="Last Name" 
          value={ newUserData.lastName }
          onChange={ handleChange }
        />
        <TextField 
          className={ classes.txtField } 
          name="password"
          label="Password" 
          value={ newUserData.password }
          onChange={ handleChange }
        />
        <Button className={ classes.btn } 
                type="submit" 
                variant="contained"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}