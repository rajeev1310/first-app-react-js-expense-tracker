function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <span>{props.date}</span>
            <h2>{props.title}</h2>
            <p>Rs {props.amount}</p>
        </div>
    );
}

export default ExpenseItem;