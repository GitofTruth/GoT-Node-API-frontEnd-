var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
res.render('user');
});

var server = app.listen(4000, function(){
    console.log('listining to port 4000')
});
