import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

mongoose.connect("mongodb+srv://bhatt8udgeet:543255@cluster1.5d1gdo1.mongodb.net/")


app.listen(3300, () => console.log("SERVER STARTED"));
