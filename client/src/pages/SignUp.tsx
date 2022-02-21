/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/sign-up.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../utils/config/index";
import { customAlert, failureSignUp, successfullSignUp } from "../utils/alerts";

const SignUp = function () {
  console.log(config.baseUrl);
  const [container, setContainer] = useState<string>("");
  const navigate = useNavigate();
  const [fullName, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    setContainer("right-panel-active");
  };
  const handleSignIn = () => {
    setContainer("");
  };

  const login = async () => {
    try {
      await axios.post(
        `${config.baseUrl}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return navigate("/");
    } catch (err: any) {
      if (!err.response || !err.response.data.error) return failureSignUp();
      const { error } = err.response.data;
      return customAlert(error, "error");
    }
  };

  const createUser = async () => {
    try {
      const firstName = fullName.split(" ")[0];
      const lastName = fullName.split(" ")[1];
      if (!firstName || !lastName)
        return customAlert("please enter valid full name", "error");
      if (password.length < 6)
        return customAlert("password too short", "error");
      await axios.post(
        `${config.baseUrl}/auth/sign-up`,
        {
          email,
          first_name: firstName,
          last_name: lastName,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleSignIn();
      return successfullSignUp();
    } catch (err: any) {
      if (!err.response || !err.response.data.error) return failureSignUp();
      const { error } = err.response.data;
      return customAlert(error, "error");
    }
  };
  return (
    <div className="sign-up">
      <div className={`container ${container}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href={`${config.baseUrl}/auth/github`}>
                <div className="social">
                  <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                </div>
              </a>
              <a href={`${config.baseUrl}/auth/google`}>
                <div className="social">
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    style={{ color: "crimson" }}
                  />
                </div>
              </a>
              <a href={`${config.baseUrl}/auth/linkedin`}>
                <div className="social">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "blue" }}
                  />
                </div>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="enter full name"
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={createUser}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href={`${config.baseUrl}/auth/github`}>
                <div className="social">
                  <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                </div>
              </a>
              <a href={`${config.baseUrl}/auth/google`}>
                <div className="social">
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    style={{ color: "crimson" }}
                  />
                </div>
              </a>
              <a href={`${config.baseUrl}/auth/linkedin`}>
                <div className="social">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "blue" }}
                  />
                </div>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>Forgot your password?</div>
            <button
              type="button"
              style={{ marginTop: "0.5rem" }}
              onClick={login}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                type="button"
                className="ghost"
                id="signIn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                type="button"
                className="ghost"
                id="signUp"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
