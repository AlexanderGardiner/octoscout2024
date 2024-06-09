// Redirect functions
function visualize() {
  window.location.href = "../visualize";
}

function predict() {
  window.location.href = "../predict";
}

function specificTeam() {
  window.location.href =
    "../teamData?team=" + document.getElementById("selectedTeam").value;
}

function scout() {
  window.location.href = "../";
}
function specificTeamAuto() {
  window.location.href =
    "../teamAutos?team=" + document.getElementById("selectedTeam").value;
}
