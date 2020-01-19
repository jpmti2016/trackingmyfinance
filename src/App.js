import React from "react";
import { Switch, Route, } from "react-router-dom";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import UserContext from "./components/helpers/userContext";
import useAmplifyAuth from './components/helpers/useAmplifyAuth'

import MySignIn from './components/MySignIn'

import Expenses from "./components/Expenses/Expenses";
import ExpenseGyftForm from './components/Expenses/Gyft/ExpenseGyftForm';
import ExpensePersonalForm from "./components/Expenses/Personal/ExpensePersonalForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";


Amplify.configure(awsconfig);

// Send analytics events to Amazon Pinpoint
// Auth.configure(awsconfig)
// Analytics.configure(awsconfig);

function App() {

  const { state: { user }, handleSignOut } = useAmplifyAuth();

  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <Header className="has-navbar-fixed-top" user={user} handleSignOut={handleSignOut} />
        <Switch>
          <Route path="/" component={Dashboard} exact />

          <Route path="/expenses/personal/add" component={ExpensePersonalForm} />
          <Route path="/expenses/gyft/add" component={ExpenseGyftForm} />
          <Route path="/expenses/gyft/edit/:id" component={ExpenseGyftForm} />


          <Route path="/expenses" component={Expenses} user={user} />

          <Route path="/about" component={About} exact />
          <Route path="/signin" component={MySignIn} exact />
        </Switch>
        <Footer />
      </UserContext.Provider>

    </div>
  );
}

export default App;
