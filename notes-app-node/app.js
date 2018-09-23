const fs = require("fs");
// const os=require('os')
const notes = require("./notes");
const _ = require("lodash");
const yargs = require('yargs')

const titleOption = {
  describe: "Title of note",
  demand: true,
  alias: 't'
}

const bodyOption = {
  describe: "Body of the note",
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  }).command('list', 'List all the notes')
  .command('remove', "Remove a note using title", {
    title: titleOption
  })
  .command('read', "Read a note", {
    title: titleOption
  })
  .help()
  .argv
var command = argv._[0];
// console.log("Command: ", command);
console.log("Yargs", argv)
//add 
if (command === "add") {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log(note.title, note.body)
    // console.log("------")
    // console.log(`Title: ${note.title}`)
    // console.log(`Body: ${note.body}`)
    notes.logNote(note)
  } else {
    console.log("Note title already exists")
  }
} else if (command === "list") {
  var allNotes = notes.getAll()
  console.log(`printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => {
    notes.logNote(note)
  });

} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found")
    console.log(note.title, note.body)
    // console.log("Reading Note------")
    // console.log(`Title: ${note.title}`)
    // console.log(`Body: ${note.body}`)
    notes.logNote(note)
  } else {
    console.log("Note not found")
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message)
} else {
  console.log("Command not found");
}