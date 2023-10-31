import User from "./models/user.js";
import mongoose from "mongoose";

await mongoose
  .connect(
    "mongodb+srv://dev:1234@cluster0.5prjkft.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

const seedDB = async () => {
  await User.deleteMany({});
  console.log("Deleted all users...");
  for (let i = 0; i < 10; i++) {
    const user = new User({
      name: `User${i}`,
      phone: Math.floor(Math.random() * 1000000000),
      email: `user${i}@example.com`,
      regno: Math.floor(Math.random() * 1000),
      college: "Manipal Institute of Technology",
    });
    await user.save();
  }
  console.log("Seeded 10 new users!");
};

seedDB();
