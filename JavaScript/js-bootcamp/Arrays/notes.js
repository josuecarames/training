const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "My next book",
    body: "Levinas"
}, {
    title: "Office modification",
    body: "Get a new seat"
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modification')
console.log(note)