const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const features = require("./data/features.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef's Corner is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find(d => d.id === id);
   res.send(selectedChef);
});

app.get("/features", (req, res) => {
  res.send(features);
});

app.listen(port, () => {
  console.log(`Chef's Corner is running on port number:${port}`);
});
