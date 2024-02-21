async function submit() {
    console.log(localStorage);
    const response = await fetch("../submitData", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localStorage),
    });
    if (response.status == 200) {
      alert("Match Submitted");
    }
   
}

function scoutAgain() {
  window.location.href = "../";
}

function downloadJSON() {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage));
  var dlAnchorElem = document.createElement("a");
  document.body.appendChild(dlAnchorElem);
  dlAnchorElem.setAttribute("href",     dataStr     );
  dlAnchorElem.setAttribute("download", "Data.json");
  dlAnchorElem.click();
}