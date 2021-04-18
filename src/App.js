import './App.css';
import './components/ExpenseComponent/ExpenseItem.css'
import ExpenseItem from './components/ExpenseComponent/ExpenseItem.js';

function App() {
  const expenseItemData = [
    { id : 1, title : "Groceries", amount : "5000", date : new Date(2021, 2, 28) },
    { id : 2, title : "Electricity Bill", amount : "500", date : new Date(2021, 3, 2) },
    { id : 3, title : "Car Insurance", amount : "650", date : new Date(2021, 2, 3) },
    { id : 4, title : "Internet Bill", amount : "1000", date : new Date(2021, 2, 3) },
    { id : 5, title : "Water Bill", amount : "320", date : new Date(2021, 2, 4) },
    { id : 6, title : "Clothes", amount : "2000", date : new Date(2021, 2, 5) }
  ];
  const listItems = expenseItemData.map(
    (exppenseItem) =>
    <ExpenseItem key={exppenseItem.id} title={exppenseItem.title} amount={exppenseItem.amount} date={exppenseItem.date.toLocaleDateString()}></ExpenseItem>
  );
  return (
    <div className="App">
      <div className="expense-item-container">
        {listItems}
      </div>
    </div>
  );
}

export default App;
