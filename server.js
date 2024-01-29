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

app.post('/submitData',
    (req, res) => {
        console.log(req.body);
        writeDataToCSV(req.body);
        
    })
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log("App is listening on port 80");
});

function writeDataToCSV(data) {
  let filePath = 'output.json';
  data.timestamp = new Date();
  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) throw err;
  
    let output;
  
    if (fileContent.length === 0) {
      output = '[' + JSON.stringify(data, null, 2) + ']\n';
    } else {
      const existingData = JSON.parse(fileContent);
      existingData.push(data);
      output = JSON.stringify(existingData, null, 2) + '\n';
    }
  
    fs.writeFile(filePath, output, (err) => {
      if (err) throw err;
      console.log('Data appended to output.csv.');
    });
  });
  
}




