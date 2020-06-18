import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section
        className="section"
        style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
      >
        <div className="container">
          <h2 className="title">About</h2>
          <p>Keeping records of our expenses is a hard work.</p>
          <p>
            Also our receips, for everything, are in a continous treatening by
            the amount of space that they need and the probability of lossing
            them.
          </p>
          <p>
            But event worse how to detect trends in our buying habits or how to
            know the size of your budget still alive?
          </p>
          <p>
            Try the app, create a new user or use user: test password: test2020
          </p>
        </div>
      </section>
    </>
  );
}
