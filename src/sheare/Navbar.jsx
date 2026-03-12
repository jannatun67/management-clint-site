import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaAffiliatetheme, FaHandsHelping, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { CiLight, CiMenuBurger } from "react-icons/ci";
import { MdDashboard, MdPostAdd, MdVolunteerActivism } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home", icon: "🏠" },
    { path: "AllVolunteer", name: "All Volunteers", icon: "👥" },
    { 
      path: "MyProfile", 
      name: "My Profile", 
      icon: "👤",
      dropdown: [
        { path: "AddVolunteer", name: "Add Volunteer", icon: <MdPostAdd className="text-lg" /> },
        { path: "MyPost", name: "My Posts", icon: <MdDashboard className="text-lg" /> }
      ]
    },
    { path: "MyVolunteerRequest", name: "My Requests", icon: "📋" }
  ];

  // Theme-based styles
  const navbarBg = theme === 'dark' 
    ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
    : 'bg-gradient-to-r from-[#1e3c72] to-[#2a5298]';

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-white';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-white/20';
  const activeClass = theme === 'dark' 
    ? 'bg-gray-700 text-white' 
    : 'bg-white text-[#1e3c72] font-semibold';

  const mobileMenuBg = theme === 'dark' 
    ? 'bg-gray-800 text-gray-200' 
    : 'bg-white text-gray-800';

  const dropdownBg = theme === 'dark'
    ? 'bg-gray-800 text-gray-200'
    : 'bg-white text-gray-800';

  const buttonStyle = theme === 'dark'
    ? 'bg-gray-700 hover:bg-gray-600 text-white'
    : 'bg-white/10 hover:bg-white/20 text-white';

  return (
    <div className={`sticky top-0 z-50 ${navbarBg} shadow-lg transition-colors duration-300`}>
      <div className={`navbar md:w-11/12 md:mx-auto ${textColor} py-2`}>
        {/* Left section with logo and mobile menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`btn btn-ghost lg:hidden ${textColor} ${hoverBg}`}
            >
              <GiHamburgerMenu className="text-2xl" />
            </button>
            
            {/* Mobile menu */}
            {isMenuOpen && (
              <ul className={`absolute left-0 top-16 w-64 ${mobileMenuBg} rounded-xl shadow-2xl p-3 z-50`}>
                {navLinks.map((link) => (
                  <li key={link.path} className="mb-1">
                    {link.dropdown ? (
                      <details className="group">
                        <summary className={`flex items-center gap-2 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} cursor-pointer`}>
                          <span className="text-xl">{link.icon}</span>
                          <span className="flex-1 font-medium">{link.name}</span>
                          <IoIosArrowDown className="group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="pl-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <li key={item.path}>
                              <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                  `flex items-center gap-2 p-2 rounded-lg transition-all ${
                                    isActive
                                      ? theme === 'dark' 
                                        ? "bg-gray-600 text-white"
                                        : "bg-blue-600 text-white"
                                      : theme === 'dark'
                                        ? "hover:bg-gray-700 text-gray-300"
                                        : "hover:bg-blue-50 text-gray-700"
                                  }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.icon}
                                <span>{item.name}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 p-3 rounded-lg transition-all ${
                            isActive
                              ? theme === 'dark'
                                ? "bg-gray-600 text-white"
                                : "bg-blue-600 text-white"
                              : theme === 'dark'
                                ? "hover:bg-gray-700 text-gray-300"
                                : "hover:bg-blue-50 text-gray-700"
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <img className="md:w-14 w-10 h-10 md:h-14 rounded-full border-2 border-white shadow-lg" src={logo} alt="Logo" />
              <div className="absolute -bottom-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-xl font-bold hidden sm:block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              VolunteerHub
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                {link.dropdown ? (
                  <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className={`flex items-center gap-1 px-4 py-2 rounded-lg ${textColor} ${hoverBg} transition-all cursor-pointer`}>
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                      <IoIosArrowDown className="group-hover:rotate-180 transition-transform" />
                    </label>
                    <ul tabIndex={0} className={`dropdown-content z-50 menu p-2 shadow-2xl ${dropdownBg} rounded-xl w-52 mt-2`}>
                      {link.dropdown.map((item) => (
                        <li key={item.path}>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                                isActive
                                  ? theme === 'dark'
                                    ? "bg-gray-600 text-white"
                                    : "bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white"
                                  : theme === 'dark'
                                    ? "text-gray-300 hover:bg-gray-700"
                                    : "text-gray-700 hover:bg-blue-50"
                              }`
                            }
                          >
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                        isActive
                          ? activeClass
                          : `${textColor} ${hoverBg}`
                      }`
                    }
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right section with user and theme toggle */}
        <div className="navbar-end gap-3">
          {/* Theme Toggle */}
          <button
            className={`btn btn-circle ${buttonStyle} border-none transition-all duration-300`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <FaSun className="text-xl text-yellow-400" />
            ) : (
              <FaMoon className="text-xl text-gray-700" />
            )}
          </button>

          {/* User section */}
          {user && user?.email ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div
                  data-tooltip-id="user-tooltip"
                  className="cursor-pointer"
                  data-tooltip-content={user?.displayName || "User"}
                >
                  <Tooltip id="user-tooltip" className="z-50" />
                  {user?.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white object-cover ring-2 ring-white/30 group-hover:ring-yellow-300 transition-all"
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                      alt="Profile"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-white" />
                  )}
                </div>
                
                {/* Quick user menu on hover */}
                <div className={`absolute right-0 top-12 w-48 ${dropdownBg} rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                  <div className={`p-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {user?.displayName || "User"}
                    </p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                      {user?.email}
                    </p>
                  </div>
                  <div className="p-2">
                    <Link 
                      to="/MyProfile" 
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-gray-700' 
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={logOut}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'text-red-400 hover:bg-gray-700'
                          : 'text-red-600 hover:bg-red-50'
                      }`}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>

              <Link
                to="/login"
                onClick={logOut}
                className={`btn font-semibold px-6 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-white text-[#1e3c72] hover:bg-yellow-400'
                }`}
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className={`btn font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-[#1e3c72] hover:from-yellow-500 hover:to-orange-500'
              }`}
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;