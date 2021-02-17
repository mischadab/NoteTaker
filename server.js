// require dependencies
const express = require('express');
const fs = require('fs');

// enable express
const app = express();
app.use( express.static( 'html' ) )

// set up express to handle data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// start the server listening
app.listen( 8080, ()=> {
    console.log(`App listening at http://localhost:8080`)
})