import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import dayjs from "dayjs";

export default function ExpenseTable({
  expenses,
  handleDeleteExpense,
  expenseType,
}) {
  let { url } = useRouteMatch();

  const btns = (expense) => {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <div className="level-left" style={{ marginRight: "1rem" }}> */}

        <div className="level-item">
          <Link
            className="label is-small"
            to={{
              pathname: `${url}/${expense.id}/expensepart`,
              state: {
                id: expense.id,
                __typename: expense.__typename,
                nature: expense.nature,
              },
            }}
          >
            {formatNestedChild(expense) ? formatNestedChild(expense).text : ""}{" "}
            <i
              className={
                formatNestedChild(expense)
                  ? formatNestedChild(expense).iname
                  : ""
              }
            ></i>{" "}
            {/* <i className="fas fa-angle-right"></i> */}
          </Link>
        </div>

        <div className="level-item" style={{ margin: "0 1rem" }}>
          <Link
            // className="button is-small"
            className="button is-small"
            to={{ pathname: `${url}/edit/${expense.id}`, state: { expense } }}
          >
            <i className="far fa-edit"></i>
          </Link>
        </div>

        <div className="level-item">
          <button
            className="button is-small"
            onClick={() => handleDeleteExpense(expense.id, expense.__typename)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  };

  const formatNestedChild = (expense) => {
    if (expense) {
      const nature = expense.nature;
      switch (expense.__typename) {
        case "InsuranceExpense":
          if (
            nature === "HOME" ||
            nature === "CAR" ||
            nature === "LIFE" ||
            nature === "DISABILITY" ||
            nature === "OTHER"
          ) {
            // return { iname: "fas fa-users", text: "Donees" };
            return {
              iname: "fas fa-angle-right",
              text: "Beneficiaries",
              subpath: "beneficiaries",
            };
          } else {
            return "";
          }
        case "LegalExpense":
          // return { iname: "fas fa-balance-scale", text: "Lawyers" };
          return {
            iname: "fas fa-angle-right",
            text: "Lawyers",
            subpath: "lawyers",
          };
        case "FoodExpense":
          if (nature === "GROCERY") {
            return {
              iname: "fas fa-angle-right",
              text: "Products",
              subpath: "products",
            };
          } else {
            return "";
          }
        case "EducationExpense":
          if (nature === "COLLEGE" || nature === "COMMUNITYCOLLEGE") {
            // return { iname: "fas fa-dollar-sign", text: "Fees" };
            return {
              iname: "fas fa-angle-right",
              text: "Fees",
              subpath: "fees",
            };
          } else if (nature === "ONLINECOURSE") {
            // return { iname: "fas fa-chalkboard-teacher", text: "Instructors" };
            return {
              iname: "fas fa-angle-right",
              text: "Instructors",
              subpath: "instructors",
            };
          } else {
            return "";
          }

        default:
          return "";
      }
    }
  };

  const formatEvent = (event) => {
    switch (event) {
      case "PHONERECHARGE":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-phone-square" />
          </span>
        );
      case "MONEYSENDED":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-funnel-dollar" />
          </span>
        );
      case "PRESENT":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-gift" />
          </span>
        );
      case "BIRTHDAY":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-birthday-cake" />
          </span>
        );
      case "CHARITY":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-hand-holding-heart" />
          </span>
        );
      case "OTHER":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-question-circle" />
          </span>
        );
      default:
        return event;
    }
  };

  const formatTitleAndNotes = (expense) => {
    if (expense) {
      switch (expense.__typename) {
        case "HousingExpense":
          if (expense.nature === "UTILITY" && expense.utility) {
            return {
              title: expense.utility.title,
              notes: expense.utility.notes,
            };
          } else if (expense.nature === "SUPPLY" && expense.supply) {
            return {
              title: expense.supply.title,
              notes: expense.supply.notes,
            };
          } else if (expense.nature === "REPAIR" && expense.repair) {
            return {
              title: expense.repair.title,
              notes: expense.repair.notes,
            };
          } else if (expense.nature === "HOME" && expense.home) {
            return {
              title: expense.home.title,
              notes: expense.home.notes,
            };
          } else if (expense.nature === "OTHER" && expense.otherHousing) {
            return {
              title: expense.otherHousing.title,
              notes: expense.otherHousing.notes,
            };
          } else {
            return { title: "NA", notes: "NA" };
          }

        case "PhoneExpense":
          if (expense.phonePlan === "PLAN" && expense.plan) {
            return {
              title: expense.plan.title,
              notes: expense.plan.notes,
            };
          } else if (expense.phonePlan === "ADDITIONAL" && expense.additional) {
            return {
              title: expense.additional.title,
              notes: expense.additional.notes,
            };
          } else {
            return { title: "NA", notes: "NA" };
          }

        case "FoodExpense":
          if (expense.nature === "GROCERY" && expense.grocery) {
            return {
              title: expense.grocery.title,
              notes: expense.grocery.notes,
            };
          } else if (expense.nature === "DINNINGOUT" && expense.dinningOut) {
            return {
              title: expense.dinningOut.title,
              notes: expense.dinningOut.notes,
            };
          } else {
            return { title: "NA", notes: "NA" };
          }
        case "EducationExpense":
          if (expense.nature === "COLLEGE" && expense.college) {
            return {
              title: expense.college.title,
              notes: expense.college.notes,
            };
          } else if (
            expense.nature === "ONLINECOURSE" &&
            expense.onlineCourse
          ) {
            return {
              title: expense.onlineCourse.title,
              notes: expense.onlineCourse.notes,
            };
          } else if (
            expense.nature === "COMMUNITYCOLLEGE" &&
            expense.communityCollege
          ) {
            return {
              title: expense.communityCollege.title,
              notes: expense.communityCollege.notes,
            };
          } else if (expense.nature === "TRAINING" && expense.training) {
            return {
              title: expense.training.title,
              notes: expense.training.notes,
            };
          } else if (expense.nature === "BOOTCAMP" && expense.bootcamp) {
            return {
              title: expense.bootcamp.title,
              notes: expense.bootcamp.notes,
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
            notes: expense.notes ? expense.notes : "",
          };

        default:
          break;
      }
    }
  };

  const categoryIcon = (category) => {
    switch (category) {
      case "HOUSING":
        return (
          <span className="icon" fontSize="1rem">
            <i className="fas is-large fa-w18 fa-home" />
          </span>
        );

      case "INSURANCE":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-star-of-life" />
          </span>
        );

      case "LEGAL":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-balance-scale" />
          </span>
        );

      case "PET":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-paw" />
          </span>
        );

      case "PHONE":
        return (
          <span className="icon">
            <i className="fas is-large fa-w18 fa-phone" />
          </span>
        );

      case "FOOD":
        return (
          <span className="icon">
            <i className="fas is-large fa-w18 fa-shopping-basket" />
          </span>
        );

      case "PERSONALCARE":
        return (
          <span className="icon ">
            <i className="fas is-large fa-w18 fa-swimmer" />
          </span>
        );

      case "COMMUTE":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-car" />
          </span>
        );

      case "ENTERTAINMENT":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-film" />
          </span>
        );

      case "EDUCATION":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-university" />
          </span>
        );
      case "LOAN":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-money-check-alt" />
          </span>
        );
      case "TAXES":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-search-dollar" />
          </span>
        );
      case "INVESTMENT":
        return (
          <span className="icon is-1">
            <i className="fas is-large fa-w18 fa-piggy-bank" />
          </span>
        );

      default:
        return "NA";
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
          {expenseType === "Personal" && (
            <td>{categoryIcon(expense.category)}</td>
          )}

          {expenseType === "Gyft" && <td>{formatEvent(expense.event)}</td>}
          <td>${expense.amount}</td>
          <td>{dayjs(expense.dueDate).format("MMM. DD, YYYY")}</td>
          {expenseType === "Gyft" && <td>{expense.recipient.name}</td>}
          <td>{expense && formatTitleAndNotes(expense).title}</td>
          <td>{expense && formatTitleAndNotes(expense)["notes"]}</td>
          <td>{btns(expense)}</td>
        </tr>
      );
    });
  }

  return (
    <div className="table-container">
      <table
        className="table is-striped is-hoverable tablet stackable"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            {expenseType === "Personal" && <th></th>}
            {expenseType === "Gyft" && <th></th>}
            <th>Amount</th>
            <th>Date</th>
            {expenseType === "Gyft" && <th>Recipient</th>}
            <th>Title</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{TableRowExpense()}</tbody>
      </table>
    </div>
  );
}
