import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaAffiliatetheme } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(AuthContext);
  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="navbar  md:w-11/12 md:mx-auto z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="AllVolunteer">All volunteer</NavLink>
              </li>
              <li>
                <details className="">
                  <summary>
                    <NavLink to="MyProfile">My Profile</NavLink>
                  </summary>
                  <ul className="p-2 z-50">
                    <li>
                      <NavLink to="AddVolunteer">Add Volunteer</NavLink>
                    </li>
                    <li>
                      <NavLink to="MyPost"> My Posts</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                    <NavLink to="MyVolunteerRequest">My Volunteer Request</NavLink>
                  </li>
            </ul>
          </div>
          <a>
            <img className="md:w-16 w-10" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="AllVolunteer">All volunteer</NavLink>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to="MyProfile">My Profile</NavLink>
                </summary>
                <ul className="p-2 z-50">
                  <li>
                    <NavLink to="AddVolunteer">Add Volunteer</NavLink>
                  </li>
                  <li>
                    <NavLink to="MyPost"> My Posts</NavLink>
                  </li>
                
                </ul>
              </details>
            </li>
            <li>
                    <NavLink to="MyVolunteerRequest">My Volunteer Request</NavLink>
                  </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <span className="flex gap-2 items-center">
              <span
                data-tooltip-id="my-tooltip"
                className="z-10"
                data-tooltip-content={`${user?.displayName}`}
              >
                {" "}
                <Tooltip id="my-tooltip" />
                <img
                  className="w-10 h-10 rounded-full"
                  src={`${user?.photoURL}`}
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </span>{" "}
              <Link onClick={logOut} to="/login" className="btn btn-primary">
                LogOut
              </Link>
            </span>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}

          <button
            className="btn btn-outline border  ml-4 "
            onClick={toggleTheme}
          >
            {theme == "dark" ? (
              <span className="flex gap-3">
                dark <FaAffiliatetheme />
              </span>
            ) : (
              <span className="flex gap-3 ">
                light <CiLight />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
