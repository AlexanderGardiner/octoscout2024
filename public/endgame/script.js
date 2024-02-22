function nextButton() {
  localStorage.setItem("19endgamePark", document.getElementById("Park").value);
  localStorage.setItem(
    "20endgameOnstage",
    document.getElementById("Onstage").value
  );
  localStorage.setItem(
    "21endgameSpotlit",
    document.getElementById("Spotlit").value
  );
  localStorage.setItem(
    "22endgameHarmony",
    document.getElementById("Harmony").value
  );
  window.location.href = "../rank";
}

function backButton() {
  window.location.href = "../teleop";
}

loadPreviousData();

function loadPreviousData() {
  document.getElementById("Park").value = localStorage.getItem("19endgamePark");
  document.getElementById("Onstage").value = localStorage.getItem("20endgameOnstage");
  document.getElementById("Spotlit").value = localStorage.getItem("21endgameSpotlit");
  document.getElementById("Harmony").value = localStorage.getItem("22endgameHarmony");
}

