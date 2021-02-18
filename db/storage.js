const util = require('util')
const fs = require('fs')
// npm package to create unique ids in Express.js
const uuid = require('uuid')

// use of utilities in node to create promisified functions to read and write files with fs
const readFile = util.promisify(fs.readFileSync);
const writeFile = util.promisify(fs.writeFileSync);

// create class to hold CRUD