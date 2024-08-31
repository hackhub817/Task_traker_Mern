const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const auth = require("./routers/auth");
const list = require("./routers/list");

app.use(express.json());
app.use(cors());
// mongoose.connect("mongodb://127.0.0.1/blog").then(() => {
//   console.log("Db connected");
// });
mongoose
  .connect(
    "mongodb+srv://piyushguptaji123:test123@cluster0.pd63k.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0" // Add these options
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(5000, () => {
  console.log("App is running at port 5000");
});
