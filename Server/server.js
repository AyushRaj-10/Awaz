import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './config/dbConnection.js'
import router from './routes/user.routes.js'
import postRouter from "./routes/post.routes.js";


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

connectDB()

app.use('/user/api',router)
app.use('/user/post',postRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
  