const path = require('path');

// get requests to the html
app.get('/', function(req, res){
    res.SendFile(path.join(__dirname + '/../public/index.html'))
})

// all other routes into the notes html
app.get('*', function(req, res){
    res.SendFile(path.join(__dirname + '/../public/notes.html'))
})