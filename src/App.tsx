import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from '../src/components/sign-in/sign-in'
import Home from './components/home/home';
import Register from './components/register/register';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route exact path="/sign-in">
            <SignIn/>
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
