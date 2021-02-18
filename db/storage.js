const util = require('util')
const fs = require('fs')
// npm package to create unique ids in Express.js
const uuid = require('uuid')

// use of utilities in node to create promisified functions to read and write files with fs
const readFile = util.promisify(fs.readFileSync);
const writeFile = util.promisify(fs.writeFileSync);

// create class to hold CRUD
class Storage {
    // using the readFile variable to read files in the db.json and convert to htmls
    read(){
        return readFile('db/db.json', 'utf-8')
    }
    // using the writeFile variable to put the notes into json and store in db.json
    write(note){
        return writeFile('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            let writtenNotes;
            // Putting notes into an array, if can't be done, return an empty array
            try {
                writtenNotes = [].concat(JSON.parse(notes));
            } catch(err) {
                writtenNotes = []
            }
            return writtenNotes;
        })
    }
}