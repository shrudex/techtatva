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
    //array of object ids
    type: Array,
  },
  college: String,
});

const User = mongoose.model("User", userSchema);

export default User;
