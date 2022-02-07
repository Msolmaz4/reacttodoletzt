import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const keyD = () => {
    Math.random();
  };

 function handleSubmit(e) {
   e.preventDefault()

   const newTodo ={

    id:new Date().getTime(),
    text:todo,
    completed:false

   }
   setTodos([...todos].concat(newTodo))
   setTodo('')
 }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          key={keyD}
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">add to</button>
      </form>
      {todos.map((e)=><div>{e.text}</div>)}
    </div>
  );
}

export default App;
