import { configureStore } from "@reduxjs/toolkit";
import  todoReducer from './todosSlice'
import thunk from "redux-thunk";
export default configureStore({
    reducer: {
        todos:todoReducer
    }, 
    
})
