// require dependencies 
const express = require('express');
const fs = require('fs');

// enable express
const app = express();
app.use( express.static( 'html') )

// port
const PORT = process.env.PORT || 8080;