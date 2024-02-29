fetch("../output.csv")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    jsonData = csvJSON(data);
  });
let jsonData;
let blueTeam1 = document.getElementById("blueTeam1").value;
let blueTeam2 = document.getElementById("blueTeam2").value;
let blueTeam3 = document.getElementById("blueTeam3").value;

let redTeam1 = document.getElementById("redTeam1").value;
let redTeam2 = document.getElementById("redTeam2").value;
let redTeam3 = document.getElementById("redTeam3").value;
function make100Chart(
  redTeam1Data,
  redTeam2Data,
  redTeam3Data,
  blueTeam1Data,
  blueTeam2Data,
  blueTeam3Data
) {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Predictions",
    },
    data: [
      {
        type: "stackedBar100",
        showInLegend: true,
        name: blueTeam1,
        color: "#0000ff",
        dataPoints: blueTeam1Data,
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: blueTeam2,
        color: "#8888ff",
        dataPoints: blueTeam2Data,
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: blueTeam3,
        color: "#000090",
        dataPoints: blueTeam3Data,
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: redTeam1,
        color: "#ff0000",
        dataPoints: redTeam1Data,
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: redTeam2,
        color: "#ff8888",
        dataPoints: redTeam2Data,
      },
      {
        type: "stackedBar100",
        showInLegend: true,
        name: redTeam3,
        color: "#900000",
        dataPoints: redTeam3Data,
      },
    ],
  });

  chart.render();
}
function updateData() {
  drawData(jsonData);
}
function drawData(data) {
  let redTeam1Data = [];
  let redTeam2Data = [];
  let redTeam3Data = [];

  let blueTeam1Data = [];
  let blueTeam2Data = [];
  let blueTeam3Data = [];
  blueTeam1 = document.getElementById("blueTeam1").value;
  blueTeam2 = document.getElementById("blueTeam2").value;
  blueTeam3 = document.getElementById("blueTeam3").value;

  redTeam1 = document.getElementById("redTeam1").value;
  redTeam2 = document.getElementById("redTeam2").value;
  redTeam3 = document.getElementById("redTeam3").value;
  redTeam1Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      redTeam1,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam1Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      redTeam1,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam1Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      redTeam1,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  redTeam1Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      redTeam1,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });

  redTeam1Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      redTeam1,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });

  redTeam1Data.push({
    label: "Elo",
    y: getTeamElo(redTeam1, jsonData),
  });

  redTeam2Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      redTeam2,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam2Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      redTeam2,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam2Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      redTeam2,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  redTeam2Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      redTeam2,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });

  redTeam2Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      redTeam2,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });

  redTeam2Data.push({
    label: "Elo",
    y: getTeamElo(redTeam2, jsonData),
  });

  redTeam3Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      redTeam3,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam3Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      redTeam3,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  redTeam3Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      redTeam3,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  redTeam3Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      redTeam3,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });

  redTeam3Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      redTeam3,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });

  redTeam3Data.push({
    label: "Elo",
    y: getTeamElo(redTeam3, jsonData),
  });

  blueTeam1Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      blueTeam1,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  blueTeam1Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      blueTeam1,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  blueTeam1Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      blueTeam1,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  blueTeam1Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      blueTeam1,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });

  blueTeam1Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      blueTeam1,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });
  blueTeam1Data.push({
    label: "Elo",
    y: getTeamElo(blueTeam1, jsonData),
  });

  blueTeam2Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      blueTeam2,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  blueTeam2Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      blueTeam2,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  blueTeam2Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      blueTeam2,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  blueTeam2Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      blueTeam2,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });
  blueTeam2Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      blueTeam2,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });
  blueTeam2Data.push({
    label: "Elo",
    y: getTeamElo(blueTeam2, jsonData),
  });

  blueTeam3Data.push({
    label: "Mean Points",
    y: getMeanTeamPoints(
      blueTeam3,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });

  blueTeam3Data.push({
    label: "Median Points",
    y: getMedianTeamPoints(
      blueTeam3,
      data,
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
      ["true", "Successful", "Successful", "Successful", "Successful"],
      [2, 1, 3, 1, 2]
    ),
  });
  blueTeam3Data.push({
    label: "Auto Points",
    y: getMedianTeamPoints(
      blueTeam3,
      data,
      ["06autoCountSpeaker", "07autoCountAmp"],
      [5, 2],
      ["09autoMobility"],
      ["true"],
      [2]
    ),
  });

  blueTeam3Data.push({
    label: "Teleop Points",
    y: getMedianTeamPoints(
      blueTeam3,
      data,
      ["13teleopCountSpeaker", "14teleopCountAmp", "15teleopCountAmpSpeaker"],
      [2, 1, 5],
      [],
      [],
      []
    ),
  });
  blueTeam3Data.push({
    label: "Endgame Points",
    y: getMedianTeamPoints(
      blueTeam3,
      data,
      ["23trapNotes"],
      [5],
      [
        "19endgamePark",
        "20endgameOnstage",
        "21endgameSpotlit",
        "22endgameHarmony",
      ],
      ["Successful", "Successful", "Successful", "Successful"],
      [1, 3, 1, 2]
    ),
  });
  blueTeam3Data.push({
    label: "Elo",
    y: getTeamElo(blueTeam3, jsonData),
  });

  make100Chart(
    redTeam1Data,
    redTeam2Data,
    redTeam3Data,
    blueTeam1Data,
    blueTeam2Data,
    blueTeam3Data
  );
}

