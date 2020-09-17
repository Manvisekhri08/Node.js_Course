
const fs = require('fs')

const chalk = require('chalk')
const { notStrictEqual } = require('assert')

const getNotes = () => {
    return "Your notes..."
}

const addNote =  (title, body) => {
    const note = loadNote()
    // const duplicateNote = note.filter((note) => note.title === title)

    const duplicateNotes = note.find((note) => note.title === title)

// If no duplicate note is found then we are gonna push it
    
     if (!duplicateNotes) {                // if (duplicateNotes.length === 0) // if (duplicateNotes === undefined)
      note.push({
        title: title,
        body: body,
      });

        // const duplicateNote = note.filter(function (note) {
        //     return note.title === title
        // })

        saveNote(note)
        console.log(chalk.bgGreen('New Note Added!'))
    } else {
        console.log(chalk.bgRed('Title already taken'))
    }
}

const removeNote = (title) => {
    const note = loadNote()
    const checkNote = note.filter((note) => note.title !== title )

    // const checkNote = note.filter(function (note) {
    //     return note.title !== title
    // })

    if (note.length > checkNote.length) {
        console.log(chalk.bgGreen('Note removed'))
        saveNote(checkNote)
    } else {
        console.log(chalk.bgRed('No note removed'))
    }

}

const listNode = () => {
    const notes = loadNote()
    console.log(chalk.blue('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNote()
    const findNote = notes.find((note) => note.title === title)
    if (!findNote) {
        console.log(chalk.red("Error! Note not found!"))
    }
    else {
        console.log(chalk.green("Note Found"))
        console.log(chalk.yellow(findNote.title))
        console.log(chalk.blue(findNote.body))
    }
}

const saveNote = (note) => {
    const data = JSON.stringify(note)
    fs.writeFileSync('notes.json',data)
}

const loadNote = () => {
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
    removeNote: removeNote,
    listNode: listNode,
    readNote: readNote
}