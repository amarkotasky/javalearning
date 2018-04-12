var express= require("express");
var path= require("path");
var open= require("open");


var app = express();
var port = 3001;

app.get('/',function(err,resp){
    // resp.sendFile(path.join(__dirname,'../src/index.html'))
    resp.send('<html><body><h2>What Can JavaScript Do?</h2></body></html>')
})

app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    else
    {
    open('http://localhost:'+port)
    }
})