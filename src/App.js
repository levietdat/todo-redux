import "./App.css";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [sort,setSort] = useState("ALL")
  const [filterTodos,setfilterTodos] = useState([])
  useEffect(()=>{
    filterHandler()
  },[sort,todos])
  
   const filterHandler = () =>{
    switch(sort) {
      case "completed":
        setfilterTodos(todos.filter(item=>item.completed === true))
        break;
      case "uncompleted":
        setfilterTodos(todos.filter(item=>item.completed === false))
        break;
        default: setfilterTodos(todos)
    }
   }
  return (
    <div className="todo-app">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <TodoForm
       sort={sort} setSort={setSort} 
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
