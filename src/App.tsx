import React, { useEffect, useState } from "react";
import "./assets/css/theme.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "../src/components/sign-in/sign-in";
import Home from "./components/home/home";
import Register from "./components/register/register";
import GuardedRoute from "./components/shared/auth/GuardedRoute";

function App() {
  // forgive me - use localstorage to track login when refreshing
  const [isAutheticated, setisAutheticated] = useState(
    Boolean(localStorage.getItem("logged_in"))
  );

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event) {
        setisAutheticated(
          event?.storageArea?.["logged_in"] &&
            event?.storageArea?.["access_token"]
        );
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home/movies" />
          <Route exact path="/sign-in">
            <SignIn setIsAuthenticated={setisAutheticated} />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <GuardedRoute path="/home" component={Home} auth={isAutheticated} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
