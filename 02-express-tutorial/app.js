const express = require("express");
const path = require("path");
const app = express();

//set static and middleware
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("server is listen in port 3000");
});

//app.get
// app.post
//app.put
//app.delete
//app.all
//app.listen
//app.use
