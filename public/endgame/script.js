function nextButton() {
  localStorage.setItem("17endgamePark", document.getElementById("Park").value);
  localStorage.setItem("18endgameOnstage", document.getElementById("Onstage").value);
  localStorage.setItem("19endgameSpotlit", document.getElementById("Spotlit").value);
  localStorage.setItem("20endgameHarmony", document.getElementById("Harmony").value);
  window.location.href = "../submit";
}

function backButton() {
  window.location.href = "../teleop";
}
