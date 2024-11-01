import mongoose from "mongoose"
import express from 'express';
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import chalk from "chalk";
import cors from 'cors';

dotenv.config()

const app = express()
// cors allow to localhost
app.use(cors());

const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
.then(()=>console.log( chalk.gray.bgCyan("connection successful")))
.catch((err)=>console.log(err))



app.use(express.json())

app.get("/" , (req,res)=> {res.send("hello world")})
app.use('/api', router)

// app.post('/signup', signup);

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})