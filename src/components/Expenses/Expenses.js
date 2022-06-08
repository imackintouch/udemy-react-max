import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // const expenses = props.expenses;

  const [expenseDate, setExpenseDate] = useState('2022');

  const saveSelectedExpenseDate = (selectedExpenseDate) => {
    console.log(`Expenses.js: ${selectedExpenseDate} was selected from date filter`);
    setExpenseDate(selectedExpenseDate);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter 
      expenseDate={expenseDate}
      onSelectExpenseDate={saveSelectedExpenseDate} 
      />
      {props.items.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />))}

    </Card>
  );
};

export default Expenses;
