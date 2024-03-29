import { Schema, model } from "mongoose";

const managerSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Manager = model("Manager", managerSchema);

export default Manager;
