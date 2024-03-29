import express from "express";
import Turf from "../../db/models/turfSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Turf.create(body);
  res.status(201).json({ message: "Turf Added Successfully" });
});

router.get("/", async (req, res) => {
  const turf = await Turf.find();
  res.status(200).json(turf);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Turf.findByIdAndDelete(id);
  res.status(201).json({ message: "Turf Deleted Successfully" });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  await Turf.findByIdAndUpdate(id, body);
  res.status(200).json({ message: "Details Updated" });
});

export default router;
