// require dependencies 
const express = require('express');
const fs = require('fs');

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

// fetch notes existing in database
app.get('/api/notes', (req, res) => {
    console.log('API Request: new note saved', req.body);
    res.send(db);
})

// add new note to database
app.post('/api/notes', (req, res) => {

})


// server listening
app.listen( PORT, () => {
    console.log(`App listening at ${PORT}`)
})
