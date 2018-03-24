require("./dbSetup");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('3000', ()=>{
   console.log("server started");
});

app.get('/', (req, res)=>{
    res.render('index.ejs');
});
app.get('/test', (req, res)=>{
    res.send("<h1>hello?</h1>");
});
app.post('/post', (req, res)=>{
    var getJobs = [];
    if(req.body.jobType1){
        getJobs.push({type: req.body.jobType1, company: req.body.jobCompany1, companyURL: req.body.jobCompanyUrl1});
    }
    if(req.body.jobType2){
        getJobs.push({type: req.body.jobType2, company: req.body.jobCompany2, companyURL: req.body.jobCompanyUrl2});
    }
    if(req.body.jobType3){
        getJobs.push({type: req.body.jobType3, company: req.body.jobCompany3, companyURL: req.body.jobCompanyUrl3});
    }
    console.log(getJobs);
    res.send("this is the post page. <a href='http://localhost:3000'>go back</a>");
})