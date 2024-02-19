let team = new URL(window.location).searchParams.get("team");
fetch("../output.csv")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    displayData(csvJSON(data));
  });

function displayData(data) {
  tempDiv = document.createElement("div");
  tempDiv.style.width = "100%";
  tempDiv.style.height = "40px";
  tempDiv.style.textAlign = "center";
  sectionTitle = document.createElement("h1");
  sectionTitle.innerHTML = "Team " + team;
  sectionTitle.style.color = "white";
  tempDiv.appendChild(sectionTitle);
  document.getElementById("graphContainer").appendChild(tempDiv);
  drawMetric(
    data,
    "Total Pieces",
    [
      "06autoCountSpeaker",
      "07autoCountAmp",
      "13teleopCountSpeaker",
      "14teleopCountAmp",
      "15teleopCountAmpSpeaker",
      "23trapNotes",
    ],
    [1, 1, 1, 1, 1, 1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  drawMetric(
    data,
    "Total Points",
    [
      "06autoCountSpeaker",
      "07autoCountAmp",
      "13teleopCountSpeaker",
      "14teleopCountAmp",
      "15teleopCountAmpSpeaker",
      "23trapNotes",
    ],
    [5, 2, 2, 1, 5, 5],
    [
      "09autoMobility",
      "19endgamePark",
      "20endgameOnstage",
      "21endgameSpotlit",
      "22endgameHarmony",
    ],
    [true, "Successful", "Successful", "Successful", "Successful"],
    [2, 1, 3, 1, 2],
    "Match Played",
    "Pieces"
  );
  tempDiv = document.createElement("div");
  tempDiv.style.width = "100%";
  tempDiv.style.height = "40px";
  tempDiv.style.textAlign = "center";
  sectionTitle = document.createElement("h1");
  sectionTitle.innerHTML = "Auto";
  sectionTitle.style.color = "white";
  tempDiv.appendChild(sectionTitle);
  document.getElementById("graphContainer").appendChild(tempDiv);
  drawMetric(
    data,
    "Total Pieces Auto",
    ["06autoCountSpeaker", "07autoCountAmp"],
    [1, 1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  drawMetric(
    data,
    "Total Points Auto",
    ["06autoCountSpeaker", "07autoCountAmp"],
    [5, 2],
    ["09autoMobility"],
    [true],
    [2],
    "Match Played",
    "Pieces"
  );
  drawMetric(
    data,
    "Collected Auto",
    ["05autoCountCollected"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );
  drawMetric(
    data,
    "Speaker Points Auto",
    ["06autoCountSpeaker"],
    [5],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Amp Points Auto",
    ["07autoCountAmp"],
    [2],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Failed Auto",
    ["08autoCountFailed"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  drawMetric(
    data,
    "Mobility Auto",
    [],
    [],
    ["09autoMobility"],
    ["true"],
    [2],
    "Match Played",
    "Points"
  );
  tempDiv = document.createElement("div");
  tempDiv.style.width = "100%";
  tempDiv.style.height = "40px";
  tempDiv.style.textAlign = "center";
  sectionTitle = document.createElement("h1");
  sectionTitle.innerHTML = "Teleop";
  sectionTitle.style.color = "white";
  tempDiv.appendChild(sectionTitle);
  document.getElementById("graphContainer").appendChild(tempDiv);
  drawMetric(
    data,
    "Total Pieces Teleop",
    ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
    [1, 1, 1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  drawMetric(
    data,
    "Total Points Teleop",
    ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
    [2, 1, 5],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );
  drawMetric(
    data,
    "Collected Teleop",
    ["12teleopCountCollected"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );
  drawMetric(
    data,
    "Speaker Points Teleop",
    ["13teleopCountSpeaker"],
    [2],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Amp Points Teleop",
    ["14teleopCountAmp"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Amplified Speaker Points Teleop",
    ["15teleopCountAmpSpeaker"],
    [5],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Failed Teleop",
    ["16teleopCountFailed"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  tempDiv = document.createElement("div");
  tempDiv.style.width = "100%";
  tempDiv.style.height = "40px";
  tempDiv.style.textAlign = "center";
  sectionTitle = document.createElement("h1");
  sectionTitle.innerHTML = "Endgame";
  sectionTitle.style.color = "white";
  tempDiv.appendChild(sectionTitle);
  document.getElementById("graphContainer").appendChild(tempDiv);
  drawMetric(
    data,
    "Total Pieces Endgame",
    ["23trapNotes"],
    [1],
    [],
    [],
    [],
    "Match Played",
    "Pieces"
  );

  drawMetric(
    data,
    "Total Points Endgame",
    ["23trapNotes"],
    [5],
    [
      "19endgamePark",
      "20endgameOnstage",
      "21endgameSpotlit",
      "22endgameHarmony",
    ],
    ["Successful", "Successful", "Successful", "Successful"],
    [1, 3, 1, 2],
    "Match Played",
    "Pieces"
  );
  drawMetric(
    data,
    "Endgame Park",
    [],
    [],
    ["19endgamePark"],
    ["Successful"],
    [1],
    "Match Played",
    "Points"
  );

  drawMetric(
    data,
    "Endgame Onstage",
    [],
    [],
    ["20endgameOnstage"],
    ["Successful"],
    [3],
    "Match Played",
    "Points"
  );

  drawMetric(
    data,
    "Endgame Spotlit",
    [],
    [],
    ["21endgameSpotlit"],
    ["Successful"],
    [1],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Endgame Harmony",
    [],
    [],
    ["22endgameHarmony"],
    ["Successful"],
    [2],
    "Match Played",
    "Points"
  );
  drawMetric(
    data,
    "Endgame Trap Points",
    ["23trapNotes"],
    [5],
    [],
    [],
    [],
    "Match Played",
    "Points"
  );
}
function makeLineChart(data, chartName, axisXLabel, axisYLabel) {
  let chartDiv = document.createElement("div");
  chartDiv.id = chartName;
  chartDiv.style.height = "200px";
  chartDiv.style.width = "30%";
  chartDiv.style.margin = "10px";
  document.getElementById("graphContainer").appendChild(chartDiv);

  var chart = new CanvasJS.Chart(chartName, {
    title: {
      text: chartName,
    },
    axisX: {
      title: axisXLabel,
    },
    axisY: {
      title: axisYLabel,
    },
    data: [
      {
        type: "spline",

        dataPoints: data,
      },
    ],
  });

  chart.render();
}

function drawMetric(
  data,
  chartName,
  jsonKeysNumber,
  pointsPerScoresNumber,
  jsonKeysString,
  correctValueString,
  pointsPerScoresString,
  axisXLabel,
  axisYLabel
) {
  let metrics = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["01teamNumber"] == team) {
      let metric = 0;
      for (let j = 0; j < jsonKeysNumber.length; j++) {
        metric += data[i][jsonKeysNumber[j]] * pointsPerScoresNumber[j];
      }

      for (let j = 0; j < jsonKeysString.length; j++) {
        if (data[i][jsonKeysString[j]] == correctValueString[j]) {
          metric += pointsPerScoresString[j];
        }
      }
      metrics.push({ y: metric });
    }
  }
  console.log(metrics);
  makeLineChart(metrics, chartName, axisXLabel, axisYLabel);
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
