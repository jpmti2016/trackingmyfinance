import React from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

export default function ExpensePartForm(props) {
  return (
    <div>
      <h1>Expense Part Form</h1>
      {props.location.pathname}
      {console.log("link", props.location.state)}
    </div>
  );
}
