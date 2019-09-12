var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
  id: keys.id,
  secret: keys.secret
});
var axios = require("axios");
var moment = require("moment");

// variables to get user inputs:
let command = process.argv[2];
let value = process.argv.slice(3);

// Joining the remaining arguments since an actor or tv show name may contain spaces
//var term = process.argv.slice(3).join(" ");

// if (command === "concert-this") {
//   execBands();
// } else if (command === "spotify-this-song") {
//   execSpotify();
// } else if (command === "movie-this") {
//   execMovie();
// } else if (command === "do-what-it-says") {
//   execDoWhat();
// }

switch (command) {
  case "concert-this":
    execBands();
    break;
  case "spotify-this-song":
    execSpotify();
    break;
  case "movie-this":
    execMovie();
    break;
  case "do-what-it-says":
    execDoWhat();
    break;
  default:
    console.log("Invalid command.");
}

// -------- START: Bands in Town Artist Events API --------------
function execBands() {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    value +
    "/events?app_id=codingbootcamp";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  axios
    .get(queryUrl)
    .then(function(response) {
      //console.log(response);
      console.log(
        "========================RESULTS:====================================="
      );
      console.log("Venue: " + response.data[0].venue.name);
      console.log(
        "Venue location: " +
          response.data[0].venue.city +
          ", " +
          response.data[0].venue.country
      );
      console.log(
        "Date of the Event: " +
          moment(response.data[0].datetime).format("MM/DD/YYYY")
      );
      console.log(
        "=================================================================="
      );
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
// // -------- END: Bands in Town Artist Events API --------------

// // -------- START: Spotify Songs API --------------
function execSpotify() {
  if (value == null) {
    command = "Ace of Base";
    value = "The Sign";
    spotify.search({ type: "track", query: "All the Small Things" }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      console.log(data);
    });
  }
}

//         console.log(response);
//console.log("========================RESULTS:=====================================");
//         //console.log("Artist: " + response.data[0].artist);
//         //console.log("Song: " + response.data[0].song);
//         //console.log("URL: " + response.data[0].song));
//         //console.log("URL: " + response.data[0].album));
//console.log("=====================================================================");
//       })
//   }

// -------- END: Spotify Songs API --------------

// ---------------------- START: OMDB Movies API ------------------------------
function execMovie() {
  if (value == null) {
    value = "Mr. Nobody";
  }
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl =
    "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  axios
    .get(queryUrl)
    .then(function(response) {
      console.log(
        "========================RESULTS:====================================="
      );
      console.log("The movie's name is: " + response.data.Title);
      console.log("The movie's year is: " + response.data.Year);
      console.log("The movie's IMDB rating is: " + response.data.imdbRating);
      console.log(
        "The movie's Rotten Tomatoes Rating is: " +
          response.data.Ratings[1].Value
      );
      console.log("The movie's country is: " + response.data.Country);
      console.log("The movie's language is: " + response.data.Language);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's actors are: " + response.data.Actors);
      console.log(
        "========================================================================"
      );
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
// -------- END: OMDB Movies API --------------

// -------- START: Do what it says --------------
// fs is a core Node package for reading and writing files
// var fs = require("fs");
// function execDoWhat() {
//   fs.readFile("random.txt", "utf8", function(error, data) {
//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }
//     //We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);
//   });
// }

// -------- END: Do what it says -------------
