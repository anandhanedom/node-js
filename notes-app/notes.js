const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const newNote = { title, body };

  const doesNoteAlreadyExist = notes.find(
    (note) => note.title === newNote.title
  );

  if (!doesNoteAlreadyExist) {
    notes.push(newNote);
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const currentNotes = loadNotes();
  const updatedNotes = currentNotes.filter((note) => note.title !== title);

  if (currentNotes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("No such note!"));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse("Note removed!"));
  }
};

module.exports = { getNotes, addNote, removeNote };
