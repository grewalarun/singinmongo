import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import Link from '@material-ui/core/Link';
//import { Link as RouterLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
var dd=0;



export default function Signup() {
  const[em,setEm]= useState({em:''});
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/users/signup", {
        userName: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
       
      })
      .catch((err) => {
        console.log(err.response.data); // you can get the response like this
       // console.log(err.response.status); // status code of the request
        dd=err.response.data;
            setEm({
            em:dd
            })
           
      });
  };
 
console.log(dd);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddBoxOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="current-username"
            autoFocus
          />
{dd!=0?dd.filter(v=>v.path[0]=="userName").map(a=>a.message):"xx"}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
{dd!=0?dd.filter(v=>v.path[0]=="email").map(a=>a.message):"xx"}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
{dd!=0?dd.filter(v=>v.path[0]=="password").map(a=>a.message):"xx"}          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/" variant="body2">
                {"Already a member ? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
