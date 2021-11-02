import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [ExpsenseFormStatus, setExpsenseFormStatus] = useState(0);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(ExpsenseFormStatus);
    props.onAddExpense(expenseData);
  };

  if (ExpsenseFormStatus === 0) {
    return (
      <div className="new-expense">
        <button onClick={setExpsenseFormStatus} >Add Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        buttonActive={setExpsenseFormStatus}
      />
    </div>
  );
};

export default NewExpense;
