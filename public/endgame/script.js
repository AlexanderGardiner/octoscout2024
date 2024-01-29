function nextButton() {
  localStorage.setItem("Park", document.getElementById("Park").value);
  localStorage.setItem("Onstage", document.getElementById("Onstage").value);
  localStorage.setItem("Spotlit", document.getElementById("Spotlit").value);
  localStorage.setItem("Harmony", document.getElementById("Harmony").value);
  window.location.href = "../submit";
}

function backButton() {
  window.location.href = "../teleop";
}
