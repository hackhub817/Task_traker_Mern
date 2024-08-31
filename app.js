const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const auth = require("./routers/auth");
const list = require("./routers/list");
const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

console.log(process.env.DB_URL);
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(3000, () => {
  console.log("App is running at port 3000");
});
