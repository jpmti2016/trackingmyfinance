import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ExpenseTable({ expenses, handleDeleteExpense, expenseType }) {
  let { url } = useRouteMatch();

  let btns = (expense) => {
    return (
      <div className="level">
        <div className="level-left" style={{ marginRight: "1rem" }}>
          <div className="level-item">
            <Link className="button is-small" to={{ pathname: `${url}/edit/${expense.id}`, state: { expense } }}>
              <i className="far fa-edit"></i>
            </Link>
          </div>
        </div>
        <div className="level-rigth">
          <div className="level-item">
            <button className="button is-small" onClick={() => handleDeleteExpense(expense.id, expense.__typename)}>
              <i className="far fa-trash-alt" ></i>
            </button>
          </div>
        </div>

      </div>
    );
  }

  const formatEvent = (event) => {
    switch (event) {
      case 'PHONERECHARGE':
        return 'Phone Recharge'
      case 'MONEYSENDED':
        return 'Money Sended';
      case 'PRESENT':
        return 'Present';
      case 'BIRTHDAY':
        return 'Birthday'
      case 'CHARITY':
        return 'Charity';
      case 'OTHER':
        return 'Other';
      default:
        return event;
    }
  }

  function TableRowExpense() {
    if (!expenses) return (<tr><th>Loading...</th></tr>);
    return expenses.map((expense, index) => {
      return (
        <tr key={expense.id}>
          <th>{index + 1}</th>
          {expenseType === 'Personal' && <td>{expense.category}</td>}
          <td>{expense.amount}</td>
          <td>{expense.dueDate}</td>
          {expenseType === 'Gyft' && <td>{formatEvent(expense.event)}</td>}
          {expenseType === 'Gyft' && <td>{expense.recipient.name}</td>}
          {expenseType === 'Gyft' && <td>{expense.title}</td>}
          <td>{expense.notes}</td>
          <td>{btns(expense)}</td>
        </tr>
      )
    })
  }

  return (
    <table className="table is-striped is-hoverable" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>#</th>
          {expenseType === 'Personal' && <th>Category</th>}
          <th>Amount</th>
          <th>Date</th>
          {expenseType === 'Gyft' && <th>Event</th>}
          {expenseType === 'Gyft' && <th>Recipient</th>}
          {expenseType === 'Gyft' && <th>Title</th>}
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {TableRowExpense()}
      </tbody>
    </table>
  );
}