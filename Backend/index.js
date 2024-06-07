import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js";


const app = express();
app.use(cors())
dotenv.config();
const port = process.env.PORT || 5000;
const connection = async () => {
  try {
    const isConnected = await mongoose.connect(
      "mongodb://127.0.0.1:27017/kitabSaansar"
    );
    if (isConnected) {
      console.log("connected  to mongodb");
    }
  } catch (err) {
    console.log(err);
  }  
};
connection();

app.use("/book", bookRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
