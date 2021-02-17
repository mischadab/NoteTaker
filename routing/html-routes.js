const path = require('path');

// get http requests to the html
app.get('/', function(req, res){
    res.SendFile(__dirname + '/../public/index.html')
})