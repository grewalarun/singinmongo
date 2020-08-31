import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import Signin from './Components/Signin'; 
import Signup from './Components/Signup'; 
import Profile from './Components/Profile'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Sign in / Signup with mongodb
      </header>
      <Router>
          <ul className="main-nav">
            <li>
              <NavLink exact to={{ pathname: "/" }}>Sign in</NavLink>
            </li>
            <li>
              <NavLink exact to={{ pathname: "/Signup" }}>Sign up</NavLink>
            </li>
            <li>
              <NavLink exact to={{ pathname: "/Profile" }}>Profile</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact strict component={Signin} />
            <Route path="/Signup" exact strict component={Signup} />
            <Route path="/Profile" exact strict component={Profile} />
            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
