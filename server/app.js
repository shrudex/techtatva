import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose
  .connect(
    "mongodb+srv://dev:1234@cluster0.5prjkft.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3500",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(3000, () => {
  console.log("Server started on port 3000!!");
});
