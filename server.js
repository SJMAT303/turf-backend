import express from "express";
import cors from "cors";
import mongoose from "./db/db.js";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(5000, () => {
  console.log("App Running @ http://localhost:5000/");
});
