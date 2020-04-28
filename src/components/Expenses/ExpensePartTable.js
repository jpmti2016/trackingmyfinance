import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  getInsuranceExpense,
  getLegalExpense,
  getFoodExpense,
  getEducationExpense,
} from "../../graphql/queries";

async function initializeExpensePart(
  expenseId,
  __typename,
  nature,
  setExpenseParts
) {
  try {
    if (expenseId) {
      const response = await API.graphql(
        graphqlOperation(GetExpense(__typename).operGql, {
          id: expenseId,
        })
      );

      let parts = [];

      if (response) {
        console.log("response data", response.data);
        let expenseId = null;
        let nature = null;
        let natureId = null;
        switch (__typename) {
          case "LegalExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;
            parts = response.data[GetExpense(__typename).operName][
              GetExpense(__typename).fieldName
            ].items.map((lawyer) => ({ ...lawyer, expenseId }));
            break;
          case "InsuranceExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;
            parts = response.data[GetExpense(__typename).operName][
              GetExpense(__typename).fieldName
            ].items.map((beneficiary) => ({ ...beneficiary, expenseId }));
            break;
          case "FoodExpense":
            natureId =
              response.data[GetExpense(__typename).operName].grocery.id;
            parts = response.data[
              GetExpense(__typename).operName
            ].grocery.products.items.map((product) => ({
              ...product,
              natureId,
            }));

            break;
          case "EducationExpense":
            nature = response.data[GetExpense(__typename).operName].nature;
            if (nature === "COLLEGE") {
              natureId = response.data[GetExpense(__typename).operName].college
                ? response.data[GetExpense(__typename).operName].college.id
                : null;
              parts = response.data[
                GetExpense(__typename).operName
              ].college.fees.items.map((fee) => ({ ...fee, natureId, nature }));
            } else if (nature === "COMUNITYCOLLEGE") {
              natureId = response.data[GetExpense(__typename).operName]
                .communityCollege
                ? response.data[GetExpense(__typename).operName]
                    .communityCollege.id
                : null;
              parts = response.data[
                GetExpense(__typename).operName
              ].communityCollege.fees.items.map((fee) => ({
                ...fee,
                natureId,
                nature,
              }));
            } else if (nature === "ONLINECOURSE") {
              natureId = response.data[GetExpense(__typename).operName]
                .onlineCourse
                ? response.data[GetExpense(__typename).operName].onlineCourse.id
                : null;
              parts = response.data[
                GetExpense(__typename).operName
              ].onlineCourse.instructors.items.map((instructor) => ({
                ...instructor,
                nature,
                natureId,
              }));
            }
            break;

          default:
            break;
        }
      }

      console.log("parts", parts);

      setExpenseParts(parts);
    }
  } catch (error) {
    console.error("initialize beneficiary", error);
  }
}

const GetExpense = (__typename) => {
  switch (__typename) {
    case "InsuranceExpense":
      return {
        operGql: getInsuranceExpense,
        operName: "getInsuranceExpense",
        fieldName: "beneficiaries",
        buttonText: "Beneficiary",
      };
    case "LegalExpense":
      return {
        operGql: getLegalExpense,
        operName: "getLegalExpense",
        fieldName: "lawyers",
        buttonText: "Lawyer",
      };
    case "FoodExpense":
      return {
        operGql: getFoodExpense,
        operName: "getFoodExpense",
        fieldName: "products",
        buttonText: "Product",
      };
    case "EducationExpense":
      return {
        operGql: getEducationExpense,
        operName: "getEducationExpense",
        fieldName: "fees",
        buttonText: "Instructor",
      };
    default:
      throw Error("You are trying to get an expense that don't exist");
  }
};

