import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Event from "./models/event.js";
import User from "./models/user.js";

const app = express();

await mongoose
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

app.get("/showusers", async (req, res) => {
  const users = await User.find({});
  if (!users) console.log("No users found");
  else res.send(users);
});

app.get("/showusers/:phone", async (req, res) => {
  const phone = Number(req.params.phone);
  const users = await User.find({ phone: phone });
  if (!users) console.log("No users found");
  else res.json(users);
});

app.get("/showevent/:id", async (req, res) => {
  const id = req.params.id;
  const event = await Event.find({ _id: id });
  if (!event) console.log("No event found");
  else res.json(event);
});

app.get("/showeventids", async (req, res) => {
  const ids = [];
  const events = await Event.find({});
  for (let event of events) {
    ids.push(event._id);
  }
  if (!events) console.log("No events found");
  else res.send(ids);
});

app.get("/showevents", async (req, res) => {
  const events = await Event.find({});
  if (!events) console.log("No events found");
  else res.send(events);
});

app.listen(3000, () => {
  console.log("Server started on port 3000!!");
});
