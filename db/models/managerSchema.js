import { Schema, model } from "mongoose";

const managerSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  conatact: {
    type: Number,
    required: true,
    trim: true,
  },
  turf: {
    type: Schema.Types.ObjectId,
    ref: "Turf",
  },
});

const Manager = model("Manager", managerSchema);

export default Manager;
