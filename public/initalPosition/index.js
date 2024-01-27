function topRobotClick() {
  localStorage.setItem("startingRobotPosition", "top");
  nextPage();
}

function middleRobotClick() {
  localStorage.setItem("startingRobotPosition", "middle");
  nextPage();
}

function bottomRobotClick() {
  localStorage.setItem("startingRobotPosition", "bottom");
  nextPage();
}

function nextPage() {
  window.location.href = "../mobilityAuto";
}

function previousPage() {
  window.location.href = "/";
}
