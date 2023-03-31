//importing modules

const express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const res = require('express/lib/response');

//app obj declaration
var app = express();

//redirect to routes file for api calls

const route = require('./routes/route');
app.use('/api', route);

//Connect to mongo

mongoose.connect('mongodb://localhost:27017/contactlist');

//Message on connection success/ error

mongoose.connection.on('connected', ()=>{

    console.log('Connected to MongoDB @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err)
    {
    console.log('Error in DB Connection:'+err);
    }
});

//Setting up port number
const port = 3000;

//Adding middleware for data parsing

 app.use(cors());
 app.use(bodyparser.json());

 //static files
 app.use(express.static(path.join(__dirname, 'public')));





//Testing server on localhost:3000

app.get('/', (req,res)=>{

    res.send("Welcome to contact_list app home page")

});

//Success Message on console

app.listen(port, ()=>{

    console.log('server started at port:'+port);

});