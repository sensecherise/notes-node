
console.log('start');

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')


var res = notes.addNote();
console.log(res)

var showNumber = notes.add(10, 12);
console.log(showNumber)
// var user = os.userInfo()

//console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`, function(err){
//     if(err){
//         console.log(err);
//     };
// });


