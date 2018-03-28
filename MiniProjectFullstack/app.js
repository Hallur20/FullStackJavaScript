require("./dbSetup");
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require("./models/user.js");
var userFacade = require("./facades/userFacade");

var app = express();
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('3000', () => {
    console.log("server started");
});

app.get('/', (req, res) => {
    User.find({}, (err, users)=>{
        res.render('index.ejs', {users: users, status: ""});
    })
});
app.get('/test', (req, res) => {
    res.send("<h1>hello?</h1>");
});
app.post('/login', (req, res) => {
    var usr = req.body.uName;
    var pswd = req.body.psw;
    User.findOne({ 'userName': usr }, (err, user) => {
        if (err) throw err;
        if(user == null){
            res.send('user does not exist <a href="http://localhost:3000">go back</a>');
            return;
        }
        if (pswd == user.password) {
            res.render('login.ejs', {user: user});
        } else {
            res.send('user was correct, but password was wrong <a href="http://localhost:3000">go back</a>');
        }
    }
    );

});
app.post('/create', (req, res) => {
    var getJobs = [];
    if (req.body.jobType1) {
        getJobs.push({ type: req.body.jobType1, company: req.body.jobCompany1, companyURL: req.body.jobCompanyUrl1 });
    }
    if (req.body.jobType2) {
        getJobs.push({ type: req.body.jobType2, company: req.body.jobCompany2, companyURL: req.body.jobCompanyUrl2 });
    }
    if (req.body.jobType3) {
        getJobs.push({ type: req.body.jobType3, company: req.body.jobCompany3, companyURL: req.body.jobCompanyUrl3 });
    }
    var fName = req.body.fName;
    var lName = req.body.lName;
    var uName = req.body.uName;
    var psw = req.body.psw;
    console.log(getJobs);
    userFacade.addUser(fName, lName, uName, psw, getJobs).then((data)=>{
        User.find({}, (err, users) => {
            console.log(data);
            res.render("index.ejs", {users: users, status : data});
        }
    )})
})
app.post('/login/createPosition', (req, res)=>{
    res.send("lon:" + req.body.lon + ", lat:" + req.body.lat + ", id:" + req.body.id + "<br/><button onclick='window.history.back();'>go back</button>");
}
);