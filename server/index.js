const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


const url =
  "mongodb+srv://priya_saw:wK4rooadohOPHM1R@cluster0.lw1ofgj.mongodb.net/JustTweet";
mongoose
  .connect(url)
  .then(async () => {
    console.log("database is connected");
  })
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
