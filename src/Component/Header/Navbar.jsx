import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
// import Logo from "../Logo"; // Your Logo component
import { AuthContext } from "../../ContextApi/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);

  // Fetch additional user data from backend if needed
  useEffect(() => {
    if (user?.email) {
      fetch(`https://import-export-hub-server-phi.vercel.app/currentuser/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCurrentUser(data))
        .catch(console.error);
    }
  }, [user]);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

   const links = (
    <>
      <li>
        <NavLink
          to="/allproducts"
          className={({ isActive }) => `${isActive && "underline"} mr-2`}
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => `${isActive && "underline"} mr-2`}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/howitworkstimeline"
          className={({ isActive }) => `${isActive && "underline"} mr-2`}
        >
          How It Works
        </NavLink>
      </li>
      
    </>
  );

  const dropdown = (
    <div className="dropdown dropdown-end">
      {/* Avatar */}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={currentUser?.photoURL || user?.photoURL} alt="profile" />
        </div>
      </label>

      {/* Dropdown menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-50 w-56 rounded-2xl bg-base-100 p-3 shadow-xl text-primary"
      >
        <li className="mb-2 pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={currentUser?.photoURL || user?.photoURL}
                  alt="profile"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm">
                {currentUser?.name || user?.displayName}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {currentUser?.email || user?.email}
              </p>
            </div>
          </div>
        </li>

        <div className="divider my-1"></div>

        {/* <li>
          <Link to="/dashboardLayout/userProfile" className="flex gap-2">
            Profile
          </Link>
        </li> */}
        <li>
          <Link to="/dashboardLayout" className="flex gap-2">
            Dashboard
          </Link>
        </li>

        <div className="divider my-1"></div>

        <li>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-primary text-white w-full"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar bg-primary text-white shadow-sm lg:px-20 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        {/* Hamburger menu for mobile */}
        <div className="dropdown dropdown-start lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 w-60 rounded-2xl bg-base-100 p-4 shadow-xl gap-1"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="text-xl">
          <span className="text-lime-300 font-bold">ImportExport</span>
          <sub>Hub</sub>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
            <path
              fill=" white"
              d="M929 38c-12-5-24-8-36-8l-17 15H124l-17-15c-12 0-24 3-36 8L40 50l31 13c12 5 24 7 37 7l16-15h752l17 15c12 0 24-2 36-7l31-13-31-12Z"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div>{dropdown}</div>
        ) : (
          <Link to="/login" className="btn bg-white text-primary border-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;