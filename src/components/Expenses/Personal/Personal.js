import React, { useState, useEffect } from "react";

import ExpenseTable from "../ExpenseTable";
import ExpenseTableNav from "../ExpenseTableNav";
import { API, graphqlOperation } from "aws-amplify";

import {
  deleteLegalExpense,
  deleteInvestmentExpense,
  deleteHousingExpense,
  deletePhoneExpense,
  deleteInsuranceExpense,
  deleteFoodExpense,
  deleteCommuteExpense,
  deleteEducationExpense,
  deletePersonalCareExpense,
  deletePetExpense,
  deleteEntertainmentExpense,
  deleteLoanExpense,
  deleteTaxExpense,
} from "../../../graphql/mutations";

export default function Personal({ client }) {
  const [expenses, setExpenses] = useState([]);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    if (client) {
      const {
        id,
        legalExpenses,
        investmentExpenses,
        housingExpenses,
        phoneExpenses,
        insuranceExpenses,
        foodExpenses,
        commuteExpenses,
        educationExpenses,
        personalCareExpenses,
        petExpenses,
        entertainmentExpenses,
        loanExpenses,
        taxExpenses,
      } = client;

      setExpenses([
        ...legalExpenses.items,
        ...investmentExpenses.items,
        ...housingExpenses.items,
        ...phoneExpenses.items,
        ...insuranceExpenses.items,
        ...foodExpenses.items,
        ...commuteExpenses.items,
        ...educationExpenses.items,
        ...personalCareExpenses.items,
        ...petExpenses.items,
        ...entertainmentExpenses.items,
        ...loanExpenses.items,
        ...taxExpenses.items,
      ]);
      setClientId(id);
    }
  }, [client]);

  const MethodToDeleteExpense = (__typename) => {
    switch (__typename) {
      case "PetExpense":
        return deletePetExpense;
      case "EntertainmentExpense":
        return deleteEntertainmentExpense;
      case "PersonalCareExpense":
        return deletePersonalCareExpense;
      case "TaxExpense":
        return deleteTaxExpense;
      case "LoanExpense":
        return deleteLoanExpense;
      case "EducationExpense":
        return deleteEducationExpense;
      case "InvestmentExpense":
        return deleteInvestmentExpense;
      case "HousingExpense":
        return deleteHousingExpense;
      case "PhoneExpense":
        return deletePhoneExpense;
      case "InsuranceExpense":
        return deleteInsuranceExpense;
      case "FoodExpense":
        return deleteFoodExpense;
      case "CommuteExpense":
        return deleteCommuteExpense;
      case "LegalExpense":
        return deleteLegalExpense;
      default:
        throw new Error(
          "The expense type provided don't have a delete method",
          __typename
        );
    }
  };

  const MethodToDeleteExpenseName = (__typename) => {
    switch (__typename) {
      case "PetExpense":
        return "deletePetExpense";
      case "EntertainmentExpense":
        return "deleteEntertainmentExpense";
      case "PersonalCareExpense":
        return "deletePersonalCareExpense";
      case "TaxExpense":
        return "deleteTaxExpense";
      case "LoanExpense":
        return "deleteLoanExpense";
      case "EducationExpense":
        return "deleteEducationExpense";
      case "InvestmentExpense":
        return "deleteInvestmentExpense";
      case "HousingExpense":
        return "deleteHousingExpense";
      case "PhoneExpense":
        return "deletePhoneExpense";
      case "InsuranceExpense":
        return "deleteInsuranceExpense";
      case "FoodExpense":
        return "deleteFoodExpense";
      case "CommuteExpense":
        return "deleteCommuteExpense";
      case "LegalExpense":
        return "deleteLegalExpense";
      default:
        return "NA";
    }
  };

  console.log("expenses", expenses);
  // Check if delete nested object like home in housingExpense, i gess not TODO
  const handleDeleteExpense = async (id, __typename) => {
    try {
      const result = await API.graphql(
        graphqlOperation(MethodToDeleteExpense(__typename), { input: { id } })
      );
      result &&
        setExpenses((expenses) =>
          expenses.filter((e) => {
            return (
              e.id !== result.data[MethodToDeleteExpenseName(__typename)].id
            );
          })
        );
    } catch (error) {
      console.error("handle delete personal expense", error);
    }
  };
  // console.log('object transform flat', [expenses.legalExpenses, expenses.investmentExpenses].flat(Infinity));

  return (
    <>
      <section className="section">
        <div className="container">
          <ExpenseTableNav clientId={clientId} />
          <ExpenseTable
            expenses={expenses}
            handleDeleteExpense={handleDeleteExpense}
            expenseType="Personal"
            clientId={clientId}
          />
        </div>
      </section>
    </>
  );
}
