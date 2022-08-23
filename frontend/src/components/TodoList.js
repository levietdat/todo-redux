import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem completed={todo.completed} index={index} id={todo.id} todo={todo.todo} key={todo.id} />
        );
      })}
    </div>
  );
};

export default TodoList;
