import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "./firebase.init";
import { useScrollTracker } from "react-scroll-tracker";

const Navbar = ({ handleThemeChange, theme }) => {
  const [user] = useAuthState(auth);
  const { scrollY: scrollYT } = useScrollTracker();

  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    setScrollY(window.scrollY);
  }, [scrollYT]);

  const logout = () => {
    signOut(auth);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-accent text-white rounded-xl"
              : "rounded-xl lg:mx-2 text-black"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-accent text-white rounded-xl"
              : "rounded-xl lg:mx-2 text-black"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-accent text-white rounded-xl"
              : "rounded-xl lg:mx-2 text-black"
          }
          to="/appointment"
        >
          Appointments
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-accent text-white rounded-xl"
              : "rounded-xl lg:mx-2 text-black"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-accent text-white rounded-xl"
              : "rounded-xl lg:mx-2 text-black"
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleThemeChange}
          className="rounded-xl lg:mx-2 font-bold text-black"
        >
          {theme ? <FaMoon /> : <FaSun />}
        </button>
      </li>
      <li>
        {user?.email ? (
          <button
            className="btn btn-ghost bg-accent font-bold text-white rounded-xl hover:border-solid hover:border-2 hover:border-accent"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-accent text-white rounded-xl"
                : "rounded-xl lg:mx-2 text-black"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <section className="flex justify-center mb-8">
      <div className="fixed top-0 w-full z-50">
        <input type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-content flex flex-col h-[64px] backdrop-blur-[18px] bg-gray-100/60  ${
            scrollY < 300 && "lg:bg-transparent"
          }`}
        >
          <div className="w-full navbar container  mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-ghost"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <CgMenuLeft className="text-2xl text-black"></CgMenuLeft>
              </label>
            </div>
            <div className="flex-1 px-0 mx-3">
              <p className="font-bold ml-10 md:ml-64 lg:text-left lg:w-auto w-full text-2xl text-black">
                Doctors Portal
              </p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-bold">{navItems}</ul>
            </div>
          </div>
        </div>
        <div
          className={`absolute duration-300 ease-linear ${
            menuOpen ? "left-0" : "left-[-100vh]"
          }`}
        >
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 font-bold h-screen  backdrop-blur-[18px] bg-gray-100/80">
            {navItems}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
