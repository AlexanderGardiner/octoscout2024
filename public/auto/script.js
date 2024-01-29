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
    }
    note.style.color = "black";

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
  window.location.href = "../initalPosition";
}

function nextButton() {
  window.location.href = "../teleop";
}
