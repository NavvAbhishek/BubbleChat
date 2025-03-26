import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"

const app = express()

const PORT = process.env.PORT
//? Allow you to extract the JSON data from body
app.use (express.json()) 
//? Allow you to parse the cookies
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
    connectDB()
})