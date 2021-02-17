// require dependencies
const express = require('express');
const fs = require('fs');

// enable express
const app = express();
app.use( express.static( 'html' ) )

// read post data
app.use(express.urlencoded({extended: true}))
app.use(express.json())