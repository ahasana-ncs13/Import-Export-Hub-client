import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../ContextApi/AuthContext";

const Register = () => {
  const { createUser, googleUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const strongPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    console.log(name, email, photourl, password);

    if (!strongPassword.test(password)) {
      setError(
        "Password must have uppercase, lowercase & at least 6 characters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message());
        console.log(error.message());
      });
  };

  const handleGoogleSignUp = () => {
    googleUser()
      .then((result) => {
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message());
        console.log(error.message());
      });
  };

  return (
    <div className="text-white mt-20 min-h-screen">
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
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input text-primary"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">PhotoURL</label>
            <input
              type="url"
              className="input text-primary"
              placeholder="Photo URL"
              name="photourl"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input text-primary"
              placeholder="Password"
              name="password"
              required
            />
            <p className="text-red-500 font-semibold">{error}</p>

            <button className="btn bg-primary text-white mt-4">Register</button>
            {/* Google */}
            <button
              onClick={handleGoogleSignUp}
              className="mt-2 btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              signUp with Google
            </button>
          </fieldset>
        </form>
        <p className="font-semibold">
          Already Have An Account?{" "}
          <Link className="hover:underline text-lime-300" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
