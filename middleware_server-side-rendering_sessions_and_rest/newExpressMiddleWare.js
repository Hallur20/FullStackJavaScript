var express = require("express");
var app = express();

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
})

app.use("/api/log", function (req, res, next) {
    console.log(req.headers);
    res.json(req.headers); //timestamp what?
    next();
})