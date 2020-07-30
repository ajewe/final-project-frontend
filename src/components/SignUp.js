import React from 'react';
// import { useDispatch } from 'react-redux';
// import { verifyUser } from '../redux/actions'
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
  // const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(verifyUser())
    history.push("/")
  }

  const handleSignUp = (e) => {
    e.preventDefault()

  }

  return (
    <Container maxWidth="sm">
      <form className={ classes.root } onSubmit={ handleSubmit } >
        <TextField className={ classes.txtField } label="Email" />
        <TextField className={ classes.txtField } label="First Name" />
        <TextField className={ classes.txtField } label="Last Name" />
        <TextField className={ classes.txtField } label="Password" />
        <Button className={ classes.btn } 
                onClick={ () => handleSignUp } 
                variant="contained"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}