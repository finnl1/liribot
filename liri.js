require("dotenv").config();

var Twitter = require("twitter");
  
var keys = require("./keys.js");
var client = new Twitter(keys.twitter);

myTweets = function() {
    console.log(client);
    console.log('whatup');
  

myTweets();

