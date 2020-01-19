import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";

import { API, graphqlOperation } from "aws-amplify";

import Gyft from "./Gyft/Gyft";
import Personal from "./Personal/Personal";
import useAmplifyAuth from '../helpers/useAmplifyAuth';
import { listClients } from '../../graphql/queries';
import { createClient } from '../../graphql/mutations';

async function initializeClient(user, setClientL) {
  try {
    if (user) {
      const rdata = await API.graphql(graphqlOperation(listClients, { limit: 2, filter: { username: { eq: user.username } } }));
      const { data: { listClients: { items } } } = rdata;
      const client = items[0]; //filter username === user.username

      if (client === null) {
        console.log('no client')
        const new_Client = {
          username: user.username
        };

        const result = await API.graphql(graphqlOperation(createClient, { input: new_Client }));
        setClientL(result && result.data.createClient);
      } else {
        setClientL(client);
      }
    }
  } catch (e) {
    console.error("Initialize client", e)
  }
}

export default function Expenses(props) {
  const [clientL, setClientL] = useState(null);

  let { path, url } = useRouteMatch();
  const location = useLocation();

  const { state: { user } } = useAmplifyAuth();

  useEffect(() => {
    initializeClient(user, setClientL)
  }, [user])

  return (
    <>
      <section
        className="section"
        style={{
          paddingTop: "8rem",
          paddingBottom: "0.1rem",
          color: "#363636"
        }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title" style={{ color: "#363636" }}>
                  Expenses
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="tabs is-boxed">
            <ul>
              <li
                className={
                  location.pathname === `${url}/personal` ? "is-active" : ""
                }
              >
                <Link to={`${url}/personal`}>
                  <span className="icon is-small">
                    <i className="far fa-caret-square-down"></i>
                  </span>
                  <span>Personal</span>
                </Link>
              </li>
              <li
                className={
                  location.pathname === `${url}/gyft` ? "is-active" : ""
                }
              >
                <Link to={`${url}/gyft`}>
                  <span className="icon is-small">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                  <span>Gyft</span>
                </Link>
              </li>
            </ul>
          </div>

          <Route path={`${path}/personal`} render={(props) => <Personal {...props} client={clientL} />} />
          {/* <Route path={`${path}/gyft`} component={Gyft} /> */}
          <Route path={`${path}/gyft`} render={(props) => <Gyft {...props} client={clientL} />} />
        </div>
      </section>
    </>
  );
}
