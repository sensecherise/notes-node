
console.log('start app.js');

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs').argv

const notes = require('./notes.js')
var command = yargs._[0]
console.log('command : ',command)
console.log('Process', process.argv)
console.log('Yargs', yargs)
console.log(yargs.title)
if( command === 'add'){
    notes.addNote(yargs.title, yargs.body)
}
else if (command === 'list'){
    notes.getAll();
}
else if( command === 'read'){
    notes.getNote(yargs.title);
}
else if(command === 'remove'){
    notes.removeNote(yargs.title);
}
else{
    console.log('command not recognized')
}