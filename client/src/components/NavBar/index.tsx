/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "../../utils/alerts";
import TemporaryDrawer from "../sideBar/SideBar";
import logo from "../../assests/images/logo.png";
import { setIsOnQuiz } from "../../state/quiz/quiz-actions";
import "./nav-bar.scss";

const NavBar = function () {
  const [sideBar, setSideBar] = useState(false);
  const displayBars = useRef(null);
  const { isOnQuiz } = useSelector((state: Quiz) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const leaveRouter = async (e: Event, link: string) => {
    if (isOnQuiz) {
      e.preventDefault();
      const confirm = await confirmAlert();
      if (confirm) {
        dispatch(setIsOnQuiz(false));
        navigate(link);
      }
    }
  };

  useEffect(() => {
    console.log("is on quiz use effecct");
  }, [isOnQuiz]);

  return (
    <div className="navBar">
      <nav>
        <NavLink
          className="navLink"
          to="/"
          onClick={(e) => leaveRouter(e as unknown as Event, "/")}
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
              onClick={(e) => leaveRouter(e as unknown as Event, "/about")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event, "/contact-us")}
            >
              Contact-us
            </NavLink>
            <NavLink
              to="/services"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event, "/services")}
            >
              Services
            </NavLink>
            <NavLink
              to="/sign-up"
              className="navLink"
              onClick={(e) => leaveRouter(e as unknown as Event, "/sign-up")}
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
