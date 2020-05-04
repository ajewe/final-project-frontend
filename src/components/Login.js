import React from 'react';
import { useSelector } from 'react-redux';
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

export const Login = () => {
  const classes = useStyles();

  const userAuth = useSelector(state => state.user[0].isLoggedIn)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(userAuth)
  }

  return (
    <Container maxWidth="sm">
      <form className={classes.root} onSubmit={handleClick} >
        <TextField className={classes.txtField} label="Email" />
        <TextField className={classes.txtField} label="Password" />
        <Button className={classes.btn} type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login