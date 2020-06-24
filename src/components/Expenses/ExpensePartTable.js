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

import { handleDeleteLawyer } from "../Expenses/Personal/lawyer";
import { handleDeleteBeneficiary } from "../Expenses/Personal/beneficiary";
import { handleDeleteProduct } from "../Expenses/Personal/product";
import { handleDeleteInstructor } from "../Expenses/Personal/instructor";
import { handleDeleteAcademicFee } from "../Expenses/Personal/academicFee";

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
        let expenseId = null;
        let nature = null;
        let natureId = null;

        nature = response.data[GetExpense(__typename).operName].nature;

        let text = GetExpense(__typename, nature).buttonText;

        switch (__typename) {
          case "LegalExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;

            if (
              response.data[GetExpense(__typename).operName][
                GetExpense(__typename).fieldName
              ].items.length > 0
            ) {
              parts = response.data[GetExpense(__typename).operName][
                GetExpense(__typename).fieldName
              ].items.map((lawyer) => ({
                ...lawyer,
                expenseId,
                text,
                nature,
                hideList: false,
              }));
            } else {
              parts = [
                {
                  expenseId,
                  text,
                  nature,
                  __typename: "Lawyer",
                  hideList: true,
                },
              ];
            }
            break;
          case "InsuranceExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;

            if (
              response.data[GetExpense(__typename).operName][
                GetExpense(__typename).fieldName
              ].items.length > 0
            ) {
              parts = response.data[GetExpense(__typename).operName][
                GetExpense(__typename).fieldName
              ].items.map((beneficiary) => ({
                ...beneficiary,
                expenseId,
                text,
                nature,
                hideList: false,
              }));
            } else {
              parts = [
                {
                  expenseId,
                  text,
                  nature,
                  __typename: "Beneficiary",
                  hideList: true,
                },
              ];
            }
            break;
          case "FoodExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;

            natureId = response.data[GetExpense(__typename).operName].grocery
              ? response.data[GetExpense(__typename).operName].grocery.id
              : null;

            if (
              response.data[GetExpense(__typename).operName].grocery.products
                .items.length > 0
            ) {
              parts = response.data[
                GetExpense(__typename).operName
              ].grocery.products.items.map((product) => ({
                ...product,
                expenseId,
                natureId,
                text,
                nature,
                hideList: false,
              }));
            } else {
              parts = [
                {
                  expenseId,
                  natureId,
                  text,
                  nature,
                  __typename: "Product",
                  hideList: true,
                },
              ];
            }

            break;
          case "EducationExpense":
            expenseId = response.data[GetExpense(__typename).operName]
              ? response.data[GetExpense(__typename).operName].id
              : null;
            if (nature === "COLLEGE") {
              natureId = response.data[GetExpense(__typename).operName].college
                ? response.data[GetExpense(__typename).operName].college.id
                : null;

              if (
                response.data[GetExpense(__typename).operName].college.fees
                  .items.length > 0
              ) {
                parts = response.data[
                  GetExpense(__typename).operName
                ].college.fees.items.map((fee) => ({
                  ...fee,
                  expenseId,
                  natureId,
                  nature,
                  text,
                }));
              } else {
                parts = [
                  {
                    expenseId,
                    natureId,
                    nature,
                    __typename: "AcademicFee",
                    hideList: true,
                  },
                ];
              }
            } else if (nature === "COMMUNITYCOLLEGE") {
              natureId = response.data[GetExpense(__typename).operName]
                .communityCollege
                ? response.data[GetExpense(__typename).operName]
                    .communityCollege.id
                : null;

              if (
                response.data[GetExpense(__typename).operName].communityCollege
                  .fees.items.length > 0
              ) {
                parts = response.data[
                  GetExpense(__typename).operName
                ].communityCollege.fees.items.map((fee) => ({
                  ...fee,
                  expenseId,
                  natureId,
                  nature,
                  text,
                }));
              } else {
                parts = [
                  {
                    expenseId,
                    natureId,
                    nature,
                    __typename: "AcademicFee",
                    hideList: true,
                  },
                ];
              }
            } else if (nature === "ONLINECOURSE") {
              natureId = response.data[GetExpense(__typename).operName]
                .onlineCourse
                ? response.data[GetExpense(__typename).operName].onlineCourse.id
                : null;

              if (
                response.data[GetExpense(__typename).operName].onlineCourse
                  .instructors.items.length > 0
              ) {
                parts = response.data[
                  GetExpense(__typename).operName
                ].onlineCourse.instructors.items.map((instructor) => ({
                  ...instructor,
                  expenseId,
                  nature,
                  natureId,
                  text,
                }));
              } else {
                parts = [
                  {
                    expenseId,
                    natureId,
                    nature,
                    __typename: "Instructor",
                    hideList: true,
                  },
                ];
              }
            }
            break;

          default:
            break;
        }
      }

      setExpenseParts(parts);
    }
  } catch (error) {
    console.error("initialize parts", error);
  }
}

