/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import TemporaryDrawer from "../sideBar/SideBar";
import logo from "../../assests/images/logo.png";
import { setIsOnQuiz } from "../../state/quiz/quiz-actions";
import "./nav-bar.scss";

const NavBar = function () {
  const [sideBar, setSideBar] = useState(false);
  const displayBars = useRef(null);
  const { isOnQuiz } = useSelector((state: Quiz) => state);
  const dispatch = useDispatch();

  const leaveRouter = (e: Event) => {
    if (isOnQuiz) {
      const x = confirm("fuck off?").valueOf();
      x ? dispatch(setIsOnQuiz(false)) : e.preventDefault();
    }
  };

  return (
    <div className="navBar">
      <nav>
        <NavLink
          className="navLink"
          to="/"
          onClick={(e) => leaveRouter(e as unknown as Event)}
        >
          <img src={logo} alt="page logo" className="logo" />
        </NavLink>
        <div ref={displayBars}>
          <FaBars className="bars" onClick={() => setSideBar(true)} />
        </div>
        {sideBar ? (
          <TemporaryDrawer closeSideBar={() => setSideBar(false)} />
        ) : (
          <div className="navMenu">
            <NavLink
              to="/about"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event)}
            >
              Contact-us
            </NavLink>
            <NavLink
              to="/services"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event)}
            >
              Services
            </NavLink>
            <NavLink
              to="/sign-up"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event)}
            >
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
