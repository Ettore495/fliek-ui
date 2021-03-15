import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Logo from "../shared/logo/logo";
import { REGISTER } from "../../graphql/mutations/auth/register";
import "./register.scss";
import { useHistory } from "react-router-dom";
import { Button, Col, Form } from "react-bootstrap";

function Register() {
  const history = useHistory();

  const [registerUser] = useMutation(REGISTER);

  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = (event: any): void => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    registerUser({
      variables: {
        firstname: firstName,
        lastname: lastName,
        username: userName,
        password: password,
      },
    })
      .then((result) => {
        console.log(result);
        history.push("/sign-in");
      })
      .catch((err) => {});
  };

  return (
    <div className="sign-in register">
      <Logo />

      <h4 className="mb-4">Create your account</h4>

      <Form noValidate validated={validated} onSubmit={handleRegister}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="RegisterFirstNameInput">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="RegisterLastNameInput">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="RegisterEmailNameInput">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="RegisterPasswordNameInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button className="w-100" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Register;
