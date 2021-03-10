import React from 'react';
import Logo from '../shared/logo/logo'
import './register.scss'

function Register() {
  return (
    <div className="sign-in register">
      <form>
      <Logo />

      <h4 className="mb-4">Create your account</h4>

      <div className="mb-3">
        <label htmlFor="inputFirstName" className="form-label">First name</label>
        <input type="text" id="inputFirstName" className="form-control" placeholder="Minimum 2 characters" required />
        {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>

      <div className="mb-3">
        <label htmlFor="inputLastName" className="form-label">Last name</label>
        <input type="text" id="inputLastName" className="form-control" placeholder="Minimum 2 characters" required />
        {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Email address</label>
        <input type="email" id="inputEmail" className="form-control" required placeholder="Must be a valid email" autoFocus />
        {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>
        
      <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Minimum 8 characters" required />
          {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>

        <button className="btn btn-md btn-primary btn-block mt-4" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Register;
