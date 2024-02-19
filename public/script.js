let scoutName = localStorage.getItem("00scoutName");
localStorage.clear();
localStorage.setItem("00scoutName", scoutName);
function nextButton() {
  let scoutName = document.getElementById("scoutNameInput").value;
  let teamNumber = document.getElementById("teamNumberInput").value;
  let matchNumber = document.getElementById("matchNumberInput").value;
  let teamColour = document.getElementById("teamColourInput").value;
  localStorage.setItem("00scoutName", scoutName);
  localStorage.setItem("01teamNumber", teamNumber);
  localStorage.setItem("02matchNumber", matchNumber);
  localStorage.setItem("03teamColour", teamColour);
  window.location.href = "/initalPosition";
}

window.onload = () => {
  document.getElementById("scoutNameInput").value = scoutName;
};

function dataAnalysis() {
  window.location.href = "./dataAnalysis";
}
