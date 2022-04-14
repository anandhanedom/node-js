const fs = require("fs");
const chalk = require("chalk");

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

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length) {
    console.log(chalk.green.inverse("Your notes:"));
    notes.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse("No notes found!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find((note) => note.title === title);

  if (targetNote) {
    console.log(chalk.green.inverse("Note found!"));
    console.log(chalk.blue.inverse("Title:"), targetNote.title);
    console.log(chalk.white.inverse("Content:"), targetNote.body);
  } else {
    console.log(chalk.red.inverse("No such note!"));
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
