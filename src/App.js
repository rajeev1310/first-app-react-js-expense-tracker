import React, {useState} from 'react';
import './App.css';
import './components/ExpenseComponent/ExpenseItem.css'
import ExpenseItem from './components/ExpenseComponent/ExpenseItem.js';
import AddExpenseFormComponent from './components/AddExpenseComponent/AddExpenseFormComponent.js';
import ExpensesFilter from './components/ExpenseFilterComponent/ExpensesFilter.js';

const DUMMY_ITEM = [
    { id : 1, title : "Groceries", amount : "5000", date : new Date(2020, 2, 28) },
    { id : 2, title : "Electricity Bill", amount : "500", date : new Date(2021, 3, 2) },
    { id : 3, title : "Car Insurance", amount : "650", date : new Date(2022, 2, 3) },
    { id : 4, title : "Internet Bill", amount : "1000", date : new Date(2020, 2, 3) },
    { id : 5, title : "Water Bill", amount : "320", date : new Date(2022, 2, 4) },
    { id : 6, title : "Clothes", amount : "2000", date : new Date(2021, 2, 5) }
  ];

function App() {

  const [expenseItemData, setExpenseItemData] = useState(DUMMY_ITEM);

  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

  const addExpenseItemHandler = (data) => {
    const expenseData = {
      id : Math.random().toString(),
      ...data
    }
    setExpenseItemData((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  }

  const currentYear = new Date().getFullYear().toString();

  const [selectYear, setSelectYear] = useState(currentYear);

  const selectYearHandler = year => {
    setSelectYear(year);
  }

  const expenseByYear = expenseItemData.filter(items => {
      if(selectYear === '') {
        return expenseItemData;
      } else {
        return items.date.getFullYear().toString() === selectYear
      }
  });

  const showExpenseFormHandler = () => {
    setIsExpenseFormVisible(true);
  }

  const hideExpenseFormHandler = () => {
    setIsExpenseFormVisible(false);
  }

  return (
    <div className="App">
      { isExpenseFormVisible ? <AddExpenseFormComponent onAddExpense={addExpenseItemHandler} onCancel={hideExpenseFormHandler} /> : <button onClick={showExpenseFormHandler}>Add Expense</button> }
      <ExpensesFilter year={selectYear} onSelectYear={selectYearHandler} />
      <div className="expense-item-container">
        {expenseByYear.length === 0 ? (<p>No data available</p>) : (expenseByYear.map((expenseItem) => (
          <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date.getFullYear()} />
        )))}
      </div>
    </div>
  );
}

export default App;
