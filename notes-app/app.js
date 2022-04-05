const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes");

const command = process.argv[2];

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  },
});

// add, remove, read, list

console.log(yargs.argv);
