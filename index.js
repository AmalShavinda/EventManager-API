import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import eventRoute from "./routes/event.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Conntected to mongoDB")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconneted", () => {
    console.log("MongoDB Disconneted")
})

//Middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/event', eventRoute)

app.use((err, req, res, next) =>  {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Somthing went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, () => {
    connect()
    console.log("Connected to backend")
})