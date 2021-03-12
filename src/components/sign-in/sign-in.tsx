import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Logo from "../shared/logo/logo";
import "./sign-in.scss";

function SignIn() {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="sign-in">
      <Logo />

      <h4 className="mb-4">Sign in</h4>

      <Form noValidate validated={validated} onSubmit={handleRegister}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
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
              autoFocus
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
