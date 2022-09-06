import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem completed={todo.completed}  id={todo.id} todo={todo.todo} key={index} />
        );
      })}
    </div>
  );
};

export default TodoList;
