import User from "./models/user.js";
import mongoose from "mongoose";
import Event from "./models/event.js";

await mongoose
  .connect(
    "mongodb+srv://dev:1234@cluster0.5prjkft.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

const ids = [];
const events = await Event.find({});
for (let event of events) {
  ids.push(event._id);
}
const seedDB = async () => {
  // await User.deleteMany({});
  // console.log("Deleted all users...");
  const eventstaken = [];
  const randomNumber = Math.floor(Math.random() * 4);
  for (let i = 0; i < randomNumber; i++) {
    eventstaken.push(ids[Math.floor(Math.random() * 10)]);
  }
  for (let i = 0; i < 10; i++) {
    const user = new User({
      name: `User${i}`,
      phone: Math.floor(Math.random() * 1000000000),
      email: `user${i}@example.com`,
      regno: Math.floor(Math.random() * 1000),
      college: "Manipal Institute of Technology",
      events: eventstaken,
    });
    await user.save();
  }
  console.log("Seeded 10 new users!");
};

seedDB();


