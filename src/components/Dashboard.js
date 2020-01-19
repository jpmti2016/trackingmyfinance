import React from "react";
import phoner from "../img/phone-recharge.jpeg";
import ding from "../img/ding_logo_blue.c75c8049.svg";
import wu from "../img/wu2.png";
import money from "../img/send-money.jpeg";
import presentlogo from "../img/gyft-logo.jpeg";
import present from "../img/gyft2.jpeg";

import flower from "../img/IMG_20191020_132426.jpg";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <section className="hero is-large hero-image">
        <div className="hero-body">
          <div className="container">
            <h1
              className="title is-family-primary has-text-white-ter"
              style={{ fontSize: "4rem" }}
            //color: "rgb(139, 126, 133)",
            >
              Enjoy your money
            </h1>
            <h2
              className="subtitle is-family-code is-italic has-text-white-ter"
              style={{ fontSize: "3rem" }}
            //color: "rgb(139, 126, 133)",
            >
              but keep a check on it
            </h2>
          </div>
        </div>
      </section>
      {/* <section
        className="section has-text-light"
        // style={{ backgroundColor: "#3e9c35" }}
      >
        <div className="container ">
          <h1 className="title" style={{ color: "#3e9c35" }}>
            Section
          </h1>
          <h2 className="subtitle " style={{ color: "#3e9c35" }}>
            A simple container to divide your page into{" "}
            <strong style={{ color: "#3e9c35" }}>sections</strong>, like the one
            you're currently reading
          </h2>

          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={image} alt="color pallete" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p style={{ color: "#3e9c35" }}>
                  <strong style={{ color: "#3e9c35" }}>Color Pallete</strong>{" "}
                  <small>@https://www.color-hex.com/color-palette/22365</small>{" "}
                  <br />
                  USD Dollar Color Pallete
                </p>
              </div>
            </div>
          </article>

          <ul>
            <li
              className="has-text-light"
              style={{ backgroundColor: "#3e9c35" }}
            >
              #3e9c35 (62,156,53)
            </li>
            <li
              className="has-text-light"
              style={{ backgroundColor: "#168118" }}
            >
              #168118 (22,129,24)
            </li>
            <li
              className="has-text-light"
              style={{ backgroundColor: "#157811" }}
            >
              #157811 (21,120,17)
            </li>
            <li
              className="has-text-light"
              style={{ backgroundColor: "#036704" }}
            >
              #036704 (3,103,4)
            </li>
            <li
              className="has-text-light"
              style={{ backgroundColor: "#084f09" }}
            >
              #084f09 (8,79,9)
            </li>
          </ul>
        </div>
      </section> */}
      <section
        className="section"
        style={{ paddingTop: "6rem", paddingBottom: "9rem" }}
      >
        <nav className="level">
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "#BAA949" }}>
                Change Job Budget
              </p>
              <p className="title" style={{ color: "#BAA949" }}>
                7500
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "#BAA949" }}>
                Year to Date
              </p>
              <p className="title" style={{ color: "#BAA949" }}>
                5000
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "#BAA949" }}>
                Month to Date
              </p>
              <p className="title" style={{ color: "#BAA949" }}>
                740
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="fancy-effect">
              <p className="heading" style={{ color: "#BAA949" }}>
                Today
              </p>
              <p className="title" style={{ color: "#BAA949" }}>
                60
              </p>
            </div>
          </div>
        </nav>
      </section>
      <section
        className="section"
        style={{
          backgroundImage: `url(${flower})`,
          backgroundColor: "transparent"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column">
              <div
                className="card fancy-effect"
                style={{ border: "1px solid hsl(328° 5% 52%)" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={phoner} alt="Phone Recharge" />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{
                    borderTop: "1px solid hsl(328° 5% 52%)",
                    color: "#363636"
                  }}
                >
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={ding} alt="Ding" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Phone Refill</p>
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
            <div className="column">
              <div
                className="card fancy-effect"
                style={{ border: "1px solid hsl(328° 5% 52%)" }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={money} alt="Money Sended" />
                  </figure>
                </div>
                <div
                  className="card-content"
                  style={{ borderTop: "1px solid hsl(328° 5% 52%)" }}
                >
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={wu} alt="Westernunion logo" />
                      </figure>
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
                      <figure className="image is-48x48">
                        <img src={presentlogo} alt="Present Logo" />
                      </figure>
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
              style={{ backgroundColor: "#BAA949", color: "#8B7E85" }}
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
