console.log('start');

const fs = require('fs')
const os = require('os')

var user = os.userInfo()

console.log(user);
fs.appendFile('greetings.txt', 'Hello : '+ user, function(err){
    if(err){
        console.log(err)
    };
});

