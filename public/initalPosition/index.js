let startingRobotPosition = "Not Set";
function selectPosition(position) {
  startingRobotPosition = position;
}

function nextButton() {
  localStorage.setItem("startingRobotPosition", startingRobotPosition);
  window.location.href = "../auto";
}

function backButton() {
  window.location.href = "/";
}
