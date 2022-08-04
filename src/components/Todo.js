import React from "react";
import TodoList from "./TodoList";
const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((item) => item.id !== props.todo.id));
  };
  const completedHandler = () => {
      props.setTodos(props.todos.map(item => {
        if(item.id === props.todo.id) {
          return {
            ...item, completed:!item.completed
          }
        }
        else
        return item;
      }
      ))
  }
  return (
    <div className="todo">
      <li className={`todo-item  ${props.todo.completed? "completed":""} `}>{props.text}</li>
      <button onClick={completedHandler} className="completed-btn">
        <i className="fa-solid fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="delete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
