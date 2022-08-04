import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (props.inputText === "") {
      return;
    } else {
      props.setTodos([
        ...props.todos,
        {
          text: props.inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      props.setInputText("");
    }
  };
  const sortHandler = (e) =>{
     props.setSort(e.target.value);
  }
  return (
    <form className="todo-form">
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="Enter your work..."
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-btn">
        ADD
      </button>
      <div className="select">
        <select onChange={sortHandler} name="todos" className="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
