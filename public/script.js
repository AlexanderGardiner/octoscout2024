let scoutName = localStorage.getItem("scoutName");
localStorage.clear();
localStorage.setItem("scoutName", scoutName);
function nextButton() {
  let scoutName = document.getElementById("scoutNameInput").value;
  let teamNumber = document.getElementById("teamNumberInput").value;
  let matchNumber = document.getElementById("matchNumberInput").value;
  let teamColour = document.getElementById("teamColourInput").value;
  localStorage.setItem("scoutName", scoutName);
  localStorage.setItem("teamNumber", teamNumber);
  localStorage.setItem("matchNumber", matchNumber);
  localStorage.setItem("teamColour", teamColour);
  window.location.href = "/initalPosition";
}

window.onload = () => {
  document.getElementById("scoutNameInput").value = scoutName;
};
