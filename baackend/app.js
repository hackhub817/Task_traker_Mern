const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const auth = require("./routers/auth");
const list = require("./routers/list");

app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://piyushguptaji123:Password@cluster0.mioqaa3.mongodb.net/"
  )
  .then(() => {
    console.log("Db connected");
  });
// console.log(:)

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(5000, () => {
  console.log("App is running at port 5000");
});
