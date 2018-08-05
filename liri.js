require("dotenv").config();

var Twitter = require("Twitter");
  
var keys = require("./keys.js");
var client = new Twitter(keys.Twitter);

myTweets = function() {
    console.log(client);
}

