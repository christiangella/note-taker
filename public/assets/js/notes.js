const util = require('util')
const fs = require('fs')

const readN = util.promisify(fs.readFile)
const writeN = util.promisify(fs.writeFile)

class Hold {
    read() {
        return readN('db/db.json', 'utf8')
    }
    write(note) {
        return writeN('db/db.json', JSON.stringify(note))
    }
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
    writeNote(note) {
        const { title, text } = note;
        if (!text) {
            throw new Error('Please write something in the body.')
        }
        const addingNote = { title, text, id: note.length+1 }
        return this.retrieveNote()
            .then((notes) => [...notes, addingNote])
            .then((newNote) => this.write(newNote))
            .then(() => addingNote)
    }
}

module.exports = new Hold()