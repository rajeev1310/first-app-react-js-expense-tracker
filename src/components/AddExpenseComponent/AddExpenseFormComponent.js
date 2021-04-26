import { useState } from 'react';
import './AddExpenseFormComponent.css';

const AddExpenseFormComponent = (props) => {

    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const onTitleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    }

    const onAmountChangeHandler = (event) => {
        setExpenseAmount(event.target.value);
    }

    const onDateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseObj = {
            title: expenseTitle,
            amount: expenseAmount,
            date: new Date(expenseDate)
        }
        props.onAddExpense(expenseObj);
    }

    return (
        <div className="form-container">
            <h2>Add your expense</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Expense Title" onChange={onTitleChangeHandler} />
                <input type="number" placeholder="Expense Amount" onChange={onAmountChangeHandler} />
                <input type="date" placeholder="Expense Date" onChange={onDateChangeHandler} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddExpenseFormComponent;