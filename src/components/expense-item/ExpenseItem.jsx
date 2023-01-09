import './ExpenseItem.css';

export const ExpenseItem = ({ title, date, price }) => {
    return(
        <li className="expenseItemContainer">
            <div className='dateContainer'>
                <p className='month'>{date.month}</p>
                <p className='year'>{date.year}</p>
                <p className='dateDay'>{date.day}</p>
                </div>
            <p className='title'>{title}</p>
            <div className='priceContainer'>
                <p className='price'>$ {price}</p></div>
        </li>
    );
};