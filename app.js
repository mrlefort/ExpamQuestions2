/**
 * Created by mrlef on 9/6/2016.
 */

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
//add your content here

app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    req.calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
};
next();
});

app.get("/api/calculator/*",function(req,res){

    switch(req.calculatorRequest.operation) {
        case "add":
            var a = req.calculatorRequest.n1 + req.calculatorRequest.n2;
            res.send(a.toString());
            break;
        case "substract":
            var b = req.calculatorRequest.n1 - req.calculatorRequest.n2;
            res.send(b.toString());
            break;

    }

});



app.listen(3000,function(){
    console.log("Server started, listening on: "+3000);
});