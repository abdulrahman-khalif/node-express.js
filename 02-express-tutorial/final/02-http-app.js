const express = require("express");
const app = express();

app.get((req, res) => {
  res.send("Home page");
});

app.listen(5000, () => {
  console.log("server is listen in port 5000");
});

//app.get
// app.post
//app.put
//app.delete
