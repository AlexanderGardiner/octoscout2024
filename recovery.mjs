import fs from "fs/promises";
import fetch from "node-fetch";
import path from "path";

const folderPath = "./JSONBackups"; // Replace this with the actual path to your folder containing JSON files
const url = "http://team9084.com:9084/submitData"; // Replace this with the actual API endpoint

// Generates the data from csv backups
async function readAndFetchJSONFiles(folderPath) {
  try {
    const files = await fs.readdir(folderPath);
    const fileContents = [];
    for (const fileName of files) {
      const filePath = path.join(folderPath, fileName);
      console.log("Reading file:", filePath);
      const data = await fs.readFile(filePath, "utf-8");
      console.log("Sending fetch request for:", filePath);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      fileContents.push(response);
    }
    return fileContents;
  } catch (err) {
    console.error("Error reading and fetching JSON files:", err);
    throw err;
  }
}

// Call the main function to start the process
readAndFetchJSONFiles(folderPath);
