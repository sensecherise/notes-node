console.log('starting notes.js')

//console.log(module)
module.exports.age = 25;
module.exports.addNote = () => {
    console.log('addNote')
    return 'New Notes'
}

module.exports.add = (numA, numB) => {
    return numA+numB
}
