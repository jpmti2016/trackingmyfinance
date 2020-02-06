import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ExpenseTable({
  expenses,
  handleDeleteExpense,
  expenseType
}) {
  let { url } = useRouteMatch();

  let btns = expense => {
    return (
      <div className="level">
        <div className="level-left" style={{ marginRight: "1rem" }}>
          <div className="level-item">
            <Link
              className="button is-small"
              to={{ pathname: `${url}/edit/${expense.id}`, state: { expense } }}
            >
              <i className="far fa-edit"></i>
            </Link>
          </div>
        </div>
        <div className="level-rigth">
          <div className="level-item">
            <button
              className="button is-small"
              onClick={() =>
                handleDeleteExpense(expense.id, expense.__typename)
              }
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const formatEvent = event => {
    switch (event) {
      case "PHONERECHARGE":
        return "Phone Recharge";
      case "MONEYSENDED":
        return "Money Sended";
      case "PRESENT":
        return "Present";
      case "BIRTHDAY":
        return "Birthday";
      case "CHARITY":
        return "Charity";
      case "OTHER":
        return "Other";
      default:
        return event;
    }
  };

  const formatTitleAndNotes = expense => {
    if (expense) {
      switch (expense.__typename) {
        case "HousingExpense":
          if (expense.nature === "UTILITY" && expense.utility) {
            return {
              title: expense.utility.title,
              notes: expense.utility.notes
            };
          } else if (expense.nature === "SUPPLY" && expense.supply) {
            return {
              title: expense.supply.title,
              notes: expense.supply.notes
            };
          } else if (expense.nature === "REPAIR" && expense.repair) {
            return {
              title: expense.repair.title,
              notes: expense.repair.notes
            };
          } else if (expense.nature === "HOME" && expense.home) {
            return {
              title: expense.home.title,
              notes: expense.home.notes
            };
          } else if (expense.nature === "OTHER" && expense.otherHousing) {
            return {
              title: expense.otherHousing.title,
              notes: expense.otherHousing.notes
            };
          } else {
            return { title: "NA", notes: "NA" };
          }

        case "PhoneExpense":
          if (expense.phonePlan === "PLAN" && expense.plan) {
            return {
              title: expense.plan.title,
              notes: expense.plan.notes
            };
          } else if (expense.phonePlan === "ADITIONAL" && expense.aditional) {
            return {
              title: expense.aditional.title,
              notes: expense.aditional.notes
            };
          } else {
            return { title: "NA", notes: "NA" };
          }

        case "FoodExpense":
          if (expense.nature === "GROCERY" && expense.grocery) {
            return {
              title: expense.grocery.title,
              notes: expense.grocery.notes
            };
          } else if (expense.nature === "DINNINGOUT" && expense.dinningOut) {
            return {
              title: expense.dinningOut.title,
              notes: expense.dinningOut.notes
            };
          } else {
            return { title: "NA", notes: "NA" };
          }
        case "EducationExpense":
          if (expense.nature === "COLLEGE" && expense.college) {
            return {
              title: expense.college.title,
              notes: expense.college.notes
            };
          } else if (expense.nature === "ONLINECURSE" && expense.onlineCourse) {
            return {
              title: expense.onlineCourse.title,
              notes: expense.onlineCourse.notes
            };
          } else if (
            expense.nature === "COMUNITYCOLLEGE" &&
            expense.communityCollege
          ) {
            return {
              title: expense.communityCollege.title,
              notes: expense.communityCollege.notes
            };
          } else if (expense.nature === "TRAINING" && expense.training) {
            return {
              title: expense.training.title,
              notes: expense.training.notes
            };
          } else if (expense.nature === "BOOTCAMP" && expense.bootcamp) {
            return {
              title: expense.bootcamp.title,
              notes: expense.bootcamp.notes
            };
          } else {
            return { title: "NA", notes: "NA" };
          }
        case "InsuranceExpense":
        case "LegalExpense":
        case "CommuteExpense":
        case "PersonalCareExpense":
        case "PetExpense":
        case "EntertainmentExpense":
        case "LoanExpense":
        case "TaxExpense":
        case "InvestmentExpense":
        case "GyftExpense":
          return {
            title: expense.title ? expense.title : "",
            notes: expense.notes ? expense.title : ""
          };

        default:
          break;
      }
    }
  };

  function TableRowExpense() {
    if (!expenses)
      return (
        <tr>
          <th>Loading...</th>
        </tr>
      );
    return expenses.map((expense, index) => {
      return (
        <tr key={expense.id}>
          <th>{index + 1}</th>
          {expenseType === "Personal" && <td>{expense.category}</td>}
          <td>{expense.amount}</td>
          <td>{expense.dueDate}</td>
          {expenseType === "Gyft" && <td>{formatEvent(expense.event)}</td>}
          {expenseType === "Gyft" && <td>{expense.recipient.name}</td>}
          <td>{expense && formatTitleAndNotes(expense).title}</td>
          <td>{expense && formatTitleAndNotes(expense)["notes"]}</td>
          <td>{btns(expense)}</td>
        </tr>
      );
    });
  }

  return (
    <table className="table is-striped is-hoverable" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>#</th>
          {expenseType === "Personal" && <th>Category</th>}
          <th>Amount</th>
          <th>Date</th>
          {expenseType === "Gyft" && <th>Event</th>}
          {expenseType === "Gyft" && <th>Recipient</th>}
          <th>Title</th>
          <th>Notes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{TableRowExpense()}</tbody>
    </table>
  );
}
