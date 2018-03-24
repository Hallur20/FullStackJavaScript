const express = require("express");
const http = require("http");

function add(n1,n2){
    return n1+n2;
}

function calcServer(port, serverStartedCB){
    const app = express();
    app.get("/calc/add/:n1/:n2", (req, res)=>{
        const num1 = req.params.n1;
        const num2 = req.params.n2;
        res.send(""+add(Number(num1),Number(num2)));
    });
    const server = http.createServer(app);
    server.listen(port, ()=>{
        console.log("Started on " + port);
        serverStartedCB(server);
    });
}

module.exports = {
    add: add,
    calcServer: calcServer
}