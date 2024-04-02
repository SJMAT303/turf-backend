import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    trim: true,
  },
});

const User = model("User", userSchema);

export default User;
