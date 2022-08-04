import React, { useState } from "react";
import Todo from "./Todo";
function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filterTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              setTodos={props.setTodos}
              id={todo.id}
              todos={props.todos}
              text={todo.text}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
