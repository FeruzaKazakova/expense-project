import { useState } from 'react';
import './App.css';
import {Expenses} from './components/expenses/Expenses';
import { NewExpenses } from './components/new-expenses/NewExpenses';

// const expenses=[

// ];

function App() {
  let datee = new Date();
  const [expenses, setExpenses] = useState([
    {
      title:"Туалетная бумага",
      price: 90,
      date: {
        month: datee.getMonth() + 1,
        year: datee.getFullYear(),
        day: datee.getDate(),
      },
    },
  ])

  const addNewExpenseHandler = (data) => {

    setExpenses(prevState => [...prevState, data]);
  };

  return (
    <div className="App">
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={ expenses }/>
    </div>
  );
}

export default App;
