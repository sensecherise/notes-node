
console.log('start app.js');

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')

 var res = notes.addNote();
console.log(res)
// console.log(_.isString(true))
// console.log(_.isString('Cherise'))
var filteredArray = _.uniq(['sensecherise', 1 , 'sensecherise', 1, 2, 3, 4])
console.log(filteredArray)

var showNumber = notes.add(10, 12);
console.log(showNumber)






// var user = os.userInfo()

//console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`, function(err){
//     if(err){
//         console.log(err);
//     };
// });


