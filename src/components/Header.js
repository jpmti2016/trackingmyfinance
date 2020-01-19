import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon2 from "../img/icon3-dark.svg";
import "./Header.css";

export default function Header({ user, handleSignOut }) {
  const [isActive, setIsActive] = useState(false);

  const message = user !== null ? `Wellcome, ${user.username}` : 'Sign in to check your money'

  function toggleNav() {
    setIsActive(!isActive);
  }
  return (
    <div
      id="navbar"
      className="bd-navbar navbar has-shadow is-spaced is-fixed-top "
      role="navigation"
      aria-label="main navigation"

    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            exact
            style={{ color: "#BAA949" }}
            onClick={toggleNav}
          >
            {/* <link rel="icon" href="icon2.ico" type="image/x-icon" />
             */}
            <img
              src={icon2}
              alt="Money Tracker Brand"
              className="is-size-6"
              style={{ marginRight: ".5rem" }}
            ></img>{" "}
            <span className="has-text-weight-bold">Money Tracker</span>
          </NavLink>

          <label
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleNav}
            data-target="navbarMenuHeroA"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </label>
        </div>
        <div
          id="navbarMenuHeroA"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
          onClick={toggleNav}
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/"
              exact
              style={{ color: "#BAA949" }}
            >
              Home
            </NavLink>

            {user && (
              <>
                <NavLink
                  className="navbar-item"
                  to="/expenses/personal"
                  exact
                  style={{ color: "#BAA949" }}
                >
                  Expenses
                  </NavLink>
              </>
            )}

            <NavLink
              className="navbar-item"
              to="/about"
              exact
              style={{ color: "#BAA949" }}
            >
              About
            </NavLink>
          </div>
          <div className="navbar-end">

            {(user === null) && (
              <>
                <span className="is-italic" style={{ color: "#BAA949" }}>{message}</span>

                <span className="navbar-item">
                  <NavLink
                    className="button cta login"
                    to="/signin"
                  >
                    {/* <span className="icon">
                  <i class="fas fa-sign-in-alt" />
                </span> */}
                    <span>Log In</span>
                  </NavLink>
                </span>
              </>
            )
            }

            {user && (
              <>
                <span className="is-italic" style={{ color: "#BAA949" }}>{message}</span>
                <span className="navbar-item">
                  <NavLink
                    className="button cta loggout"
                    to="/"
                    onClick={() => handleSignOut()}
                  >
                    {/* <span className="icon">
                      <i class="fas fa-sign-out-alt"></i>
                    </span> */}
                    <span>Log Out</span>
                  </NavLink>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
