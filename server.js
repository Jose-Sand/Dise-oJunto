//data base
var mysql = require('mysql');
module.exports.conec = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

//sniffer
const dgram = require("dgram");
module.exports.server = dgram.createSocket("udp4");
require('./sniffer/sniffer');
//web server 
const express = require("express");
module.exports.express1 = express;
module.exports.app = express();
//routes 
require('./routes/rutas');