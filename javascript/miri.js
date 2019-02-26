require("dotenv").config();
const axios = require('axios');
const chalk = require('chalk');
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');

//init spotify object
let spotify = new Spotify(keys.spot);

//capture user parameters
let miriCommand = process.argv[2];
let parameter = process.argv[3];


console.log(parameter);

switch (miriCommand) {
    case 'concert-this':
        console.log(parameter[3]);
        // concertThis(parameter); //NOT WORKING
        break;
    case 'spotify-this-song':
        console.log(parameter[3]);
        //spotifySong(parameter); //NOT WORKING
        break;
    case 'movie-this':
        console.log(parameter[3]);
        movieThis(parameter); // working, but needs formatting
        break;
    case 'do-what-it-says':
        console.log(parameter[3]); //NOT STARTED
        break;
    default:
        console.log('You have to give a command');
}

function concertThis(parameter) {
  //TODO: Add API call to the 'Bands in Town' peeps and display the returned results
}
 
function spotifySong(parameter) {
  
  let searchSong = '';

    if(parameter === undefined) {
      searchSong = 'Ace of Base the sign';
    } else{
      searchSong = parameter;
    }

  spotify.search({
    type: 'track',
    query: searchSong
  }).then(function(response) {
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });

}

function movieThis(parameter) {
  let findMovie = '';

  if (parameter === undefined) {
    findMovie = 'Mr. Nobody.';
  } else{
    findMovie = parameter
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=6a93e976"

  axios({
    method: 'get',
    url: queryUrl
  }).then(function(res) {
    console.log(res);
  })
}

function doWhatItSays(parameter) {
  //TODO: Add logic for the command
}