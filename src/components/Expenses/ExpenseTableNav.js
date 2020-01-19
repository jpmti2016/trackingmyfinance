import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ExpenseTableNav({ clientId }) {
  const { url } = useRouteMatch();

  // let sectionUrl = url.substr(10);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "end"
        }}
      >
        <div className="field has-addons" style={{ marginRight: "1rem" }}>
          <p className="control has-icons-right">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </p>
          <Link className="control" to={`${url}/search`}>
            <button className="button">Search</button>
          </Link>
        </div>

        <Link className="button is-outlined" to={{ pathname: `${url}/add`, state: { clientId } }}>
          <span className="icon">
            <i className="far fa-plus-square"></i>
          </span>
          <span>Add Expense</span>
        </Link>
      </div>
      <nav
        className="pagination"
        role="navigation"
        aria-label="pagination"
      ></nav>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          <li>
            <span className="pagination-link">1</span>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <span className="pagination-link">7</span>
          </li>
          <li>
            <span className="pagination-link is-current">8</span>
          </li>
          <li>
            <span className="pagination-link">9</span>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <span className="pagination-link">15</span>
          </li>
        </ul>
        <Link className="pagination-previous" to={`${url}/prev`}>
          <i
            className="fas fa-caret-left"
            style={{ marginRight: "0.2rem" }}
          ></i>
          Prev
        </Link>
        <Link className="pagination-next" to={`${url}/next`}>
          Next{" "}
          <i
            className="fas fa-caret-right "
            style={{ marginLeft: ".2rem" }}
          ></i>
        </Link>
      </nav>
    </>
  );
}
