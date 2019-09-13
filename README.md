# liri-node-app

LIRI is a Language Interpretation and Recognition Interface.

---

### Deployed App


---

### Brief Description

LIRI was constructed using NPM Packages and APIs for request informations based on the command line user inputs on the and gives back data.

---

### Technologies

##### Javascript
##### Node.js
##### NPM Packages: 
* Axios
* Dotenv
* Node-Spotify-Api
* Moment and FS.js
##### APIs: 
* Bands In Town API
* Spotify API 
* OMDB Movies API

---

### How LIRI Works

Clck here to see the video with demo: https://drive.google.com/file/d/1UsszDHaifuWFEOsXvuerAMVyB8glKwQY/view

LIRI code is organized in 4 different commands, each one taking information from API or by fs.readfile method:

#### A. concert-this command line:
When the user enters in the command line the input <$ node liri.js concert-this "name of some band or artist">, the app will bring at the terminal (node.js) the following informations based in the Bands In Town API:
* Venue of the concert
* Location of the venue
* Date of the event

![picture alt](/images/concert-this.png "Concert of a artist/band")

#### B. spotify-this-song command line:
When the user enters in the command line the input <$ node spotify-this-song.js "name of some song">, the app will bring at the terminal (node.js) the following informations based in the Spotify API:
* Name of the artist
* Name of the song
* URL of the song
* Name of the album

![picture alt](/images/spotify-this-song.png "Song of a artist/band")

#### C. movie-this command line:
When the user enters in the command line the input <$ node liri.js movie-this "name of some movie">, the app will bring at the terminal (node.js) the following informations based in the OMDB API:
* Movie's name
* Movie's year
* Movie's IMDB Rating
* Movie's Rotten Tomatoes Rating
* Movie's country
* Movie's language
* Movie's plot
* Movie's actor

![picture alt](/images/movie-this.png "Movies")

#### D. do-what-it-says command line:
When the user enters in the command line the input <$ node liri.js do-what-it-says>, the app will read the file random.txt and take the information inside that as parameters for the request to the APIs. 
As example, the random.text contains <spotify-this-song, "I Want it That Way,">, so, the app will bring at the terminal (node.js) the following informations based in the Spotify API:
* Name of the artist: Backstreet Boys
* Name of the song: I Want It That Way
* URL: "https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=04b4797f5fa34b0aafa081a1a5a31f0b"
* Name of the album: The Hits--Chapter One

![picture alt](/images/do-what-it-says.png "fs.readFile method")

---
