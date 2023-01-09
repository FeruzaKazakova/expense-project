import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/FormInput/FormInput";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(null);

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onShowForm()
    };

    const titleInputChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const priceInputChangeHandler = (event) => {
        const value = event.target.value;
        if(value.charAt(0) !== "-"){
            setPrice(value);
        }
    }

    const dateInputChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const saveHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            date,
            price,
        };
        console.log(expenseData);

        props.onNewExpenseAdd(expenseData);
    }

    return(
        <form>
            <div className="containerr">
            <FormInput labelName="Название" inputType="text" placeholder="Введите ..." value={title} onChange={titleInputChangeHandler}/>

            <FormInput labelName="Количество денег" inputType="number" value={price} onChange={priceInputChangeHandler} />

            <FormInput labelName="Дата" inputType="date" placeholder="ДД.ММ.ГГ" onChange={dateInputChangeHandler} />

            <div className="buttons">
                <Button className="first" title="Отмена" onClick={cancelHandler} />
            <Button className="second" title="Сохранить" onClick={saveHandler}/></div>
            </div>
        </form>
    );
};