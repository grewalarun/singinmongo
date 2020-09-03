import React,{ useState} from 'react';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Switch, NavLink,Link, useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
 var dd='';




export default function Signin() {
    const classes = useStyles();
    const history = useHistory();
    const[em,setEm]= useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)          // email
        console.log(event.target.password.value)          // password
        axios.post('http://localhost:2500/api/users/signin', {userName:event.target.email.value,password:event.target.password.value})
        .then(res => {
            alert(res.headers['x-auth-token']);
            localStorage.setItem('ab', 'ab');
            history.push(
                {
                    pathname:"/profile",
                    state:{name:"arun"}
            
            });

          })
          .catch((err) => {
            console.log(err.response.data); // you can get the response like this
            dd=err.response.data;
                setEm({
                em:dd
                })
               
          });
      } 

var ax = localStorage.getItem('ab')
if(ax=='ab'){
    history.push(
        {
            pathname:"/profile",
            state:{name:"arun"}
    
    });
}
console.log("--------");
console.log(ax);
console.log(em);

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
        <span className="text-red">{dd}</span>
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
          {/*dd!=0?dd.filter(v=>v.path[0]=="password").map(a=>a.message):""*/}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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