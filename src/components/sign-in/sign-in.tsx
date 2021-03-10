import React from 'react';
import Logo from '../shared/logo/logo'
import './sign-in.scss'

function SignIn() {
  return (
    <div className="sign-in">
      <form>
        <Logo />

        <h4 className="mb-4">Sign in</h4>

        <input type="email" id="inputEmail" className="form-control" required placeholder="Email address" autoFocus />
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <p className="mt-4">Don't have an account? <a href="/sign-up">Sign up</a></p>

        <button className="btn btn-md btn-primary btn-block mt-4" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
