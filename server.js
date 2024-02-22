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

app.post("/submitData", (req, res) => {
  console.log(req.body);
  writeDataToCSV(req.body);
  res.status(200);
  res.send();
});
const PORT = 9084;
app.listen(PORT, () => {
  console.log("App is listening on port 9084");
});

function writeDataToCSV(data) {
  let filePath = "public/output.csv";
  data.timestamp = new Date();
  const sortedKeys = Object.keys(data).sort();

  // Step 3: Create a new object with sorted keys
  const sortedData = [];
  sortedKeys.forEach((key) => {
    console.log(data[key]);
    sortedData.push(data[key].toString().replaceAll(",", "-"));
  });
  fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) throw err;

    let output;

    if (fileContent.length === 0) {
      let headers = sortedKeys;
      output = headers + "\n" + sortedData;
    } else {
      output = fileContent + "\n" + sortedData;
    }

    fs.writeFile(filePath, output, (err) => {
      if (err) throw err;
      console.log("Data appended to output.json.");
    });
  });
}
