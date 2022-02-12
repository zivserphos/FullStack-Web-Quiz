/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faGooglePlusG,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/contact.scss";
import {
  faPhone,
  faMap,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = function () {
  return (
    <section className="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form role="form" id="contact-form" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows={10}
            placeholder="MESSAGE"
            name="message"
            required
          />

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />

              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faMap} size="lg" />
              <span className="contact-text place">Tel-Aviv, Israel</span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <span className="contact-text phone">(+972) 50-2555802</span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="contact-text gmail">
                zivfromisrael@gmail.com
              </span>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <FontAwesomeIcon
                icon={faGooglePlusG}
                style={{ color: "crimson" }}
              />
            </li>
            <a href="https://github.com/zivserphos">
              <li>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "deeppink" }}
                />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/ziv-serphos">
              <li>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} />
              </li>
            </a>
          </ul>
          <hr />

          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
      <div />
    </section>
  );
};

export default ContactUs;
