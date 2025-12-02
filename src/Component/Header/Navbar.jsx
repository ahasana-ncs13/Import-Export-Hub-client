import React, { use } from "react";
import { Link, Links } from "react-router";
import { AuthContext } from "../../ContextApi/AuthContext";

const Navbar = () => {

  const {user,logoutUser}=use(AuthContext)

  const handleLogout=()=>{
    logoutUser()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error.message())
    })
  }

  const links = (
    <>
      <li>
        <Link to="/allproducts" className="mr-2">
          All Products
        </Link>
      </li>
      <li>
        <Link to="/myimports" className="mr-2">
          My Imports
        </Link>
      </li>
      <li>
        <Link to="/addexports">
          Add Export 
        </Link>
      </li>
      <li>
        <Link to="" className="mr-2">
          My Exports
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-primary text-white">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-primary text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <span className="text-lime-300 font-bold">ImportExport</span><sub>Hub</sub>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill=" white" d="M929 38c-12-5-24-8-36-8l-17 15H124l-17-15c-12 0-24 3-36 8L40 50l31 13c12 5 24 7 37 7l16-15h752l17 15c12 0 24-2 36-7l31-13-31-12Z"></path></svg>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {
            user?
            <div className="flex gap-3 object-cover items-center">
              <img className="bg-white border-2 w-10 h-10 rounded-full " src={user.photoURL} alt="" />
              <button onClick={handleLogout} className="btn bg-white text-primary w-25 ">LogOut</button>
            </div>:<Link to='/login' className="btn bg-white text-primary w-25 ">Login</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
