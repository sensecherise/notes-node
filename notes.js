console.log('starting notes.js')

//console.log(module)
module.exports.age = 25;

var addNote = (title, body) => {
    console.log('adding note', title, body);
}

var getAll = () => {
    console.log('get all notes')
}

var getNote = (title) => {
    console.log('getting note' , title)
}

var removeNote = (title) => {
    console.log('note deleted', title)
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
}