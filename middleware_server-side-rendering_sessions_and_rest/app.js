var express = require("express");
var app = express();

//add your content here

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){ 

var num1 = parseInt(req.params.n1);
var num2 = parseInt(req.params.n2);
var result = num1+num2;

    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2),
        result : (result)
      }
      console.log(calculatorRequest);
      res.send(calculatorRequest);
      next();
      
 })

 app.set('view engine', 'html')
app.get("/api/calculator/*",function(req,res){ 
  res.render("index.html");
    console.log("<h1>you're in calculator.</h1>");
  })