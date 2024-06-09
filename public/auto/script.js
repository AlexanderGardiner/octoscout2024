let notes = [];
let speakerNotes = 0;
let ampNotes = 0;
let failedNotes = 0;
let collectedNotes = 0;
let middle1Count = 0;
let middle2Count = 0;
let middle3Count = 0;
let middle4Count = 0;
let middle5Count = 0;

// Collects a note
function collectPiece(collectionLocation) {
  console.log(notes);
  if (collectionLocation == "middle1") {
    middle1Count += 1;
  } else if (collectionLocation == "middle2") {
    middle2Count += 1;
  } else if (collectionLocation == "middle3") {
    middle3Count += 1;
  } else if (collectionLocation == "middle4") {
    middle4Count += 1;
  } else if (collectionLocation == "middle5") {
    middle5Count += 1;
  }
  notes.push(new Note(collectionLocation));
  collectedNotes += 1;
  updateNoteViewer();
}

// Sets the result of a note
function resultPiece(result, timestamp) {
  console.log(notes);
  notes[notes.length - 1].result = result;
  notes[notes.length - 1].timestamp = timestamp;
  updateNoteViewer();
  if (result == "speaker") {
    speakerNotes += 1;
  } else if (result == "amp") {
    ampNotes += 1;
  } else if (result == "failed") {
    if (notes[notes.length - 1].collectionLocation == "middle1") {
      middle1Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle2") {
      middle2Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle3") {
      middle3Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle4") {
      middle4Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle5") {
      middle5Count -= 1;
    }
    failedNotes += 1;
  } else if (result == "failedIntake") {
    if (notes[notes.length - 1].collectionLocation == "middle1") {
      middle1Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle2") {
      middle2Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle3") {
      middle3Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle4") {
      middle4Count -= 1;
    } else if (notes[notes.length - 1].collectionLocation == "middle5") {
      middle5Count -= 1;
    }
    failedNotes += 1;
  }
}

// Updates a viewer to see which notes have been collected and what happened to them
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
      } else if (notes[i].result == "failed") {
        failedNotes -= 1;
      } else if (notes[i].result == "failedIntake") {
        failedNotes -= 1;
      }
      notes.splice(i, 1);
      updateNoteViewer();
    };
    noteContainer.appendChild(note);
    noteContainer.appendChild(deleteImage);
    note.innerHTML = notes[i].result;
    if (notes[i].collectionLocation == "middle1") {
      note.style.backgroundColor = "#acf5b2";
    } else if (notes[i].collectionLocation == "middle2") {
      note.style.backgroundColor = "#5eff6b";
    } else if (notes[i].collectionLocation == "middle3") {
      note.style.backgroundColor = "#00ff15";
    } else if (notes[i].collectionLocation == "middle4") {
      note.style.backgroundColor = "#008a0b";
    } else if (notes[i].collectionLocation == "middle5") {
      note.style.backgroundColor = "#004d06";
    } else if (notes[i].collectionLocation == "close1Blue") {
      note.style.backgroundColor = "#a7b7ff";
    } else if (notes[i].collectionLocation == "close2Blue") {
      note.style.backgroundColor = "#6580fa";
    } else if (notes[i].collectionLocation == "close3Blue") {
      note.style.backgroundColor = "#0050fc";
    } else if (notes[i].collectionLocation == "close1Red") {
      note.style.backgroundColor = "#ffa7a7";
    } else if (notes[i].collectionLocation == "close2Red") {
      note.style.backgroundColor = "#fa6565";
    } else if (notes[i].collectionLocation == "close3Red") {
      note.style.backgroundColor = "#fc0000";
    } else if (notes[i].collectionLocation == "startingNote") {
      note.style.backgroundColor = "#4f4425";
    } else if (notes[i].collectionLocation == "droppedNote") {
      note.style.backgroundColor = "#bfb089";
    }
    note.style.color = "black";

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
  window.location.href = "../initalPosition";
}

// Saves the data and moves to the next page
function nextButton() {
  let collectionLocations = [];
  let results = [];
  let timestamps = [];
  for (let i = 0; i < notes.length; i++) {
    collectionLocations.push(notes[i].collectionLocation);
    results.push(notes[i].result);
    timestamps.push(notes[i].timestamp);
  }

  localStorage.setItem("09autoMobility", mobilityCheckbox.checked);
  localStorage.setItem("10autoNotesLocations", collectionLocations);
  localStorage.setItem("11autoNotesResults", results);
  localStorage.setItem("27autoNotesTimestamps", timestamps);

  localStorage.setItem("05autoCountCollected", collectedNotes);
  localStorage.setItem("06autoCountSpeaker", speakerNotes);
  localStorage.setItem("07autoCountAmp", ampNotes);
  localStorage.setItem("08autoCountFailed", failedNotes);

  localStorage.setItem("30middle1Count", middle1Count);
  localStorage.setItem("31middle2Count", middle2Count);
  localStorage.setItem("32middle3Count", middle3Count);
  localStorage.setItem("33middle4Count", middle4Count);
  localStorage.setItem("34middle5Count", middle5Count);

  window.location.href = "../teleop";
}
loadPreviousData();

// Loads previous data
function loadPreviousData() {
  let noteLocations = localStorage.getItem("10autoNotesLocations").split(",");
  let noteResults = localStorage.getItem("11autoNotesResults").split(",");
  let noteTimestamps = localStorage.getItem("27autoNotesTimestamps").split(",");
  for (let i = 0; i < noteLocations.length; i++) {
    if (noteLocations[i] != "") {
      collectPiece(noteLocations[i]);
      resultPiece(noteResults[i], noteTimestamps[i]);
    }
  }

  if (localStorage.getItem("09autoMobility") == "true") {
    mobilityCheckbox.checked = true;
  } else {
    mobilityCheckbox.checked = false;
  }
}
