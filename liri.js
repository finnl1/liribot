require("dotenv").config();

var client = new Twitter(keys.Twitter);

myTweets = function() {
    console.log(client);
}

client.myTweets();