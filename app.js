const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
require('dotenv/config');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
//import routes
const UserRouter = require('./routes/user');
app.use('/user',UserRouter);

//middlewares
//app.use('/posts', ()=> {
  //  console.log('this is the middleware running');
//});

//routes
app.get('/', (req, res) => {
     res.render('index');

});

app.get('/team', (req, res) => {
  res.render('team');

});
app.get('/documentation', (req, res) => {
  res.render('documentation');

});
app.get('/contact', (req, res) => {
  res.render('contact');

});
app.get('/login', (req, res) => {
  res.render('login');

});
app.get('/register', (req, res) => {
  res.render('register');

});

//connect to DB
mongoose.connect (process.env.DB_CONNECTION, 
{useNewUrlParser: true},
()=> console.log('connected to db'));

//start listening 
app.listen(3000);


