
var nconf = require('nconf');
var express = require('express');
var cors = require ('cors');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
nconf.argv().env().file({ file: 'config.json' });

// app.use(express.static('calendar-front-end'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    database: "prova102",
    user: "noa",
    password: "Area@111"
});
var api = require('./router.js')(nconf, pool);
app.use('/', api);

app.get('/', function (req, res) {
    res.sendFile('calendar-front-end/sign-in.html');
    console
})


app.listen(nconf.get('port'));

console.log('server is running');

console.log('Node.js server is running')



