import React from "react";
import { Switch, Route } from "react-router-dom";

import Amplify from "aws-amplify";
import config from "./aws-exports";

import UserContext from "./components/helpers/userContext";
import useAmplifyAuth from "./components/helpers/useAmplifyAuth";

import MySignIn from "./components/MySignIn";

import Expenses from "./components/Expenses/Expenses";
import ExpenseGyftForm from "./components/Expenses/Gyft/ExpenseGyftForm";
import ExpensePersonalForm from "./components/Expenses/Personal/ExpensePersonalForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import ExpensePartTable from "./components/Expenses/ExpensePartTable";

import ExpensePartForm from "./components/Expenses/Personal/ExpensePartForm";

const urlsIn = config.oauth.redirectSignIn.split(",");
const urlsOut = config.oauth.redirectSignOut.split(",");
const oauth = {
  domain: config.oauth.domain,
  scope: config.oauth.scope,
  redirectSignIn: config.oauth.redirectSignIn,
  redirectSignOut: config.oauth.redirectSignOut,
  responseType: config.oauth.responseType,
};
const hasLocalhost = (hostname) =>
  Boolean(
    hostname.match(/localhost/) ||
      hostname.match(/127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/)
  );
const hasHostname = (hostname) =>
  Boolean(hostname.includes(window.location.hostname));
const isLocalhost = hasLocalhost(window.location.hostname);
if (isLocalhost) {
  urlsIn.forEach((e) => {
    if (hasLocalhost(e)) {
      oauth.redirectSignIn = e;
    }
  });
  urlsOut.forEach((e) => {
    if (hasLocalhost(e)) {
      oauth.redirectSignOut = e;
    }
  });
} else {
  urlsIn.forEach((e) => {
    if (hasHostname(e)) {
      oauth.redirectSignIn = e;
    }
  });
  urlsOut.forEach((e) => {
    if (hasHostname(e)) {
      oauth.redirectSignOut = e;
    }
  });
}
const configUpdate = config;
configUpdate.oauth = oauth;
Amplify.configure(configUpdate);

function App() {
  const {
    state: { user },
    handleSignOut,
  } = useAmplifyAuth();

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <Header
          className="has-navbar-fixed-top"
          user={user}
          handleSignOut={handleSignOut}
        />
        <Switch>
          <Route
            path="/expenses/personal/:expense/expensepart/edit/:part"
            component={ExpensePartForm}
          />
          <Route
            path="/expenses/personal/:expense/expensepart/add"
            component={ExpensePartForm}
          />
          <Route
            path="/expenses/personal/:id/expensepart"
            component={ExpensePartTable}
          />

          <Route path="/expenses/gyft/edit/:id" component={ExpenseGyftForm} />
          <Route
            path="/expenses/personal/edit/:id"
            component={ExpensePersonalForm}
          />
          <Route
            path="/expenses/personal/add"
            component={ExpensePersonalForm}
          />
          <Route path="/expenses/gyft/add" component={ExpenseGyftForm} />
          {/* <Route path="/expenses/gyft/:id/:child" component={ExpenseGyftForm} /> */}

          <Route path="/expenses" component={Expenses} user={user} />

          <Route path="/about" component={About} exact />
          <Route path="/signin" component={MySignIn} exact />
          <Route path="/" component={Dashboard} exact />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
