import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    console.log(name, email, photourl, password);
  };
  return (
    <div className="text-white mt-20">
      <div className="w-95 mx-auto card-body bg-primary">
        <h1 className="text-3xl font-bold text-center">Register Now !</h1>
        <form onSubmit={handleRegisterForm}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input text-primary"
              placeholder="Name"
              name="name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input text-primary"
              placeholder="Email"
              name="email"
            />
            <label className="label">PhotoURL</label>
            <input
              type="url"
              className="input text-primary"
              placeholder="Photo URL"
              name="photourl"
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input text-primary"
              placeholder="Password"
              name="password"
            />

            <button className="btn bg-primary text-white mt-4">Login</button>
          </fieldset>
        </form>
        <p className="font-semibold">
          Already Have An Account?{" "}
          <Link className="hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
