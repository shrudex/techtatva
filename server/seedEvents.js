import Event from "./models/event.js";
import mongoose from "mongoose";

await mongoose
  .connect(
    "mongodb+srv://dev:1234@cluster0.5prjkft.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

const seedDB = async () => {
  await Event.deleteMany({});
  console.log("Deleted all events...");
  for (let i = 0; i < 10; i++) {
    const event = new Event({
      name: `Event${i}`,
      description: `This is the description for event ${i}`,
      organiser: `Organizer${i}`,
      date: 2023 - 10 - 24,
      venue: "Quadrangle",
      teamSize: 5,
    });
    await event.save();
  }
  console.log("Seeded 10 new events!");
};
seedDB();
