import { useState } from "react";
import { ExpenseForm } from "../epense-form/ExpenseForm";
import Button from "../UI/button/Button";
import './NewExpenseForm.css';

export const NewExpenses = ({onNewExpenseAdd}) =>{
    const [showForm, setShowForm] = useState(false);

    const showExpenseForm = () => {
        setShowForm((prevState) => {
            return !prevState;
        })
    };

    return(
        <div className="formContainer">
            {showForm ? (
            <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={onNewExpenseAdd}/>
            ) : (
            <Button className={"button-add"} title="Добавить новый расход" onClick={showExpenseForm}/>
            )}
        </div>
    );
}; 