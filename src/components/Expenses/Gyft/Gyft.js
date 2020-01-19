import React, { useState, useEffect } from "react";
import ExpenseTable from "../ExpenseTable";
import ExpenseTableNav from "../ExpenseTableNav";
import { graphqlOperation, API } from 'aws-amplify';

import { deleteGyftExpense } from '../../../graphql/mutations';

export default function Gyft({ client }) {
  const [gyfts, setGyfts] = useState([]);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    setGyfts(client && client.gyftExpenses.items);
    setClientId(client && client.id)
  }, [client])

  const handleDeleteGyftExpense = async (id) => {
    try {
      const result = await API.graphql(graphqlOperation(deleteGyftExpense, { input: { id } }));
      result && setGyfts(gyfts => gyfts.filter((g) => {
        return g.id !== result.data.deleteGyftExpense.id;
      }));

    } catch (error) {
      console.error('handle delete gyft expense', error);
    }
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <ExpenseTableNav clientId={clientId} />
          <ExpenseTable expenses={gyfts} handleDeleteExpense={handleDeleteGyftExpense} expenseType="Gyft" />
        </div>
      </section>
    </>
  );
}
