async function submit() {
  console.log(localStorage);
  let response;
  try {
    response = await fetch("../submitData", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localStorage),
    });
  } catch (err) {
    backupData();
    alert("FAILED SUBMISSION");
  }
  if (response.status == 200) {
    backupData();
    alert("Match Submitted");
  }
}
function backupData() {
  let matchBackups = JSON.parse(localStorage.getItem("MatchBackups"));

  if (!matchBackups) {
    matchBackups = [];
  }

  localStorage.removeItem("MatchBackups");
  matchBackups.push(localStorage);

  localStorage.setItem("MatchBackups", JSON.stringify(matchBackups));
}

function scoutAgain() {
  window.location.href = "../";
}

function downloadJSON() {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(localStorage));
  var dlAnchorElem = document.createElement("a");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "Data.json");
  dlAnchorElem.click();
}

function backButton() {
  window.location.href = "../rank";
}
