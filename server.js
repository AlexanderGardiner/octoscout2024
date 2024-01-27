const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log("App is listening on port 80");
});
