// require dependencies 
const express = require('express');
const fs = require('fs');
const uuidv1 = require('uuidv1')

// db data read
let db = JSON.parse(fs.readFileSync('./db/db.json'));

// port
const PORT = process.env.PORT || 8080;

// enable express, and access in public folder
const app = express();
app.use( express.static( 'public' ) )

// set up express to handle data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// HANDLE API CALLS
// fetch notes existing in database
app.get('/api/notes', (req, res) => {
    console.log('API Request: getting existing notes from database', req.body);
    res.send(db);
})

// add new note to database
app.post('/api/notes', (req, res) => {
    console.log('API Request: save a new note into database', req.body);
    db.push( {id: uuidv1, title:req.body.title, text:req.body.text} );
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.end();
})


// server listening
app.listen( PORT, () => {
    console.log(`App listening at ${PORT}`)
})
