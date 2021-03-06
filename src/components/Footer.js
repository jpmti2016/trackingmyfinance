import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="nav-footer">
          <NavLink className="navbar-item" to="/about" exact>
            About
          </NavLink>
          <a
            href="https://www.freeprivacypolicy.com/privacy/view/ef554d2217496393f6fca51d46de5b6f"
            className="navbar-item"
          >
            Privacy Policy
          </a>
          <a href="mailto:jpmti2016" className="navbar-item">
            Contact
          </a>
        </div>
        <div className="tools has-text-centered">
          <p>
            Created with{" "}
            <span className="bd-footer-link-icon has-text-danger">
              <svg
                className="svg-inline--fa fa-heart fa-w-16"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="heart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                ></path>
              </svg>
            </span>{" "}
            by jpmti2016
          </p>
          <p>
            Used
            <strong> Bulma</strong>, <strong>React</strong> and{" "}
            <strong>AWS Amplify</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
