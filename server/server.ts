import express from "express";
import dotenv from "dotenv";
import connection from "./src/database/db";
import Route from "./src/routes/route";
import BodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(BodyParser.json({ extended: true }));
app.use(BodyParser.urlencoded({ extended: true }));
app.use("/", Route);

app.get("/", (req, res) => {
  res.send("Backend Connected!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connection();
