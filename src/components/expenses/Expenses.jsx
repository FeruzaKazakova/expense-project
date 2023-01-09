import { ExpenseItem } from '../expense-item/ExpenseItem';
import './Expenses.css';

export const Expenses = ({expenses}) => {
  return (
    <ul>
       {expenses.map((elem) =>{
            return (<ExpenseItem 
            key={elem.title + new Date().getTime()} 
            date={elem.date} 
            title={elem.title} 
            price={elem.price} />)
        })}
    </ul>
   );
};
