import React from "react";

export default function About() {
  return (
    <>
      <section
        className="section"
        style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
      >
        <div className="container">
          <h1 className="title">We help you take smart money desitions</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
    </>
  );
}
