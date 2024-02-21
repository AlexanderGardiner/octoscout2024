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