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
    manager: {
      type: Schema.Types.ObjectId,
      ref: "Manager",
    },
    // rating: {},
    // location: {},
    // amenities:{},
    // about:{},
    // timing:{},
    // slot:{},
    // coaching: {},
    // equipmentsrenting: {},
    // cart: {},
  },
  { timeStamps: true }
);

const Turf = model("Turf", turfSchema);

export default Turf;
