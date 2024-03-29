import { Schema, model } from "mongoose";

const turfSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    games: {
      type: String,
      required: true,
      trim: true,
    },
    // coaching: {},
    // renting: {},
    // cart: {},
  },
  { timeStamps: true }
);

const Turf = model("Turf", turfSchema);

export default Turf;
