require("dotenv").config();

var client = new twitter(keys.Twitter);

myTweets = function() {
    console.log(client);
}

client.myTweets();