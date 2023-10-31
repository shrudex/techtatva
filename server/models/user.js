import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  regno: {
    type: Number,
    required: true,
  },
  events:{
    type: Array,
    ref: "Event",
  },
  college: String,
});

const User = mongoose.model("User", userSchema);

export default User;
