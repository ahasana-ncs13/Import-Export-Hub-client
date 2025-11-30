import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };
  return (
    <div className="text-white mt-20">
      <div className="w-95 mx-auto card-body bg-primary">
        <h1 className="text-3xl font-bold text-center ">Login Now !</h1>
        <form onSubmit={handleLoginForm}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input text-primary"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input text-primary"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-primary text-white mt-4">Login</button>
          </fieldset>
        </form>
        <p className="font-semibold">
          Doesn't Have An Account?{" "}
          <Link className=" hover:underline text-lime-300" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
