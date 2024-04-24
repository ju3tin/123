var express = require('express');
var app = express();
var path = require('path');


// Serve the "bullshit" folder as a static directory
app.use('/', express.static(path.join(__dirname, 'bullshit')));


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"/shit/index.html"));
})




var server = app.listen(8080, function () {
   
   console.log("Express App running at http://127.0.0.1:5000/");
})