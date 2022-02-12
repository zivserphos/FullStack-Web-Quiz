/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import TemporaryDrawer from "../sideBar/SideBar";
import logo from "../../assests/images/logo.png";
import "./nav-bar.scss";

const NavBar = function () {
  const [sideBar, setSideBar] = useState(false);
  const displayBars = useRef(null);

  return (
    <div className="navBar">
      <nav>
        <NavLink className="navLink" to="/">
          <img src={logo} alt="page logo" className="logo" />
        </NavLink>
        <div ref={displayBars}>
          <FaBars className="bars" onClick={() => setSideBar(true)} />
        </div>
        {sideBar ? (
          <TemporaryDrawer />
        ) : (
          <div className="navMenu">
            <NavLink to="/about" className="navLink">
              About
            </NavLink>
            <NavLink to="/contact-us" className="navLink">
              Contact-us
            </NavLink>
            <NavLink to="/services" className="navLink">
              Services
            </NavLink>
            <NavLink to="/sign-up" className="navLink">
              Sign Up
            </NavLink>
          </div>
        )}
      </nav>
      <div />
    </div>
  );
};

export default NavBar;
