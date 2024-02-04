import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


// Variables
const app = express();
const PORT = process.env.PORT || 5000;

// Configurations
dotenv.config();

// Middlewares

app.use(express.json()); // to parse the incomming req with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//Test API - testing only
app.get("/", (req,res)=> {
    res.send("Server is Ready!")
});


app.listen(PORT, () => {
    //Connect DB
    connectMongoDB();
    //Confirm Server is running on PORT
    console.log(`Server Running on port ${PORT}`)
});
