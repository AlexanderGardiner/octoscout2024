let startingRobotPosition = "Not Set";
if (localStorage.getItem("teamColour") == "Red") {
  document.getElementById("fieldImage").src = "./redFieldImage.png";
}
function selectPosition(position) {
  startingRobotPosition = position;
  nextPage();
}

function nextPage() {
  localStorage.setItem("startingRobotPosition", startingRobotPosition);
  window.location.href = "../auto";
}

function backButton() {
  window.location.href = "/";
}
