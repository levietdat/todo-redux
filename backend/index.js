import express, { application, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todo from './routes/todo.js'
import mongoose from "mongoose";

const URL = "mongodb+srv://admin:l9EntVBPsAf79QLQ@cluster0.eivdlji.mongodb.net/?retryWrites=true&w=majority"
const app = express();
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connect to database")
})
.catch(err=>console.log(err))
const port = 3000 || process.env.PORT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());
app.use('/todo',todo)


app.listen(port,()=> {
    console.log("listening on port " + port);
})