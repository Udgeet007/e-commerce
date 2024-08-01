import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://optimus89:543255@cluster47.aak3bo0.mongodb.net/cluster47")

app.listen(3300, () => console.log("SERVER STARTED"));
