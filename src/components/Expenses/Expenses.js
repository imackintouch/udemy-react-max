import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [expenseDate, setExpenseDate] = useState('');

  const saveSelectedExpenseDate = (selectedExpenseDate) => {
    console.log(`Expenses.js: ${selectedExpenseDate} was selected from date filter`);
    setExpenseDate(selectedExpenseDate);
  }

  return (
    <div>
      <ExpensesFilter onSelectExpenseDate={saveSelectedExpenseDate} />
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
