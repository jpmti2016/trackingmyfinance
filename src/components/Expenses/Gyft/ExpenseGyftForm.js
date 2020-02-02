import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import dayjs from 'dayjs';
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';

import { createGyftExpense, createRecipient, updateGyftExpense } from '../../../graphql/mutations';
import { listRecipients } from '../../../graphql/queries';
import "./ExpenseGyftForm.css";

const gyftSchema = yup.object().shape({
  amount: yup.number('Please provide the amount').required('Please provide the amount'),
  dueDate: yup.string().required('Please select the gyft date'),
  event: yup.string().required('Please select the event'),
  recipient: yup.string().required("Please provide the recipient's name"),
  title: yup.string(),
  notes: yup.string()
});

const gyftDefault = (gyft) => {
  console.log('default values event', gyft.event)

  return {
    amount: Number(gyft.amount) || 0.00,
    // dueDate: dayjs(gyft.date).format('YYYY-MM-DD') || dayjs().format('YYYY-MM-DD'),
    event: gyft.event || 'Phone Recharge',
    recipient: gyft.recipient.name || 'Mima',
    title: gyft.title || '',
    notes: gyft.notes || ''
  }
};

export default function ExpenseGyftForm(props) {
  const [gyft, setGyft] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [clientId, setClientId] = useState("");

  let history = useHistory();

  useEffect(() => {
    props.location.pathname.includes('edit') && setGyft(props.location.state.expense);
    props.location.pathname.includes('add') && setClientId(props.location.state.clientId);

    setIsAdding(props.location.pathname.includes('add'));
    setIsUpdating(props.location.pathname.includes('edit'));

  }, [props]);

  const cta = isAdding ? `Add my gyft expense` : `Update my gyft expense`;

  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: gyftSchema,
  });

  const validateRecipient = async (recipient) => {
    let existingRecipientId = null;
    let result = null;
    let recipCreate = null;
    try {
      const listResult = await API.graphql(graphqlOperation(listRecipients, { input: { name: recipient } }));

      if (listResult) {
        result = listResult.data.listRecipients.items.find((r) => r.name === recipient);

        if (!result) {
          recipCreate = await API.graphql(graphqlOperation(createRecipient, { input: { name: recipient } }));
          recipCreate && (existingRecipientId = recipCreate.data.createRecipient.id);

        } else {
          existingRecipientId = result.id;
        }
      } else {
        recipCreate = await API.graphql(graphqlOperation(createRecipient, { input: { name: recipient } })).data.createRecipient.id;
        recipCreate && (existingRecipientId = recipCreate.data.createRecipient.id);

      }

      return existingRecipientId;

    } catch (error) {
      console.error('validate recipient', error);
    }
  }

  const handleCancel = () => {
    reset();
    history.push("/expenses/gyft");
  }

  const handleUpdateGyftExpense = async (formatedInputGyft) => {
    try {
      const { amount, dueDate, event, notes, title, id, kind } = gyft;
      const gyftToUpdate = { amount, dueDate, event, notes, title, id, kind, ...formatedInputGyft };
      // const input = { ...newGyft, ...gyft };

      const gyftUpdated = await API.graphql(graphqlOperation(updateGyftExpense, { input: gyftToUpdate }));

      console.log('gyft updated', gyftUpdated.data.updateGyftExpense);
      // const updateList = props.location.state.handleUpdate;
      // gyftUpdated && updateList(gyfts => gyfts.map((g) => g.id === gyftUpdated.data.updateGyftExpense.id ? gyftUpdated.data.updateGyftExpense : g))

      // gyftUpdated && setGyfts(gyfts => gyfts.map((g) => g.id === gyftUpdated.id ? gyftUpdated.data.updateGyftExpense : g));

      // setGyft(null);
      history.push("/expenses/gyft");

    } catch (error) {
      console.error('handle update', error);
    }
  }

  const handleCreateGyftExpense = async (formatedInputGyft) => {
    try {

      const result = await API.graphql(graphqlOperation(createGyftExpense, { input: { ...formatedInputGyft, gyftExpenseClientId: clientId, } }));

      console.log('new added gyft', result.data.createGyftExpense);
      history.push("/expenses/gyft");
    } catch (error) {
      console.error('handle create gyft', error);
    }
  }

  const onSubmit = async (data, e) => {
    try {
      const kind = "GYFT"; // 'Gyft' because each the field kind is based on the current tab position

      const { amount, dueDate, recipient, event, notes, title } = data;
      console.log('duedate from data', dueDate);
      const formatedDueDate = dayjs(dueDate).format('YYYY-MM-DD');
      console.log('formated dueDate', formatedDueDate);
      const formatedAmount = Number(amount);
      const titleEmpty = title === '' ? null : title;
      const notesEmpty = notes === '' ? null : notes;

      const recipientId = await validateRecipient(recipient);

      const formatedInputGyft = { kind, amount: formatedAmount, dueDate: formatedDueDate, gyftExpenseRecipientId: recipientId, event: event.replace(' ', '').toLocaleUpperCase(), notes: notesEmpty, title: titleEmpty };

      isAdding && handleCreateGyftExpense(formatedInputGyft);

      isUpdating && handleUpdateGyftExpense(formatedInputGyft);

    } catch (error) {
      console.error('handle submit gyft', error);
    }

    e.target.reset(); // reset after form submit
    // alert(JSON.stringify(data));



  };

  return (
    <>
      <section
        className="section"
        style={{
          paddingTop: "8rem",
          paddingBottom: "0.1rem",
          color: "#363636"
        }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title" style={{ color: "#363636" }}>
                  Expenses
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="subtitle">Gyft</h2>
          <div className="field">
            <label htmlFor="date-delibered" className="label">
              Date
            </label>
            <div className="control">
              <input
                className="input"
                type="date"
                placeholder="11/25/2019"
                name="dueDate"
                ref={register}
                defaultValue={((props.location.pathname.includes('edit') && props.location.state.expense.dueDate))}
              />
              {errors.dueDate && <p className="error">{errors.dueDate.message}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="amount" className="label">
              Amount
            </label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="187.45"
                step="0.01"
                min="0"
                name="amount"
                ref={register}
                defaultValue={(gyft && gyft.amount)}
              />
              {errors.amount && <p className="error">{errors.amount.message}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="title" className="label">
              Title
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="The great deal"
                name="title"
                ref={register}
                defaultValue={(gyft && gyft.title) || ""}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="notes" className="label">
              Notes
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name="notes"
                placeholder="Lorem et ipsum"
                ref={register}
                defaultValue={(gyft && gyft.notes) || ""}
              />
              {errors.notes && <p className="error">{errors.notes.message}</p>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="event" className="label">
              Event
            </label>
            <div className="control">
              <div className="select">
                <select name="event" ref={register} defaultValue={(props.location.pathname.includes('edit') && props.location.state.expense.event) || ""}>
                  <option value="">--Select--</option>
                  <option value="PHONERECHARGE">Phone Recharge</option>
                  <option value="MONEYSENDED">Money Sended</option>
                  <option value="PRESENT">Present</option>
                  <option value="BIRTHDAY">Birthday</option>
                  <option value="CHARITY">Charity</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              {/* <ErrorMessage errors={errors} name="event" /> */}
              {errors.event && <p className="error">{errors.event.message}</p>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="recipient" className="label">
              Recipient
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Jhon Doe"
                name="recipient"
                ref={register}
                defaultValue={(gyft && gyft.recipient.name) || ""}
              />
              {errors.recipient && <p className="error">{errors.recipient.message}</p>}
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button cta is-link is-fullwidth" type="submit">
                {cta.toLocaleUpperCase()}
              </button>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth" type="submit" onClick={handleCancel} style={{ backgroundColor: "#fafafa", color: "#BAA949" }}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
