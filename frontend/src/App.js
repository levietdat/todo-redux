import "./App.css";
import { Container } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./redux/todosSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <Container align="center" className="sm">
      <div style={{
        maxWidth: '500px',
        marginTop:"1rem",
        border: '2px solid #ccc',
        minHeight: '400px',
        paddingBottom: '1rem'
      }} className="app">
        <h1 style={{fontSize: '50px'}}>MY TODO APP</h1>
        <TodoForm  />
        <TodoList />
      </div>
    </Container>
  );
}

export default App;
