import React from "react";
import { ListItemText, ListItem, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { updateTodo, fetchTodos, deleteTodo } from "../redux/todosSlice";
import CachedIcon from "@mui/icons-material/Cached";
import { style } from "../styles/index";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const handleUpdate = async () => {
    try {
      await dispatch(updateTodo({ id: props.id, completed: !props.completed }));
      dispatch(fetchTodos());
    } catch (err) {
      console.error(err);
    }
  };
  const handleDelete = async () => {
    try {
      await dispatch(deleteTodo({ id: props.id }));
      dispatch(fetchTodos());
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      key={props.id}
      className={props.completed ? "active" : ""}
      style={style.todo}
    >
      <ListItem align="flex-start">
        <ListItemText>
          <Typography
            style={{
              color: `${props.completed ? "white" : ""}`,
              overflow: "hidden",
            }}
            variant="subtitle1"
          >
            {props.todo}
          </Typography>
        </ListItemText>
        {!props.completed && (
          <IconButton
            style={{ color: "black" }}
            onClick={handleUpdate}
            aria-label="default"
          >
            <DoneIcon />
          </IconButton>
        )}
        {props.completed && (
          <IconButton onClick={handleUpdate} aria-label="default">
            <CachedIcon
              style={{ color: `${props.completed ? "white" : ""}` }}
            />
          </IconButton>
        )}
        <IconButton
          onClick={handleDelete}
          style={{ color: "#ec4743" }}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
};

export default TodoItem;
