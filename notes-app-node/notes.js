const fs = require('fs')


var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (err) {
    return []
  }

}
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => {
    return note.title === title
  })
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note;

  }


};
const getAll = () => {
  return fetchNotes()
}
const getNote = (title) => {
  console.log("Getting note", title)
  var notes = fetchNotes()
  var readNotes = notes.filter((note) => {
    return note.title === title
  })
  return readNotes[0]
}
const removeNote = (title) => {
  //fetch note
  //filternotes removing the one with title of arg
  //save new notes
  var notes = fetchNotes()
  var noteToRemove = notes.filter((note) => {
    return note.title !== title
  })
  saveNotes(noteToRemove)

  return notes.length !== noteToRemove.length
}
var logNote = (note) => {
  debugger;
  console.log("Reading Note------")
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};