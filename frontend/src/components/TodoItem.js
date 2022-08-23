import React, { useEffect, useState } from 'react'
import { ListItemText, ListItem, IconButton, Typography, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch } from "react-redux";
import { updateTodo, fetchTodos, deleteTodo } from '../redux/todosSlice';
import CachedIcon from '@mui/icons-material/Cached';
import { unwrapResult } from '@reduxjs/toolkit';
const TodoItem = (props) => {
    const dispatch = useDispatch()
    const handleUpdate = async () => {
        try {
             await dispatch(updateTodo(
                  {id:props.id,completed:!props.completed}
            ))
            dispatch(fetchTodos());

        }
        catch (err) { console.error(err) }
    }
    const handleDelete = async () => {
        try {
            await dispatch(deleteTodo({id:props.id}))
            dispatch(fetchTodos());
        }
        catch (err) { console.error(err) }
    }
    return (
        <div key={props.id} className={props.completed ? 'active' : ''} style={{
            width: '70%',
            boxShadow: '0 0 10px #ccc',
            marginTop: '10px',
            borderRadius: '4px',
        }}>
            <ListItem align="flex-start">
                <ListItemText>
                    <Typography style={{ color:`${props.completed ? 'white' : ''}`, overflow: 'hidden', }} variant="subtitle1" >
                        {props.todo}
                    </Typography>
                </ListItemText>
                <IconButton  style={{ color:'black'}}  class={props.completed ? 'hide_btn-done' : 'done-btn'}  onClick={handleUpdate}  aria-label="default">
                    <DoneIcon />
                </IconButton>
                <IconButton   class={props.completed ? 'refresh-btn' : 'hide_btn-refresh'}  onClick={handleUpdate}   aria-label="default">
                        <CachedIcon style={{ color:`${props.completed ? 'white' : ''}`}} />
                    </IconButton>
                <IconButton onClick={handleDelete} style={{ color: '#ec4743' }} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItem>

        </div>
    )

}

export default TodoItem