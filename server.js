require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const DBconnect = require("./Database/db");
const Router = require("./Routes/Router");
const Port = process.env.PORT || 5000;

const cors = require("cors");
const dbUrl =
  "mongodb+srv://sushilkc:kc12526688@cluster0.5khn2mb.mongodb.net/Flightfare?retryWrites=true&w=majority";
app.use(cors());
app.use("/api/flight", Router);
DBconnect(dbUrl);

app.use(express.static(path.join(__dirname, "./Client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Client/dist/index.html"));
});

app.listen(Port, (err) => {
  if (err) {
    throw err;
  }
});
