import React from 'react';
import Logo from '../shared/logo/logo'
import './register.scss'

function Register() {
  return (
    <div className="sign-in">
      <form>
        <Logo />

        <input type="first-name" id="inputFirstName" className="form-control" placeholder="First name" required />
        <input type="last-name" id="inputLastName" className="form-control" placeholder="Last name" required />
        <input type="email" id="inputEmail" className="form-control" required placeholder="Email address" autoFocus />
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Register;
