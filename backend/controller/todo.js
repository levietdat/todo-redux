import { TodoModel } from "../models/TodoModel.js"

export const getTodo = async  (req, res) => {
    try {
        const todo = await TodoModel.find()
        res.status(200).json(todo)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
export const createTodo = async (req, res) => {  
  try {
    const todoText = req.body;
    const todo = await TodoModel(todoText)
    res.status(200).json(todo)
    todo.save()
  }
   catch (err) {
    res.status(500).json(err)
   }
}
export const updateTodo = async (req, res) => {  
    try {
      const id = req.params.slug;
      const todo = await TodoModel.findOneAndUpdate({ id},req.body,{new:true})
      res.status(200).json(todo)
    }
     catch (err) {
      res.status(500).json(err)
     }
  }
  export const deleteTodo = async (req, res) => {  
    try {
      const id = req.params.id;
      const todo = await TodoModel.findOneAndDelete({ id},{new:true})
      res.status(200).json(todo)
    }
     catch (err) {
      res.status(500).json(err)
     }
  }