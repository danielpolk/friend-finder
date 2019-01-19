//requiring friends exported friends data.
var actions = require("../data/friends")

//requiring NPM packages.
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

module.exports = function (app) {
    app.get('/api/friends', function (request, response) {
        return response.json(friends);
    });
    
    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;
    
        console.log(newFriend);
    
        friends.push(newFriend);
      console.log(friends)  
    })
};




