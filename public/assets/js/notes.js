// installing required packages & functions
const util = require('util')
const fs = require('fs')
const uuid = require('./uuid');

//allows reading and writing of json files
const readN = util.promisify(fs.readFile)
const writeN = util.promisify(fs.writeFile)

//defining the class to hold notes
class Hold {
    //define function to read json
    read() {
        return readN('db/db.json', 'utf8')
    }
    //define function to write json
    write(note) {
        return writeN('db/db.json', JSON.stringify(note))
    }
    //define function to publish notes
    retrieveNote() {
        return this.read().then((notes) => {
            let placehold;
            try {
                placehold = [].concat(JSON.parse(notes))
            } catch (err) {
                placehold = []
            }
            return placehold
        })
    }
    //define function to save notes, passes in id
    writeNote(note) {
        const { title, text } = note;
        if (!text) {
            throw new Error('Please write something in the body.')
        }
        const addingNote = { title, text, id: uuid() }
        return this.retrieveNote()
            .then((notes) => [...notes, addingNote])
            .then((newNote) => this.write(newNote))
            .then(() => addingNote)
    }
}

module.exports = new Hold()