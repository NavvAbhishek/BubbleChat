import express from "express"
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js"

const app = express()

const PORT = process.env.PORT
//? Allow you to extract the JSON data from body
app.use (express.json()) 

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
    connectDB()
})