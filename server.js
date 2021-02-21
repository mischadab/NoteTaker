// require dependencies 
const express = require('express');
const fs = require('fs');

// port
const PORT = process.env.PORT || 8080;

// enable express
const app = express();
app.use( express.static( 'public' ) )

// set up express to handle data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// get notes
app.get('/api/notes', (req, res) => {

})

// post notes
app.post('/api/notes', (req, res) => {

})


// server listening
app.listen( PORT, () => {
    console.log(`App listening at ${PORT}`)
})