export default function ExpensePartTable(props) {
  const [expenseParts, setExpenseParts] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    initializeExpensePart(
      props.location.state.id,
      props.location.state.__typename,
      props.location.state.nature,
      setExpenseParts
    );
  }, [props]);

  let btns = (expensePart) => {
    return (
      <div className="level">
        <div className="level-left" style={{ marginRight: ".2rem" }}>
          <div className="level-item">
            <Link
              className="button is-small"
              to={{
                pathname: `${url}/edit/${expensePart.id}`,
                state: LinkState(
                  props.location.state.nature,
                  expensePart,
                  false
                ).edit,
              }}
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
                props.handleDeleteExpensePart(
                  LinkState(props.location.state.nature, expensePart).delete
                )
              }
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  function LinkState(nature, expensePart, adding) {
    if (
      nature === "HOME" ||
      nature === "CAR" ||
      nature === "LIFE" ||
      nature === "DISABILITY" ||
      nature === "OTHER"
    ) {
      if (adding) {
        return {
          add: {
            expenseId:
              expenseParts.length > 0 ? expenseParts[0].expenseId : null,
            __typename:
              expenseParts.length > 0
                ? expenseParts[0].__typename
                : "Beneficiary",
            // addressId will be created before create a beneficiary}
          },
        };
      }
      return {
        edit: {
          expensePartId: expensePart.id,
          addressId: expensePart.address.id ? expensePart.address.id : null,
          __typename: expensePart.__typename,
        },
        delete: {
          expensePartId: expensePart.id,
          addressId: expensePart.address ? expensePart.address.id : null,
          __typename: expensePart.__typename,
        },
      };
    } else if (
      nature === "DOCUMENTS" ||
      nature === "INMIGRATION" ||
      nature === "WORK" ||
      nature === "ACCIDENT" ||
      nature === "HOME" ||
      nature === "PERSONAL" ||
      nature === "OTHER"
    ) {
      if (adding) {
        return {
          add: {
            expenseId:
              expenseParts.length > 0 ? expenseParts[0].expenseId : null,
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : null,
            // addressId will be created before create a lawyer}
          },
        };
      }
      return {
        edit: {
          expensePartId: expensePart ? expensePart.id : null,
          addressId: expensePart
            ? expensePart.address
              ? expensePart.address.id
              : null
            : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
        delete: {
          expensePartId: expensePart ? expensePart.id : null,
          addressId: expensePart
            ? expensePart.address
              ? expensePart.address.id
              : null
            : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
      };
    } else if (nature === "GROCERY") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : "Product",
            natureId:
              expenseParts.length > 0 ? expenseParts[0].natureId : "GROCERY",
          },
        };
      }
      return {
        edit: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
        delete: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
      };
    } else if (nature === "COLLEGE" || nature === "COMUNITYCOLLEGE") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : null,
            nature: expenseParts.length > 0 ? expenseParts[0].nature : null,
            natureId: expenseParts.length > 0 ? expenseParts[0].natureId : null,
            // periodId will be created before create a AcademicFee
          },
        };
      }
      return {
        edit: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
          nature: expensePart ? expensePart.nature : null,
          natureId: expensePart ? expensePart.natureId : null,
          periodId: expensePart
            ? expensePart.period
              ? expensePart.period.id
              : null
            : null,
        },
        delete: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
          natureId: expensePart ? expensePart.natureId : null,
          periodId: expensePart
            ? expensePart.period
              ? expensePart.period.id
              : null
            : null,
        },
      };
    } else if (nature === "ONLINECOURSE") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : null,
            nature: expenseParts.length > 0 ? expenseParts[0].nature : null,
            natureId: expenseParts.length > 0 ? expenseParts[0].natureId : null,
          },
        };
      }
      return {
        edit: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
        delete: {
          expensePartId: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
        },
      };
    }
  }

  function TableRowExpensePart() {
    if (!expenseParts)
      return (
        <tr>
          <th>Loading...</th>
        </tr>
      );
    return expenseParts.map((expensePart, index) => {
      if (expensePart.__typename === "Beneficiary") {
        return (
          <tr key={expensePart.id}>
            <th>{index + 1}</th>
            <td>Image</td>
            <td>{expensePart.name ? expensePart.name : ""}</td>
            <td>{expensePart.lastName ? expensePart.lastName : ""}</td>
            <td>{`${expensePart.address ? expensePart.address.number : ""} ${
              expensePart.address ? expensePart.address.street : ""
            } ${expensePart.address ? expensePart.address.state : ""} ${
              expensePart.address ? expensePart.address.country : ""
            }`}</td>
            <td>{btns(expensePart)}</td>
          </tr>
        );
      } else if (expensePart.__typename === "Lawyer") {
        return (
          <tr key={expensePart.id}>
            <th>{index + 1}</th>
            <td>{`${expensePart.name ? expensePart.name : ""} ${
              expensePart.lastName ? expensePart.lastName : ""
            }`}</td>
            <td>{expensePart.firm ? expensePart.firm : ""}</td>
            <td className="right aligned">
              {expensePart.fee ? `$ ${expensePart.fee}` : ""}
            </td>
            <td>{`${
              expensePart.address
                ? expensePart.address.number
                  ? expensePart.address.number
                  : ""
                : ""
            } ${
              expensePart.address
                ? expensePart.address.street
                  ? expensePart.address.street
                  : ""
                : ""
            } ${
              expensePart.address
                ? expensePart.address.state
                  ? expensePart.address.state
                  : ""
                : ""
            } ${
              expensePart.address
                ? expensePart.address.country
                  ? expensePart.address.country
                  : ""
                : ""
            }`}</td>
            <td>{btns(expensePart)}</td>
          </tr>
        );
      } else if (expensePart.__typename === "AcademicFee") {
        return (
          <tr key={expensePart.id}>
            <th>{index + 1}</th>
            <td className="right aligned">
              {expensePart.tuitionAndFees
                ? `$ ${expensePart.tuitionAndFees}`
                : ""}
            </td>
            <td className="right aligned">
              {expensePart.booksAndSupplies
                ? `$ ${expensePart.booksAndSupplies}`
                : ""}
            </td>
            <td className="right aligned">
              {expensePart.roomAndBoard ? `$ ${expensePart.roomAndBoard}` : ""}
            </td>
            <td className="right aligned">
              {expensePart.transportation
                ? `$ ${expensePart.transportation}`
                : ""}
            </td>
            <td className="right aligned">
              {expensePart.personal ? `$ ${expensePart.personal}` : ""}
            </td>
            <td>{`${
              expensePart.period
                ? dayjs(expensePart.period.billingStart).format("MMM D, YYYY")
                : "NA"
            } - ${
              expensePart.period
                ? dayjs(expensePart.period.billingEnd).format("MMM D, YYYY")
                : "NA"
            }`}</td>
            <td>{btns(expensePart)}</td>
          </tr>
        );
      } else if (expensePart.__typename === "Product") {
        return (
          <tr key={expensePart.id}>
            <th>{index + 1}</th>
            <td>{expensePart.name ? expensePart.name : ""}</td>
            <td className="right aligned">
              {expensePart.price ? `$ ${expensePart.price}` : ""}
            </td>
            <td className="right aligned">
              {expensePart.quantity ? expensePart.quantity : ""}
            </td>
            <td>{expensePart.frequency ? expensePart.frequency : ""}</td>
            <td>{btns(expensePart)}</td>
          </tr>
        );
      } else if (expensePart.__typename === "Instructor") {
        return (
          <tr key={expensePart.id}>
            <th>{index + 1}</th>
            <td>Image</td>
            <td>{`${expensePart.name ? expensePart.name : ""} ${
              expensePart.lastName ? expensePart.lastName : ""
            }`}</td>
            <td>{expensePart.email ? expensePart.email : ""}</td>
            <td>{expensePart.tweeter ? expensePart.tweeter : ""}</td>
            <td>{expensePart.phone ? expensePart.phone : ""}</td>
            <td>{btns(expensePart)}</td>
          </tr>
        );
      }
    });
  }

  function TableHeaderExpensePart() {
    try {
      if (expenseParts.length > 0) {
        switch (expenseParts[0].__typename) {
          case "Beneficiary":
            return (
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th></th>
              </tr>
            );
          case "Lawyer":
            return (
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Firm</th>
                <th>Fee</th>
                <th>Address</th>
                <th></th>
              </tr>
            );
          case "AcademicFee":
            return (
              <tr>
                <th>#</th>
                {/* &amp */}
                <th>Tuitions & Fees</th>
                <th>Books & Supplies</th>
                <th>Room & Boards</th>
                <th>Commute</th>
                <th>Personal</th>
                {/* Must concatenate and format the address before use */}
                <th>Period</th>
                <th></th>
              </tr>
            );

          case "Product":
            return (
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Frequency</th>
                <th></th>
              </tr>
            );
          case "Instructor":
            return (
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tweeter</th>
                <th>Phone</th>
                <th></th>
              </tr>
            );

          default:
            return (
              <tr>
                <th>NO ITEMS</th>
              </tr>
            );
        }
      } else {
        return (
          <tr>
            <th>NO ITEMS</th>
          </tr>
        );
      }
    } catch (error) {
      console.error("table headerexpensepart", error);
    }
  }

  const fieldName = GetExpense(props.location.state.__typename).fieldName;

  const headerText = ""
    .concat(fieldName.charAt(0).toLocaleUpperCase())
    .concat(fieldName.slice(1));

  return (
    <div
      className="section"
      style={{
        width: "72%",
        maxWidth: "1320px",
        // marginTop: "0 auto",
        margin: "8rem auto 8rem auto",
      }}
    >
      <div
        className="container"
        style={
          {
            // border: "2px solid hsl(208, 21%, 88%)",
            // borderRadius: "5%",
          }
        }
      >
        <div className="beneficiary-header">
          <h1 className="ui header" style={{ color: "rgb(54,54,54)" }}>
            {props.location.state.__typename ? headerText : ""}
          </h1>
        </div>
        <div
          className="add"
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link
            className="button is-outlined"
            to={{
              pathname: `${url}/add`,
              state: LinkState(props.location.state.nature, null, true).add,
            }}
          >
            <span className="icon">
              <i className="far fa-plus-square"></i>
            </span>
            <span>{`Add ${
              GetExpense(props.location.state.__typename).buttonText
            }`}</span>
          </Link>
        </div>
        <table
          className="table is-striped is-hoverable padded"
          style={{ width: "100%" }}
        >
          <thead>{TableHeaderExpensePart()}</thead>
          <tbody>{TableRowExpensePart()}</tbody>
        </table>
      </div>
    </div>
  );
}
