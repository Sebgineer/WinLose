var express = require('express');
const cors = require('cors');
var fs = require('fs');
const { response } = require('express');
const { stringify } = require('querystring');
var app = express();
var port = 3000;
const path = './data/players.json';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function (req, res) {
    res.send('Player Data API');
});

app.get('/players', function (req, res) {
    let data = ReadJson();
    console.log("GET: Players");
    res.send(JSON.parse(JSON.stringify(data["players"])));
});

app.post('/players', function (req, res) {
    
    if (req.body.name && req.body.playerName) {
        let data = ReadJson();
        req_respone = {
            name: req.body.name,
            playerName: req.body.playerName,
            win: 0,
            lose: 0
        }
        
        console.log("POST: Players");
        
        data["players"].push(req_respone);
        console.log(data);
        WriteJson(data);
        res.send(req.body);
    }
    else {
        res.send("error");
    }
});

var server = app.listen(port, function () {
    console.log("Up and running");
});

function ReadJson() {
    let rawdata = fs.readFileSync(path);
    let data = JSON.parse(rawdata);
    return data;
}

function WriteJson(jsondata) {
    fs.writeFileSync(path, JSON.stringify(jsondata));
}