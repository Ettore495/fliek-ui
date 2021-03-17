import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Col, Form } from "react-bootstrap";
import Logo from "../shared/logo/logo";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../../graphql/mutations/auth/login";
import "./sign-in.scss";
import { saveProfileToLocalStorage } from "../../services/security-service";

interface Props {
  setIsAuthenticated: Function;
}

function SignIn(props: Props) {
  const history = useHistory();

  const [loginUser, { client }] = useMutation(LOGIN);

  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // on mount
    localStorage.clear();
  }, []);

  const handleLogin = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    loginUser({
      variables: {
        username: userName,
        password: password,
      },
    })
      .then((result) => {
        // Clear apollo cache
        client.clearStore();
        // Store logged in for on refresh
        saveProfileToLocalStorage(result.data.login);
        props.setIsAuthenticated(true);
        localStorage.setItem("logged_in", "true");
        // Redirect to home page
        history.push("/home/movies");
      })
      .catch((error) => {
        //alert("invalid username or password");
      });
  };

  return (
    <div className="sign-in">
      <Logo />

      <h4 className="mb-4">Sign in</h4>

      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoFocus
            />
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <p className="mt-1  ">
          Don't have an account? <a href="/sign-up">Sign up</a>
        </p>
        <Button className="w-100" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
