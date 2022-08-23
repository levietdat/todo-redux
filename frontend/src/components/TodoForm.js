import React, { useState } from "react";
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { addNewTodos } from "../redux/todosSlice";

import { useDispatch } from "react-redux";
const TodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleAddTodo = () => {
    if (value !== "") {
      dispatch(
        addNewTodos({
          id: Date.now(),
          todo: value,
          completed: false,
        })
      );
    }
    setValue("");
  };
  return (
    <Container style={{align:"center"}}>
      <TextField
        style={{}}
        onChange={handleChangeValue}
        value={value}
        id="outlined-basic"
        label="Enter your todo"
        variant="outlined"
      />
      
      <Button
      style={{alignSelf:"center",
      marginTop:"5px",
      marginLeft:"5px",
      }}
        onClick={handleAddTodo}
        size="large"
        variant="contained"
        color="success"
      >
        ADD
      </Button>
    </Container>
  );
};

export default TodoForm;
