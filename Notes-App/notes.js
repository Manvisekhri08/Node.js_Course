
const fs = require('fs')

const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const note = loadNote()
    const duplicateNote = note.filter(function (note) {
        return note.title === title
    })
    if (duplicateNote.length === 0) {
        note.push({
            title: title,
            body: body
        })
        saveNote(note)
        console.log('New Note Added!')
    } else {
        console.log('Title already taken')
    }
}

const removeNote = function (title) {
    const note = loadNote()
    const checkNote = note.filter(function (note) {
        return note.title !== title
    })
    if (note.length > checkNote.length) {
        console.log(chalk.bgGreen('Note removed'))
        saveNote(checkNote)
    } else {
        console.log(chalk.bgRed('No note removed'))
    }

}

const saveNote = function (note){
    const data = JSON.stringify(note)
    fs.writeFileSync('notes.json',data)
}

const loadNote = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}