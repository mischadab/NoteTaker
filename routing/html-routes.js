const path = require('path');

// get requests to the html
app.get('/', function(req, res){
    res.SendFile(path.join(__dirname + '/../public/index.html'))
})
// get notes into the html
app.get('/notes', function(req, res){
    res.SendFile(path.join(__dirname + '/../public/notes.html'))
})