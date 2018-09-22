console.log("Starting app.js");
const fs = require("fs");
// const os=require('os')
const notes = require("./notes");
const _ = require("lodash");
const yargs=require('yargs')

const argv=yargs.argv
var command = argv._[0];
// console.log("Command: ", command);
console.log("Yargs", argv)
if (command === "add") {
  var note= notes.addNote(argv.title, argv.body)
  if (note){
    console.log(note.title, note.body)
    console.log("------")
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  } else{
    console.log("Note title already exists")
  }
} else if (command === "list") {
  notes.getAll()
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title)
} else {
  console.log("Command not found");
}