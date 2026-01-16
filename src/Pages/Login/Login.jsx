import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Helmet } from "react-helmet";

const Login = () => {
  const DEMO_IMPORTER = { email: "ahasana@sana.com", password: "123456Ah" };
  const DEMO_EXPORTER = { email: "shifa@shifu.com", password: "123456Sh" };

  const { signInUser, googleUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const location = useLocation();
  const navigate = useNavigate();

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Regular login
  const handleLoginForm = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    signInUser(email, password)
      .then(() => navigate(location.state || "/"))
      .catch((err) => setError(err.message));
  };

  // Google login
  const handleGoogleLogin = () => {
    googleUser()
      .then((result) => {
        fetch("https://import-export-hub-server-phi.vercel.app/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result.user),
        })
          .then((res) => res.json())
          .then(() => navigate(location.state || "/"));
      })
      .catch((err) => setError(err.message));
  };

  // Demo login helper
  const handleDemoLogin = (demoUser) => {
    setFormData(demoUser); // Prefill inputs
    signInUser(demoUser.email, demoUser.password)
      .then(() => navigate(location.state || "/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="text-white mt-20 min-h-screen pt-26">
      <Helmet>
        <title>Login - Import Export Hub</title>
      </Helmet>
      <div className="w-95 mx-auto card-body bg-primary">
        <h1 className="text-3xl font-bold text-center">Login Now!</h1>
        <form onSubmit={handleLoginForm}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input text-primary"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input text-primary"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p className="text-red-500 font-semibold">{error}</p>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-primary text-white mt-4">Login</button>

            {/* Demo Logins */}
            <button
              type="button"
              onClick={() => handleDemoLogin(DEMO_IMPORTER)}
              className="btn btn-outline w-full mt-2"
            >
              Demo Login as Importer
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin(DEMO_EXPORTER)}
              className="btn btn-outline  w-full mt-2"
            >
              Demo Login as Exporter
            </button>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-2 btn bg-white text-black border-[#e5e5e5]"
            >
              Login with Google
            </button>
          </fieldset>
        </form>
        <p className="font-semibold mt-4">
          Doesn't Have An Account?{" "}
          <Link className="hover:underline text-lime-300" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
