/**
 * Created by I323504 on 12/01/2016.
 */
var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var users = [];
var clients = [];
var routes =require('./routes')(app);

app.use(express.static('/',routes));
var recievers = [];
app.use(express.static(__dirname + '/public'));


/*
Dealing with incoming connections
 */
io.on("connection",function(socket){

    socket.on("help query",function(msg)
    {
        var repeat = false;
        for(var key in recievers) {
            if (recievers[key].username == msg.username) {

                io.to(socket.id).emit("socket denied");
                repeat = true;
                return false;
            }

        }
        if(!repeat)
        recievers.push(msg);

    });
    socket.on("help response",function(msg)
    {
        io.emit("help response",msg );
    });

    socket.on("verify socket",function(msg) {
        for(var key in recievers)
        {
            console.log(recievers[key].username + msg);
            if(recievers[key].username == msg&&recievers[key].senderid=="null") {
                var temp = recievers[key].id;
                io.to(socket.id).emit("verify response", temp);
            }
            else
            {
                io.to(socket.id).emit("socket denied","That name is already in use, please pick another");

            }

        }

        if(recievers.length<1)
        {
            io.to(socket.id).emit("socket denied","That user does not exist yet. Please enter a username on your mobile first.");

        }

    });

    socket.on("help update request",function(socketid,id)
    {
        console.log("check here");
        console.log(socketid);
        io.to("/#" + socketid).emit("help update response",id);
    });
    socket.on("disconnect",function(msg){
        for (var key in recievers)
        {
            if("#/" + recievers[key].id==socket.id)
            recievers.splice(key);
        }
    });

});

http.listen(3000,function()
{
    console.log("listening on 3000");
});