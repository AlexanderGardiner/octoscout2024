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
  window.location.href = "../submit";
}

function backButton() {
  window.location.href = "../teleop";
}

loadPreviousData();

function loadPreviousData() {
  if (localStorage.getItem("19endgamePark") != null) {
    document.getElementById("Park").value =
      localStorage.getItem("19endgamePark");
  }
  if (localStorage.getItem("20endgameOnstage") != null) {
    document.getElementById("Onstage").value =
      localStorage.getItem("20endgameOnstage");
  }
  if (localStorage.getItem("21endgameSpotlit") != null) {
    document.getElementById("Spotlit").value =
      localStorage.getItem("21endgameSpotlit");
  }

  if (localStorage.getItem("22endgameHarmony") != null) {
    document.getElementById("Harmony").value =
      localStorage.getItem("22endgameHarmony");
  }
}
