import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
     name:'todos',
     initialState:{
        status:'idle',
        todos:[]
     },
     reducers: {
        // addTodos: (state ,action) =>  {
        //     const newTodo = {
        //         id:Date.now(),
        //         todo:action.payload.todo,
        //         completed:false
        //     }
        //     state.todos.push(newTodo);
        // }
     },
     extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending,(state,action)=> {
            state.status = 'loading';
        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=> {
            state.status = 'idle';
            state.todos=action.payload
        })
        builder.addCase(addNewTodos.fulfilled,(state,action)=> {
            state.status = 'loading';
            state.todos.push(action.payload)
        })
        builder.addCase(updateTodo.fulfilled,  (state, action )=> {
            state.status = 'updated';
        })
        builder.addCase(deleteTodo.fulfilled,  (state, action )=> {
            state.status = 'updated';
        })
     }
})

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const res = await fetch('http://localhost:3000/todo')
    const data = await res.json()
    return data
})

export const addNewTodos = createAsyncThunk('addTodos', async (newTodo) => {
    const res = await fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
        },
        body:JSON.stringify(newTodo)
    })
    const data = await res.json()
    return data
})
export const updateTodo = createAsyncThunk('updateTodo', async (payload)=> {
    const res = await fetch(`http://localhost:3000/todo/${payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',   
        },
        body:JSON.stringify(payload)
    })
    const data = await res.json()
   return data

    // return data
})
export const deleteTodo = createAsyncThunk('deleteTodo', async (payload)=> {
    const res = await fetch(`http://localhost:3000/todo/${payload.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',   
        },
        body:JSON.stringify(payload)
    })
    const data = await res.json()
   return data
})







export const { addTodo }  = todoSlice.actions;
export default todoSlice.reducer;