import React, { useState,useEffect } from 'react';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

//import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Switch, NavLink, Link, useHistory, Redirect } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signin() {


    const classes = useStyles();
    const history = useHistory();
    const [em, setEm] = useState();
    const [us, setUs] = useState(0);
    const [token, setToken] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:2500/api/users/signin', { userName: event.target.email.value, password: event.target.password.value })
            .then(res => {
               // console.log(res);
                localStorage.setItem('token', res.headers.authorization);
                setToken(res.headers.authorization);
                setEm()
                setUs(res.data)
                
            })
            .catch((err) => {
                console.log(err.response.data); // you can get the response like this
                setEm(
                    err.response.data
                )

            });
    }
    var ax = localStorage.getItem('token');

    if (ax) {
        return <Redirect to={{
            pathname: "/Profile",
            state: { email: "property_id" }
          }}/>
    }
else {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
        </Typography>

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
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
                    {em?<Alert severity="error" onClick={() => setEm(null)}>{em}</Alert>:''}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/" href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/Signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}
}