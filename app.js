//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const res = require('express/lib/response');

//app obj declaration
var app = express();

//Setting up port number
const port = 3000;

//Testing server

app.get('/', (req,res)=>{

    res.send("Welcome to contact_list app home page")

});

//Success Message

app.listen(port, ()=>{

    console.log('server started at port:'+port);

});