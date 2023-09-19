const express = require("express");
const port = 3030;
const app = express();

app.use(express.static("Public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log("server is running on port " + port);
});
