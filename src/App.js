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


 function deleteTodo(id){

  const updatedTodos =[...todos].filter((e) => e.id=!id)
  setTodos(updatedTodos)
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
      {todos.map((e)=><div key={e.id}>
        <div>{e.text}</div>
        <button onClick={()=> deleteTodo(e.id)}>
          Delete
          </button>
        </div>)}
    </div>
  );
}

export default App;
