import "./App.css";
import { Box, CircularProgress, Container } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./redux/todosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { style } from "./styles/index";

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(state=>state.todos.status);
  useEffect(() => {
   
      dispatch(fetchTodos())
 
  }, [dispatch])
  return (
    <Container  align="center" className="sm">
      <Box className={status === "pending" ? "":"hide"}  sx={style.progress}>
      <CircularProgress color="inherit" sx={{marginTop:"25%"}} />
    </Box>
      <div style={style.container} className="app">
        <h1 style={{fontSize: '50px'}}>MY TODO APP</h1>
        <TodoForm  />
        <TodoList />
      </div>
    </Container>
  );
}

export default App;