function getTeamPoints(
  team,
  data,
  jsonKeysNumber,
  pointsPerScoresNumber,
  jsonKeysString,
  correctValueString,
  pointsPerScoresString
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
      metrics.push(metric);
    }
  }
  return metrics;
}

function getMeanTeamPoints(
  team,
  data,
  jsonKeysNumber,
  pointsPerScoresNumber,
  jsonKeysString,
  correctValueString,
  pointsPerScoresString
) {
  let metrics = getTeamPoints(
    team,
    data,
    jsonKeysNumber,
    pointsPerScoresNumber,
    jsonKeysString,
    correctValueString,
    pointsPerScoresString
  );

  let averageMetric = 0;
  for (let i = 0; i < metrics.length; i++) {
    averageMetric += metrics[i];
  }
  averageMetric = averageMetric / metrics.length;
  if (isNaN(averageMetric)) {
    averageMetric = 0;
  }
  return averageMetric;
}

function getMedianTeamPoints(
  team,
  data,
  jsonKeysNumber,
  pointsPerScoresNumber,
  jsonKeysString,
  correctValueString,
  pointsPerScoresString
) {
  let metrics = getTeamPoints(
    team,
    data,
    jsonKeysNumber,
    pointsPerScoresNumber,
    jsonKeysString,
    correctValueString,
    pointsPerScoresString
  );

  return quartiles(metrics).Q2;
}

function getTeamElo(team, data) {
  console.log(data);
  console.log(calculateElos(data));
  return calculateElos(data)[team];
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

function back() {
  window.location.href = "../dataAnalysis";
}

function quartiles(values) {
  // Make a copy of the array to avoid altering the original
  var sortedValues = values.slice().sort((a, b) => a - b);

  var length = sortedValues.length;
  var half = Math.floor(length / 2);

  // Compute Q2 (median)
  var q2;
  if (length % 2 === 0) {
    // If the array has an even number of elements
    q2 = (sortedValues[half - 1] + sortedValues[half]) / 2.0;
  } else {
    // If the array has an odd number of elements
    q2 = sortedValues[half];
  }

  // Compute Q1 (lower quartile)
  var q1;
  if (half % 2 === 0) {
    // If the lower half has an even number of elements
    q1 =
      (sortedValues[Math.floor(half / 2) - 1] +
        sortedValues[Math.floor(half / 2)]) /
      2.0;
  } else {
    // If the lower half has an odd number of elements
    q1 = sortedValues[Math.floor(half / 2)];
  }

  // Compute Q3 (upper quartile)
  var q3;
  if ((length - half) % 2 === 0) {
    // If the upper half has an even number of elements
    q3 =
      (sortedValues[half + Math.floor((length - half) / 2) - 1] +
        sortedValues[half + Math.floor((length - half) / 2)]) /
      2.0;
  } else {
    // If the upper half has an odd number of elements
    q3 = sortedValues[half + Math.floor((length - half) / 2)];
  }

  return {
    Q1: q1,
    Q2: q2,
    Q3: q3,
  };
}
