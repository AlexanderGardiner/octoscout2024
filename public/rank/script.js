function nextButton() {
  let bestTeam = document.getElementById("bestTeamInput").value;
  let middleTeam = document.getElementById("middleTeamInput").value;
  let worstTeam = document.getElementById("worstTeamInput").value;
  localStorage.setItem("24bestTeamInput", bestTeam);
  localStorage.setItem("25middleTeamInput", middleTeam);
  localStorage.setItem("26worstTeamInput", worstTeam);
  window.location.href = "/submit";
}

function backButton() {
  window.location.href = "/endgame";
}
loadPreviousData();
function loadPreviousData() {
  document.getElementById("bestTeamInput").value = localStorage.getItem("24bestTeamInput");
  document.getElementById("middleTeamInput").value = localStorage.getItem("25middleTeamInput");
  document.getElementById("worstTeamInput").value = localStorage.getItem("26worstTeamInput");
}