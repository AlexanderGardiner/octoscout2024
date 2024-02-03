function nextButton() {
  localStorage.setItem("19endgamePark", document.getElementById("Park").value);
  localStorage.setItem("20endgameOnstage", document.getElementById("Onstage").value);
  localStorage.setItem("21endgameSpotlit", document.getElementById("Spotlit").value);
  localStorage.setItem("22endgameHarmony", document.getElementById("Harmony").value);
  window.location.href = "../submit";
}

function backButton() {
  window.location.href = "../teleop";
}
