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
  //backupJSON(data);
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

function backupJSON(data) {
  // Get the current date and time
  const currentDateTime = new Date();

  // Format the date and time components
  const year = currentDateTime.getFullYear();
  const month = String(currentDateTime.getMonth() + 1).padStart(2, "0");
  const day = String(currentDateTime.getDate()).padStart(2, "0");
  const hours = String(currentDateTime.getHours()).padStart(2, "0");
  const minutes = String(currentDateTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentDateTime.getSeconds()).padStart(2, "0");

  // Construct the human-readable formatted date and time
  const formattedDateTime = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  const filename =
    "./JSONBackups/" + formattedDateTime + "-" + data["00scoutName"];

  const jsonString = JSON.stringify(data);

  fs.writeFile(filename, jsonString, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
      return;
    }
    console.log("JSON file has been saved:", filename);
  });
}
