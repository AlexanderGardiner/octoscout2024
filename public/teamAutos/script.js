let team = new URL(window.location).searchParams.get("team");
document.getElementById("selectedTeam").value = team;
function updateTeam() {
  document.getElementById("graphContainer").innerHTML = "";
  var queryParams = new URLSearchParams(window.location.search);
  queryParams.set("team", document.getElementById("selectedTeam").value);
  history.replaceState(null, null, "?" + queryParams.toString());
  team = new URL(window.location).searchParams.get("team");
  fetch("../output.csv")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      displayData(csvJSON(data));
    });
}
updateTeam();

let notesLocations = {
  close1Blue: { x: 230, y: 190 },
  close2Blue: { x: 310, y: 190 },
  close3Blue: { x: 380, y: 190 },
  close1Red: { x: 230, y: 775 },
  close2Red: { x: 310, y: 775 },
  close3Red: { x: 380, y: 775 },
  middle1: { x: 50, y: 480 },
  middle2: { x: 140, y: 480 },
  middle3: { x: 230, y: 480 },
  middle4: { x: 320, y: 480 },
  middle5: { x: 410, y: 480 },
};

function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i]["01teamNumber"] == team) {
      console.log(data[i]);
      let displayCanvas = document.createElement("canvas");
      displayCanvas.width = 473;
      displayCanvas.height = 960;
      displayCanvas.style.margin = "20px";
      let displayCanvasCTX = displayCanvas.getContext("2d");
      displayCanvasCTX.drawImage(
        document.getElementById("fieldImage"),
        0,
        0,
        473,
        960
      );

      let autoCollectionLocations = data[i]["10autoNotesLocations"].split("-");
      console.log(autoCollectionLocations);
      let autoPlacementLocations = data[i]["11autoNotesResults"].split("-");
      let initalRobotPosition = data[i]["04startingRobotPosition"];
      let robotTeamColour = data[i]["03teamColour"];
      let startingX = 0;
      let startingY = 0;
      if (initalRobotPosition == "top") {
        startingX = 390;
      } else if (initalRobotPosition == "middle") {
        startingX = 310;
      } else if (initalRobotPosition == "bottom") {
        startingX = 230;
      }

      if (robotTeamColour == "Red") {
        startingY = 900;
      } else {
        startingY = 50;
      }
      let colors = generateColors(
        "#FFFFFF",
        "#000000",
        autoCollectionLocations.length
      );

      for (let j = 0; j < autoCollectionLocations.length; j++) {
        if (notesLocations[autoCollectionLocations[j]] != null) {
          displayCanvasCTX.beginPath();
          displayCanvasCTX.lineWidth = "7";

          if (j > 0) {
            displayCanvasCTX.moveTo(
              notesLocations[autoCollectionLocations[j - 1]].x,
              notesLocations[autoCollectionLocations[j - 1]].y
            );
          } else {
            displayCanvasCTX.fillStyle = "#bb9839";
            displayCanvasCTX.moveTo(startingX, startingY);
            displayCanvasCTX.fillRect(startingX - 10, startingY - 10, 20, 20);
          }
          displayCanvasCTX.fillStyle = colors[j];
          displayCanvasCTX.strokeStyle = colors[j];

          displayCanvasCTX.lineTo(
            notesLocations[autoCollectionLocations[j]].x,
            notesLocations[autoCollectionLocations[j]].y
          );
          displayCanvasCTX.stroke();
          displayCanvasCTX.closePath();

          displayCanvasCTX.fillRect(
            notesLocations[autoCollectionLocations[j]].x - 10,
            notesLocations[autoCollectionLocations[j]].y - 10,
            20,
            20
          );
        }
      }

      displayCanvasCTX.lineWidth = 1;
      displayCanvasCTX.font = "15px serif";
      displayCanvasCTX.textAlign = "center";
      colors = generateColors(
        "#000000",
        "#FF00FF",
        autoCollectionLocations.length
      );
      for (let j = 0; j < autoCollectionLocations.length; j++) {
        if (notesLocations[autoCollectionLocations[j]] != null) {
          displayCanvasCTX.fillStyle = colors[j];
          displayCanvasCTX.strokeStyle = colors[j];
          displayCanvasCTX.strokeText(
            autoPlacementLocations[j],
            notesLocations[autoCollectionLocations[j]].x,
            notesLocations[autoCollectionLocations[j]].y
          );
        }
      }

      document.getElementById("graphContainer").appendChild(displayCanvas);
    }
  }
}

function hexToRgb(hex) {
  // Convert a hex color string to an RGB color object
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function rgbToHex(rgb) {
  // Convert an RGB color object to a hex color string
  return (
    "#" +
    ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
  );
}

function back() {
  window.location.href = "../dataAnalysis";
}

function interpolateColor(colorStart, colorEnd, steps, step) {
  // Interpolate between two colors
  const start = hexToRgb(colorStart);
  const end = hexToRgb(colorEnd);
  const r = Math.round(start.r + ((end.r - start.r) * step) / steps);
  const g = Math.round(start.g + ((end.g - start.g) * step) / steps);
  const b = Math.round(start.b + ((end.b - start.b) * step) / steps);
  return rgbToHex({ r, g, b });
}

function generateColors(startColor, endColor, arrayLength) {
  // Generate an array of colors between startColor and endColor
  const colors = [];
  for (let i = 0; i < arrayLength; i++) {
    const step = i / (arrayLength - 1); // Calculate the step
    colors.push(interpolateColor(startColor, endColor, arrayLength - 1, i));
  }
  return colors;
}

function csvJSON(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result;
}
