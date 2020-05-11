import React from 'react';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../redux/actions'
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

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(verifyUser())
    history.push("/")
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