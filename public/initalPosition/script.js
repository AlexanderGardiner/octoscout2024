let startingRobotPosition = "Not Set";
if (localStorage.getItem("03teamColour") == "Red") {
  document.getElementById("fieldImage").src = "./redFieldImage.png";
}
function selectPosition(position) {
  startingRobotPosition = position;
  nextPage();
}

function nextPage() {
  localStorage.setItem("04startingRobotPosition", startingRobotPosition);
  window.location.href = "../auto";
}

function backButton() {
  window.location.href = "/";
}