const GetExpense = (__typename, nature) => {
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
      if (nature === "COLLEGE" || nature === "COMMUNITYCOLLEGE") {
        return {
          operGql: getEducationExpense,
          operName: "getEducationExpense",
          fieldName: "fees",
          buttonText: "Academic Fee",
        };
      }
      return {
        operGql: getEducationExpense,
        operName: "getEducationExpense",
        fieldName: "instructors",
        buttonText: "Instructor",
      };
    default:
      throw Error("You are trying to get an expense that don't exist");
  }
};

export default function ExpensePartTable(props) {
  const [expenseParts, setExpenseParts] = useState([]);

  console.log("expense parts", expenseParts);

  let { url } = useRouteMatch();

  useEffect(() => {
    initializeExpensePart(
      props.location.state.id,
      props.location.state.__typename,
      props.location.state.nature,
      setExpenseParts
    );
  }, [props]);

  const handleDeleteExpensePart = async (expensePart, setExpenseParts) => {
    try {
      const { nature } = expensePart;

      const deletedPartId = await LinkState(
        props.location.state.__typename,
        nature,
        expensePart,
        false
      ).delete.operGql(expensePart);

      setExpenseParts((parts) =>
        parts.filter((part) => part.id !== deletedPartId)
      );
    } catch (error) {
      console.error("handle delete expense part", error);
    }
  };

  const btns = (expensePart) => {
    return (
      <div className="level">
        <div className="level-left" style={{ marginRight: ".2rem" }}>
          <div className="level-item">
            <Link
              className="button is-small"
              to={{
                pathname: `${url}/edit/${expensePart.id}`,
                state: LinkState(
                  props.location.state.__typename,
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
                handleDeleteExpensePart(expensePart, setExpenseParts)
              }
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  function LinkState(expenseType, nature, expensePart, adding) {
    if (
      expenseType === "InsuranceExpense" &&
      (nature === "HOME" ||
        nature === "CAR" ||
        nature === "LIFE" ||
        nature === "DISABILITY" ||
        nature === "OTHER")
    ) {
      if (adding) {
        return {
          add: {
            insuranceId:
              expenseParts.length > 0 ? expenseParts[0].expenseId : null,
            __typename:
              expenseParts.length > 0
                ? expenseParts[0].__typename
                : "Beneficiary",
            text:
              expenseParts.length > 0 ? expenseParts[0].text : "Beneficiary",
            nature,
            // addressId will be created before create a beneficiary}
          },
        };
      }
      return {
        edit: {
          ...expensePart,
        },
        delete: {
          expensePartId: expensePart.id,
          addressId: expensePart.address ? expensePart.address.id : null,
          __typename: expensePart.__typename,
          nature,
          operGql: handleDeleteBeneficiary,
        },
      };
    } else if (
      expenseType === "LegalExpense" &&
      (nature === "DOCUMENTS" ||
        nature === "INMIGRATION" ||
        nature === "WORK" ||
        nature === "ACCIDENT" ||
        nature === "HOME" ||
        nature === "PERSONAL" ||
        nature === "OTHER")
    ) {
      if (adding) {
        return {
          add: {
            legalId: expenseParts.length > 0 ? expenseParts[0].expenseId : null,
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : "Lawyer",
            text: expenseParts.length > 0 ? expenseParts[0].text : "Lawyer",
            nature,
            // addressId will be created before create a lawyer}
          },
        };
      }
      return {
        edit: {
          ...expensePart,
        },
        delete: {
          id: expensePart ? expensePart.id : null,
          addressId: expensePart
            ? expensePart.address
              ? expensePart.address.id
              : null
            : null,
          __typename: expensePart ? expensePart.__typename : null,
          nature,
          operGql: handleDeleteLawyer,
        },
      };
    } else if (nature === "GROCERY") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : "Product",
            text: expenseParts.length > 0 ? expenseParts[0].text : "Product",
            natureId: expenseParts.length > 0 ? expenseParts[0].natureId : null,
            nature,
          },
        };
      }
      return {
        edit: {
          ...expensePart,
        },
        delete: {
          id: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
          nature,
          operGql: handleDeleteProduct,
        },
      };
    } else if (nature === "COLLEGE" || nature === "COMMUNITYCOLLEGE") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : null,
            text:
              expenseParts.length > 0 ? expenseParts[0].text : "Academic Fee",
            nature,
            natureId: expenseParts.length > 0 ? expenseParts[0].natureId : null,
            // periodId will be created before create a AcademicFee
          },
        };
      }
      return {
        edit: {
          ...expensePart,
        },
        delete: {
          id: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
          nature,
          natureId: expensePart ? expensePart.natureId : null,
          operGql: handleDeleteAcademicFee,
        },
      };
    } else if (nature === "ONLINECOURSE") {
      if (adding) {
        return {
          add: {
            __typename:
              expenseParts.length > 0 ? expenseParts[0].__typename : null,
            text: expenseParts.length > 0 ? expenseParts[0].text : "Instructor",
            nature,
            natureId: expenseParts.length > 0 ? expenseParts[0].natureId : null,
          },
        };
      }
      return {
        edit: {
          ...expensePart,
        },
        delete: {
          id: expensePart ? expensePart.id : null,
          __typename: expensePart ? expensePart.__typename : null,
          nature,
          operGql: handleDeleteInstructor,
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
        if (!expensePart.hideList) {
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
        } else {
          return (
            <tr key={1}>
              <td>NO ITEMS</td>
            </tr>
          );
        }
      } else if (expensePart.__typename === "Lawyer") {
        if (!expensePart.hideList) {
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
        } else {
          return (
            <tr key={1}>
              <td>NO ITEMS</td>
            </tr>
          );
        }
      } else if (expensePart.__typename === "AcademicFee") {
        if (!expensePart.hideList) {
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
                {expensePart.roomAndBoard
                  ? `$ ${expensePart.roomAndBoard}`
                  : ""}
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
        } else {
          return (
            <tr key={1}>
              <td>NO ITEMS</td>
            </tr>
          );
        }
      } else if (expensePart.__typename === "Product") {
        if (!expensePart.hideList) {
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
        } else {
          return (
            <tr key={1}>
              <td>NO ITEMS</td>
            </tr>
          );
        }
      } else if (expensePart.__typename === "Instructor") {
        if (!expensePart.hideList) {
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
      } else {
        return (
          <tr key={1}>
            <td>NO ITEMS</td>
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

  const fieldName = GetExpense(
    props.location.state.__typename,
    props.location.state.nature
  ).fieldName;

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
      <div className="container">
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
              state: LinkState(
                props.location.state.__typename,
                props.location.state.nature,
                null,
                true
              ).add,
            }}
          >
            <span className="icon">
              <i className="far fa-plus-square"></i>
            </span>
            <span>{`Add ${
              GetExpense(
                props.location.state.__typename,
                props.location.state.nature
              ).buttonText
            }`}</span>
          </Link>
        </div>
        <div className="table-container">
          <table
            className="table is-striped is-hoverable is-narrow padded"
            style={{ width: "100%" }}
          >
            <thead>{TableHeaderExpensePart()}</thead>
            <tbody>{TableRowExpensePart()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
