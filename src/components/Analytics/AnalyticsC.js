import React from "react";

export default function AnaliticsC({
  handleAnalyticsClick,
  analyticsEventSent,
  resultHtml
}) {
  return (
    <section
      className="section"
      style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
    >
      <button onClick={handleAnalyticsClick} className="button">
        Analytics Event
      </button>
      {analyticsEventSent}
      <div>{resultHtml}</div>
    </section>
  );
}
