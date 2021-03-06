import React, { useState} from "react";
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
  useHistory
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
var dd='';
export default function Signup() {
  const[em,setEm]= useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2500/api/users/signup", {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
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
            id="name"
            label="Name"
            name="name"
            autoComplete="current-name"
            autoFocus
          />
{dd!=0?dd.filter(v=>v.path[0]=="name").map(a=>a.message):""}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
{dd!=0?dd.filter(v=>v.path[0]=="email").map(a=>a.message):""}
<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
          />
{dd!=0?dd.filter(v=>v.path[0]=="phone").map(a=>a.message):""}
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
{dd!=0?dd.filter(v=>v.path[0]=="password").map(a=>a.message):""}          
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
