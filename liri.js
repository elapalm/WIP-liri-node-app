require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var bandsintown = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
