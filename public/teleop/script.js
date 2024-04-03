let notes = [];
let speakerNotes = 0;
let ampNotes = 0;
let ampSpeakerNotes = 0;
let trapNotes = 0;
let failedNotes = 0;
let collectedNotes = 0;
let intentionalDropsCount = 0;
function collectPiece(collectionLocation) {
  console.log(notes);
  notes.push(new Note(collectionLocation));
  collectedNotes += 1;
  updateNoteViewer();
}

function resultPiece(result, timestamp) {
  console.log(notes);
  notes[notes.length - 1].result = result;
  notes[notes.length - 1].timestamp = timestamp;
  updateNoteViewer();
  if (result == "speaker") {
    speakerNotes += 1;
  } else if (result == "amp") {
    ampNotes += 1;
  } else if (result == "ampSpeaker") {
    ampSpeakerNotes += 1;
  } else if (result == "trap") {
    trapNotes += 1;
  } else if (result == "failed") {
    failedNotes += 1;
  } else if (result == "intentionalDrop") {
    intentionalDropsCount += 1;
  }
}

function updateNoteViewer() {
  console.log(notes);
  let notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    let noteContainer = document.createElement("div");
    let note = document.createElement("h3");
    let deleteImage = document.createElement("img");
    deleteImage.src = "./deleteImage.png";
    deleteImage.width = "10";
    deleteImage.height = "10";
    deleteImage.style.right = "0px";
    note.style.display = "inline-block";
    deleteImage.style.display = "inline-block";
    note.style.margin = "10px";
    note.style.padding = "4px";
    note.style.borderRadius = "4px";
    notes[i].deleteImage = deleteImage;
    deleteImage.onclick = () => {
      collectedNotes -= 1;
      if (notes[i].result == "speaker") {
        speakerNotes -= 1;
      } else if (notes[i].result == "amp") {
        ampNotes -= 1;
      } else if (notes[i].result == "ampSpeaker") {
        ampSpeakerNotes -= 1;
      } else if (notes[i].result == "trap") {
        trapNotes -= 1;
      } else if (notes[i].result == "failed") {
        failedNotes -= 1;
      }
      notes.splice(i, 1);
      updateNoteViewer();
    };
    noteContainer.appendChild(note);
    noteContainer.appendChild(deleteImage);
    note.innerHTML = notes[i].result;
    if (notes[i].collectionLocation == "top") {
      note.style.backgroundColor = "blue";
    } else if (notes[i].collectionLocation == "middle") {
      note.style.backgroundColor = "green";
    } else if (notes[i].collectionLocation == "bottom") {
      note.style.backgroundColor = "red";
    } else if (notes[i].collectionLocation == "startingNote") {
      note.style.backgroundColor = "#f0c54f";
    }
    note.style.color = "white";

    notesContainer.appendChild(noteContainer);

    let notesViewer = document.getElementById("notesViewer");
    notesViewer.scrollTop = notesViewer.scrollHeight;
  }
}

class Note {
  constructor(collectionLocation) {
    this.collectionLocation = collectionLocation;
    this.result = "No Result";
  }
}

function backButton() {
  window.location.href = "../auto";
}

function nextButton() {
  let collectionLocations = [];
  let results = [];
  let timestamps = [];
  for (let i = 0; i < notes.length; i++) {
    collectionLocations.push(notes[i].collectionLocation);
    results.push(notes[i].result);
    timestamps.push(notes[i].timestamp);
  }

  localStorage.setItem("17teleopNotesLocations", collectionLocations);
  localStorage.setItem("18teleopNotesResults", results);
  localStorage.setItem("28teleopNotesTimestamps", timestamps);

  localStorage.setItem("12teleopCountCollected", collectedNotes);
  localStorage.setItem("13teleopCountSpeaker", speakerNotes);
  localStorage.setItem("14teleopCountAmp", ampNotes);
  localStorage.setItem("15teleopCountAmpSpeaker", ampSpeakerNotes);
  localStorage.setItem("16teleopCountFailed", failedNotes);

  localStorage.setItem("23trapNotes", trapNotes);
  localStorage.setItem("defenseBot", defenseCheckbox.checked);

  localStorage.setItem("35intentionalDropCount", intentionalDropsCount);

  window.location.href = "../endgame";
}

loadPreviousData();

function loadPreviousData() {
  let noteLocations = localStorage.getItem("17teleopNotesLocations").split(",");
  let noteResults = localStorage.getItem("18teleopNotesResults").split(",");
  let noteTimestamps = localStorage
    .getItem("28teleopNotesTimestamps")
    .split(",");
  for (let i = 0; i < noteLocations.length; i++) {
    if (noteLocations[i] != "") {
      collectPiece(noteLocations[i]);
      resultPiece(noteResults[i], noteTimestamps[i]);
    }
  }
  if (localStorage.getItem("defenseBot") == "true") {
    defenseCheckbox.checked = true;
  } else {
    defenseCheckbox.checked = false;
  }
}
