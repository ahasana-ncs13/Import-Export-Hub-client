import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="text-white mt-20">
        
      <div className="w-95 mx-auto card-body bg-primary">
        <h1 className="text-3xl font-bold text-center">Login Now !</h1>
        <form >
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input text-primary" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input text-primary" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-primary text-white mt-4">Login</button>
          </fieldset>
        </form>
        <p className="font-semibold">Doesn't Have An Account? <Link className=" underline" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
