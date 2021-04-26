import React, {useState} from 'react';
import './App.css';
import './components/ExpenseComponent/ExpenseItem.css'
import ExpenseItem from './components/ExpenseComponent/ExpenseItem.js';
import AddExpenseFormComponent from './components/AddExpenseComponent/AddExpenseFormComponent.js';
import ExpensesFilter from './components/ExpenseFilterComponent/ExpensesFilter.js';

const DUMMY_ITEM = [
    { id : 1, title : "Groceries", amount : "5000", date : new Date(2021, 2, 28) },
    { id : 2, title : "Electricity Bill", amount : "500", date : new Date(2021, 3, 2) },
    { id : 3, title : "Car Insurance", amount : "650", date : new Date(2021, 2, 3) },
    { id : 4, title : "Internet Bill", amount : "1000", date : new Date(2021, 2, 3) },
    { id : 5, title : "Water Bill", amount : "320", date : new Date(2021, 2, 4) },
    { id : 6, title : "Clothes", amount : "2000", date : new Date(2021, 2, 5) }
  ];

function App() {

  const [expenseItemData, setExpenseItemData] = useState(DUMMY_ITEM);
  
  const listItems = expenseItemData.map(
    (exppenseItem) =>
    <ExpenseItem key={exppenseItem.id} title={exppenseItem.title} amount={exppenseItem.amount} date={exppenseItem.date.toLocaleDateString()}></ExpenseItem>
  );

  const addExpenseItemHandler = (data) => {
    const expenseData = {
      id : Math.random().toString(),
      ...data
    }
    setExpenseItemData((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }

  const [selectYear, setSelectYear] = useState('2020');

  const selectYearHandler = year => {
    setSelectYear(year);
  }

  return (
    <div className="App">
      <AddExpenseFormComponent onAddExpense={addExpenseItemHandler} />
      <ExpensesFilter year={selectYear} onSelectYear={selectYearHandler} />
      <div className="expense-item-container">
        {listItems}
      </div>
    </div>
  );
}

export default App;
