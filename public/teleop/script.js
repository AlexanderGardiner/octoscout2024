let notes = [];
function collectPiece(collectionLocation) {
  console.log(notes);
  notes.push(new Note(collectionLocation));
}

function resultPiece(result) {
  console.log(notes);
  notes[notes.length - 1].result = result;
  updateNoteViewer();
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
    }
    note.style.color = "white";

    notesContainer.appendChild(noteContainer);
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
  for (let i = 0; i < notes.length; i++) {
    collectionLocations.push(notes[i].collectionLocation);
    results.push(notes[i].result);
  }

  localStorage.setItem("teleopNotesLocations", collectionLocations);
  localStorage.setItem("teleopNotesResults", results);
  window.location.href = "../endgame";
}
