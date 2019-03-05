//GENERAL TODO;
// 1. Output data to log.txt using the 'fs' module
// 2. Do not over-write data in the log.txt file
// 3. Use chalk to color your console outputm (cool suggestion from Aaron)
// 4. ????

require("dotenv").config();

// CONSTANTS =====================================================
const fs = require('fs');
const axios = require('axios');
const moment = require('moment');
const chalk = require('chalk');
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');

// GLOBAL VARIABLES ==============================================

//init spotify object
let spotify = new Spotify(keys.spot);

//capture user parameters
let miriCommand = process.argv[2];
let parameter = process.argv[3];

// MIRI LOGIC SWITCH
switch (miriCommand) {
    case 'concert-this':
        // console.log(parameter);
        concertThis(parameter); //Working, but needs formatting, will use chalk after Aaron mentioned it
        break;
    case 'spotify-this-song':
        // console.log(parameter);
        spotifySong(parameter); //working, but needs formatting, will use chalk
        break;
    case 'movie-this':
        // console.log(parameter);
        movieThis(parameter); // working, but needs formatting, will use chalk 
        break;
    case 'do-what-it-says':
        console.log(parameter); //NOT COMPLETED
        break;
    default:
        console.log('I\'m not a mind reader...\nYou have to give a command!');
}


// FUNCTIONS ====================================================

function concertThis(parameter) {
  //TODO: Format output
  let queryUrl = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";

  axios({
    method: 'get',
    url: queryUrl
  }).then(function(res){
    console.log(res);
  })
  
}
 
function spotifySong(parameter) {
  //TODO: Format output
  let searchSong = '';

    if(parameter === undefined) {
      searchSong = 'Ace of Base the sign';
    } else{
      searchSong = parameter;
    }

  spotify.search({
    type: 'track',
    query: searchSong,
    limit: 1
  }).then(function(response) {
    console.log(response.tracks.items[0].artists[0].name);
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });

}

function movieThis(parameter) {
  //TODO: Format output
  let findMovie = '';

  if (parameter === undefined) {
    findMovie = 'Mr. Nobody.';
  } else{
    findMovie = parameter
  }

  let queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=6a93e976"

  axios({
    method: 'get',
    url: queryUrl
  }).then(function(res) {
    console.log(res);
  })
}

function doWhatItSays(parameter) {
  //TODO: Add logic to read the random text document and have Miri do what is says.
}

function bandsintownOutput(response) {
  //TODO: format the output of the returned response from spotify
}

function spotifyOutput(response) {
  //TODO: format the output of the returned response from spotify
}
function omdbOutput(response) {
  //TODO: format the output of the returned response from omdb
}