const express = require('express');
const router = express.Router();
const storage = require('../db/storage');


// Get route to retrieve all notes from db.json
router.get('/notes', (req, res) => {
    storage
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err)=> res.status(500).json(err));
})