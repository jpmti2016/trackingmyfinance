import React, { useContext } from "react";
import present from "../img/undraw_gift_box_byy3.svg";
import moneySended from "../img/undraw_transfer_money_rywa.svg";
import phoneRecharge from "../img/undraw_mobile_pay_9abj.svg";
import finance from "../img/undraw_finance_0bdk.svg";

import UserContext from "../components/helpers/userContext";

import { NavLink } from "react-router-dom";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="bgc-hero-title">
              <h1
                className="title is-family-primary"

                // color: "rgb(139, 126, 133)",
              >
                Enjoy your money
              </h1>
              <h2
                className="title is-family-code is-italic"

                //color: "rgb(139, 126, 133)",
                // ;;lkk
              >
                but keep track of it
              </h2>
              {user === null && (
                <span className="navbar-item">
                  <NavLink className="btn-start-now cta login" to="/signin">
                    <span>Start Now</span>
                  </NavLink>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container move-up">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={finance} alt="Money Sended" />
            </figure>
          </div>
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "rgba(103,88,3,1)" }}>
                Change Job Budget
              </p>
              <p className="title" style={{ color: "rgba(103,88,3,1)" }}>
                7500
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "rgba(103,88,3,1)" }}>
                Year to Date
              </p>
              <p className="title" style={{ color: "rgba(103,88,3,1)" }}>
                5000
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "rgba(103,88,3,1)" }}>
                Month to Date
              </p>
              <p className="title" style={{ color: "rgba(103,88,3,1)" }}>
                740
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "rgba(103,88,3,1)" }}>
                Today
              </p>
              <p className="title" style={{ color: "rgba(103,88,3,1)" }}>
                60
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section background-pattern">
        <div className="container"></div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div
                className="card fancy-effect"
                style={{ border: "1px solid hsl(328° 5% 52%)" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={phoneRecharge} alt="Phone Recharge" />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{
                    borderTop: "1px solid hsl(328° 5% 52%)",
                    color: "#363636",
                  }}
                >
                  <div className="media">
                    <div className="media-left">
                      <span className="icon title is-4">
                        <i className="fas fa-phone-square" />
                      </span>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Phone Refill</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. @bulmaio
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card fancy-effect"
                style={{ border: "1px solid hsl(328° 5% 52%)" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={moneySended} alt="Money Sended" />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{ borderTop: "1px solid hsl(328° 5% 52%)" }}
                >
                  <div className="media">
                    <div className="media-left">
                      <span className="icon title is-4">
                        <i className="fas fa-funnel-dollar" />
                      </span>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Money Send</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. @bulmaio.
                    {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                className="card fancy-effect"
                style={{ border: "1px solid hsl(328° 5% 52%)" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={present} alt="Present" />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{ borderTop: "1px solid hsl(328° 5% 52%)" }}
                >
                  <div className="media">
                    <div className="media-left">
                      <span className="icon title is-4">
                        <i className="fas fa-gift" />
                      </span>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Present</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. @bulmaio
                    {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div
              className="tile is-child notification"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon">
                      <i className="fas is-large fa-6x fa-home" />
                    </span>

                    <p className="title">Housing</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon ">
                      <i className="fas is-large fa-6x fa-star-of-life" />
                    </span>

                    <p className="title">Insurance</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon ">
                      <i className="fas is-large fa-6x fa-balance-scale" />
                    </span>

                    <p className="title">Legal</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon ">
                      <i className="fas is-large fa-6x fa-paw" />
                    </span>

                    <p className="title">Pet</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon">
                      <i className="fas is-large fa-6x fa-phone" />
                    </span>

                    <p className="title">Phone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent is-vertical">
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon">
                      <i className="fas is-large fa-6x fa-shopping-basket" />
                    </span>

                    <p className="title">Grocery</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon is-1">
                      <i className="fas is-large fa-6x fa-car" />
                    </span>

                    <p className="title">Commute</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon ">
                      <i className="fas is-large fa-6x fa-swimmer" />
                    </span>

                    <p className="title">Personal Care</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon is-1">
                      <i className="fas is-large fa-6x fa-film" />
                    </span>

                    <p className="title">Entertainment</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tile is-child notification is-primary"
              style={{ backgroundColor: "rgba(103,88,3,1)", color: "#8B7E85" }}
            >
              <div className="level">
                <div
                  className="level-item has-text-centered"
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <div className="heading is-large">
                    <span className="icon is-1">
                      <i className="fas is-large fa-6x fa-university" />
                    </span>

                    <p className="title">Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
