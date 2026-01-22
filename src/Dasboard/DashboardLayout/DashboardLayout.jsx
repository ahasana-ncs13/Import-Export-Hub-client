import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import {
  MdAssignmentAdd,
  MdDashboard,
  MdOutlineCelebration,
} from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { AuthContext } from "../../ContextApi/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);

  // Fetch additional user info from backend
  useEffect(() => {
    if (user?.email) {
      fetch(`https://import-export-hub-server-phi.vercel.app/currentuser/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCurrentUser(data))
        .catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <div className="drawer lg:drawer-open min-h-screen">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* ================= Main Content ================= */}
        <div className="drawer-content flex flex-col">
          {/* ---------- Navbar ---------- */}
          <nav className="navbar w-full bg-amber-50 dark:bg-gray-900 shadow-sm transition-colors duration-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M9 4v16" />
                <path d="M14 10l2 2l-2 2" />
              </svg>
            </label>

            <div className="px-4 font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
              Dashboard
            </div>
          </nav>

          {/* ---------- Page Content ---------- */}
          <main className="flex-1 p-4 md:p-6 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="card bg-linear-to-r from-primary to-secondary text-primary-content shadow-md">
                <div className="card-body items-center text-center">
                  <h1 className="text-2xl md:text-3xl flex gap-2 items-center font-bold">
                    Welcome <MdOutlineCelebration />
                  </h1>
                  <p className="text-sm md:text-base opacity-90 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    Manage your activities and track progress from your dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="bg-base-200 dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm min-h-[60vh] transition-colors duration-300">
              <Outlet />
            </div>
          </main>
        </div>

        {/* ================= Sidebar ================= */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <aside className="flex min-h-full flex-col bg-amber-50 dark:bg-gray-900 w-64 p-2 transition-colors duration-300">
            {/* ---------- Menu ---------- */}
            {currentUser?.role === "Importer" && (
              <ul className="menu w-full grow text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <li>
                  <Link to="/" className="tooltip" data-tip="Home">
                    <IoHome /> <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/importerdashboard"
                    className="tooltip"
                    data-tip="Dashboard"
                  >
                    <MdDashboard /> <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/myimports"
                    className="tooltip"
                    data-tip="My Issues"
                  >
                    <FaClipboardList /> <span> My Imports</span>
                  </Link>
                </li>
              </ul>
            )}

            {currentUser?.role === "Exporter" && (
              <ul className="menu w-full grow text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <li>
                  <Link to="/" className="tooltip" data-tip="Home">
                    <IoHome /> <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/exporterdashboard"
                    className="tooltip"
                    data-tip="Admin Dashboard"
                  >
                    <MdDashboard /> <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/myexports"
                    className="tooltip"
                    data-tip="My Issues"
                  >
                    <FaClipboardList /> <span> My Exports</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboardLayout/addexports"
                    className="tooltip"
                    data-tip="Report Issue"
                  >
                    <MdAssignmentAdd /> <span>Add Export Products</span>
                  </Link>
                </li>
              </ul>
            )}

            {/* ---------- Avatar (Bottom) ---------- */}
            <div className="dropdown dropdown-top w-full mt-auto">
              <div
                tabIndex={0}
                className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-base-300 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary ring-offset-2">
                    <img src={user?.photoURL} alt="profile" />
                  </div>
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">{user?.displayName}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
