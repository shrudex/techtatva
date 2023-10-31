import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: String,
  venue: String,
  teamSize: Number,
  image:String,
  status:Boolean,
  prize:Number,
});

export default mongoose.model("Event", eventSchema);
