import React from 'react';
import Logo from '../shared/logo/logo'
import './sign-in.scss'

function SignIn() {
  return (
    <div className="sign-in">
      <form>
        <Logo />

        <input type="email" id="inputEmail" className="form-control" required placeholder="Email address" autoFocus />
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
