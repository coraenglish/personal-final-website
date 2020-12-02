const lastFm_key = "d2392b98754e7803f61a33e9fbc82c3f"
const bandsInTown_key = "0a0ed0f05a92ac7ec377cca35d0a822f"
const musixMatch_key = "2955ef75358d45c71b8079065c3d288e"

let songLimit = 10
const artistLimit = 10

//Populating title before anything else
let queriedItem = decodeURIComponent(location.search.substring(1))
queriedItem = queriedItem.split("|")
var title = document.getElementById("pageTitle")
if (title !== null) {
  if (queriedItem.length == 2)
    title.innerHTML = queriedItem[0] + "<br>by <a class='artist-link' href=\"artist.html?" + encodeURIComponent(queriedItem[1]) +  "\">" + queriedItem[1] + "</a>"
  else
    title.innerHTML = queriedItem
}

//When prompted by the user to switch color palettes, sets a new cookie in the browser.
function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=None; Secure"
}

//Retrieves the name of the cookie to load color palettes.
function getCookie(cname) {
  var name = cname + "="
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

//Sets the front-end homepage background design to whatever color is set on the cookie
function setHomeBackground() {
  let cookie = getCookie("color")
  if (cookie === "" || cookie === null) {
    cookie = "green"
    setCookie("color", "green", 365)
  }
  switch (cookie) {
    case "red":
      document.getElementById("homepage").style.background = "url(backgrounds/Reds_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Reds_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "blue":
      document.getElementById("homepage").style.background = "url(backgrounds/Blues_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Blues_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "green":
      document.getElementById("homepage").style.background = "url(backgrounds/Greens_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Greens_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "spring":
      document.getElementById("homepage").style.background = "url(backgrounds/Spring_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Spring_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "cool":
      document.getElementById("homepage").style.background = "url(backgrounds/Cool_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Cool_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "warm":
      document.getElementById("homepage").style.background = "url(backgrounds/Warm_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Warm_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    case "grayscale":
      document.getElementById("homepage").style.background = "url(backgrounds/Grayscale_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Grayscale_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break
    default:
      document.getElementById("homepage").style.background = "url(backgrounds/Greens_Curvy_BG_First.png)"
      document.getElementById("homepage").style.backgroundSize = "100% 100%"
      document.getElementById("sections").style.background = "url(backgrounds/Greens_Curvy_BG_Repeatable.png)"
      document.getElementById("sections").style.backgroundSize = "100% auto"
      break

  }
}

//Sets the front-end page design to a certain syle, depending on whatever color is set on the cookie
function setPageColor() {
  let cookie = getCookie("color")
  if (cookie === "" || cookie === null) {
    cookie = "green"
    setCookie("color", "green", 365)
  }
  switch (cookie) {
    case "red":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#602929')
      document.documentElement.style.setProperty('--medium', '#9B6868')
      document.documentElement.style.setProperty('--light', '#CCACAC')
      document.documentElement.style.setProperty('--lightest', '#FCEBEB')
      document.documentElement.style.setProperty('--light-grad', 'rgba(204, 172, 172, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(252, 235, 235, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-red"
      break
    case "blue":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#2B3C51')
      document.documentElement.style.setProperty('--medium', '#61799E')
      document.documentElement.style.setProperty('--light', '#A1B8C4')
      document.documentElement.style.setProperty('--lightest', '#E3FCFF')
      document.documentElement.style.setProperty('--light-grad', 'rgba(161, 184, 196, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(227, 252, 255, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-blue"
      break
    case "green":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#2C4035')
      document.documentElement.style.setProperty('--medium', '#5C856F')
      document.documentElement.style.setProperty('--light', '#9CC7B0')
      document.documentElement.style.setProperty('--lightest', '#E1FFE1')
      document.documentElement.style.setProperty('--light-grad', 'rgba(156, 199, 176, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(225, 255, 225, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-green"
      break
    case "spring":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#005E1D')
      document.documentElement.style.setProperty('--medium', '#608E38')
      document.documentElement.style.setProperty('--light', '#BCC472')
      document.documentElement.style.setProperty('--lightest', '#EBFFEC')
      document.documentElement.style.setProperty('--light-grad', 'rgba(188, 196, 114, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(235, 255, 236, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-spring"
      break
    case "cool":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#05487F')
      document.documentElement.style.setProperty('--medium', '#5F79A0')
      document.documentElement.style.setProperty('--light', '#B2B2ED')
      document.documentElement.style.setProperty('--lightest', '#E3FCFF')
      document.documentElement.style.setProperty('--light-grad', 'rgba(178, 178, 237, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(227, 252, 255, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-cool"
      break
    case "warm":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#9B1212')
      document.documentElement.style.setProperty('--medium', '#A06550')
      document.documentElement.style.setProperty('--light', '#DDAE80')
      document.documentElement.style.setProperty('--lightest', '#FCEBEB')
      document.documentElement.style.setProperty('--light-grad', 'rgba(221, 174, 128, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(252, 235, 235, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-warm"
      break
    case "grayscale":
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#3A3A3A')
      document.documentElement.style.setProperty('--medium', '#777777')
      document.documentElement.style.setProperty('--light', '#BABABA')
      document.documentElement.style.setProperty('--lightest', '#F2F2F2')
      document.documentElement.style.setProperty('--light-grad', 'rgba(186, 186, 186, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(242, 242, 242, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-grayscale"
      break
    default:
      document.documentElement.style.setProperty('--darkest', '#2B2B2B')
      document.documentElement.style.setProperty('--dark', '#2C4035')
      document.documentElement.style.setProperty('--medium', '#5C856F')
      document.documentElement.style.setProperty('--light', '#9CC7B0')
      document.documentElement.style.setProperty('--lightest', '#E1FFE1')
      document.documentElement.style.setProperty('--light-grad', 'rgba(156, 199, 176, 0.7)')
      document.documentElement.style.setProperty('--lightest-grad', 'rgba(225, 255, 225, 0.8)')
      document.getElementById("navbarBrand").className = "svg-logo-green"
      break

  }
}

//Sets the color of the webpage and sets cookies accordingly
function setColor(c) {
  setCookie("color", c, 365)
  var path = window.location.pathname
  var page = path.split("/").pop()
  if (page == "home.html") setHomeBackground()
  setPageColor()
}

//Auxillary search function
function search(){
  let searchVal = document.getElementById("artistSearch").value
  let artist = (document.getElementById("searchType").value === "artist")
  if(searchVal !== "" && searchVal !== undefined){
    if(artist){
      window.location = "search.html?" + "artist=" + searchVal
    }else{
      window.location = "search.html?" + "song=" + searchVal
    }
  }
}

//Function for search page to collective and retrieve results.
function searchQuery() {
  let type
  let name

  let queriedItem = decodeURIComponent(location.search.substring(1))
  queriedItem = queriedItem.split("=")
  if (queriedItem !== null) {
    if (queriedItem.length == 2){
      type = queriedItem[0]
      name = queriedItem[1]
      document.getElementById("searchType").value = type
      document.getElementById("searchType").innerHTML = type + "s"
      document.getElementById("artistSearch").value = name
    }
    else{
      return
    }
  }
  else{
    return
  }
  if (type === "song") {
    // text.innerHTML = "songs"
    document.getElementById("searchDropdown").innerHTML = "search by songs"
    document.getElementById("artistSearch").placeholder = "type a song name"
    document.getElementById("searchType").value = "song"
    document.getElementById("searchType").innerHTML = "songs"

  } else {
    document.getElementById("artistSearch").placeholder = "type an artist name"
    document.getElementById("searchDropdown").innerHTML = "search by artists"
    document.getElementById("searchType").value = "artist"
    document.getElementById("searchType").innerHTML = "artists"
  }

  let searchResults = document.getElementById("searchResults")
  searchResults.classList.remove("show")
  const artists = []
  const songs = []

  // only display headers if there is a name in the text box, fixes issue with going back and forth between pages with back/forward button - Cora
  // if (artistName != "") {
  //   document.getElementById("searchResults").classList.add("show")
  // }
  //First correct artistName if given invalid artist

  if(type === "artist"){

    var artistName = document.getElementById("artistSearch").value
    fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getcorrection&format=json&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
      return response.json()
    })
      .then(function (data) {
        if (data.corrections.correction !== undefined) {
          artistName = (data.corrections.correction.artist.name)
          artists.push(artistName)
          name = artistName
          document.getElementById("searchResults").classList.add("show")
        } else {
          artistName = ""
        }

        document.getElementById("firstResultsTitle").innerHTML = "Similar Artists"
        document.getElementById("secondResultsTitle").innerHTML = "Top Tracks by " + name

      }).then(function () {
        if (artistName === "") {
          return
        }
        // Get similar artists
        fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&format=json&limit=" + (artistLimit - 1) + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
          return response.json()
        })
          .then(function (data) {
            similarArtists = data.similarartists.artist
            // searchTopTracksResults
            var cardList1 = document.getElementById("firstResultsContainer")
            a_counter = 0
            cardList1.innerHTML = ''
            cardList1.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + artistName + "</h4></div><div class='col col-button'>" +
              "<button id='a" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
            a_counter = a_counter + 1
            similarArtists.forEach(artist => {
              artists.push(artist.name)
              cardList1.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + artist.name + "</h4></div><div class='col col-button'>" +
                "<button id='a" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
              a_counter = a_counter + 1
            })
          }).then(function () {
            if (artistName === "") {
              return
            }
            document.getElementById('a0').onclick = function () {
              setArtist(artistName)
            }

            similarArtists.forEach(function (artist, num) {
              let actualnum = num + 1
              document.getElementById('a' + actualnum).onclick = function () {
                setArtist(artist.name)
              }
            })

            // Get top tracks for artist
            fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&format=json&limit=" + songLimit + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
              return response.json()
            })
              .then(function (data) {
                let counter = 0
                var cardList = document.getElementById("secondResultsContainer")
                cardList.innerHTML = ''
                topTracks = data.toptracks.track
                topTracks.forEach(track => {
                  songs.push(track.name)
                  cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + track.name + "</h4></div><div class='col col-button'>" +
                    "<button id='t" + counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
                  counter = counter + 1
                })
              }).then(function () {
                songs.forEach(function (song, num) {
                  document.getElementById('t' + num).onclick = function () {
                    setSong(artistName, song)
                  }
                })
              })
          })
      })
      .catch(function (err) {
        console.warn('Something went wrong when executing the necessary queries', err)
      })
  }
  else if(type === "song"){
    document.getElementById("firstResultsTitle").innerHTML = "Top Track Results"
    document.getElementById("secondResultsTitle").innerHTML = "Similar Artists"
    let artistNames = []
    var songName = document.getElementById("artistSearch").value
    fetch("https://ws.audioscrobbler.com/2.0/?method=track.search&format=json&track=" + songName + "&api_key=" + lastFm_key).then(function (response) {
      return response.json()
    })
      .then(function (data) {
        songName = data.results.trackmatches.track[0].name
        if (data.results.trackmatches !== undefined) {
          artistName = data.results.trackmatches.track[0].artist
          artists.push(artistName)
          songs.push(data.results.trackmatches.track[0].name)
          artistNames.push(data.results.trackmatches.track[0].artist)
          songLimit = 9
          document.getElementById("firstResultsContainer").innerHTML = ""
          document.getElementById("secondResultsContainer").innerHTML = ""
          document.getElementById("firstResultsContainer").innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + songs[0] + " by " + artistNames[0] + "</h4></div><div class='col col-button'>" +
            "<button id='t" + 0 + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
          document.getElementById("searchResults").classList.add("show")
        } else {
          artistName = ""
        }

      }).then(function () {
        if (artistName === "") {
          return
        }
        // Get similar artists
        fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&format=json&limit=" + (artistLimit - 1) + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
          return response.json()
        })
          .then(function (data) {
            similarArtists = data.similarartists.artist
            // searchTopTracksResults
            var cardList1 = document.getElementById("secondResultsContainer")
            a_counter = 0

            cardList1.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + artistName + "</h4></div><div class='col col-button'>" +
              "<button id='a" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
            a_counter = a_counter + 1
            similarArtists.forEach(artist => {
              artists.push(artist.name)
              cardList1.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + artist.name + "</h4></div><div class='col col-button'>" +
                "<button id='a" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
              a_counter = a_counter + 1
            })
          }).then(function () {
            if (artistName === "") {
              return
            }
            document.getElementById('a0').onclick = function () {
              setArtist(artistName)
            }

            similarArtists.forEach(function (artist, num) {
              let actualnum = num + 1
              document.getElementById('a' + actualnum).onclick = function () {
                setArtist(artist.name)
              }
            })
            // Get similar tracks for song
            fetch("https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&format=json&limit=" + (songLimit) + "&track=" + songName + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
              return response.json()
            })
              .then(function (data) {
                let counter = 1
                var cardList = document.getElementById("firstResultsContainer")
                topTracks = data.similartracks.track

                topTracks.forEach(track => {
                  songs.push(track.name)
                  artistNames.push(track.artist.name)
                  cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + track.name + " by " + track.artist.name + "</h4></div><div class='col col-button'>" +
                    "<button id='t" + counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
                  counter = counter + 1
                })
              }).then(function () {
                songs.forEach(function (song, num) {
                  document.getElementById('t' + num).onclick = function () {
                    setSong(artistNames[num], song)
                  }
                })
              })
          })
      })
      .catch(function (err) {
        console.warn('Something went wrong when executing the necessary queries', err)
      })
  }

}

//Returns an artist's concerts, related artists, info, and more to the frontend.
function loadArtistPage() {
  const artists = []
  const songs = []
  const events = []
  let artistInfo
  let artistName = queriedItem
  getEventPage(artistName)
  // First gets the artistInfo, then this part of the function is virtually identical to searchQuery
  fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&format=json&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
    return response.json()
  })
    .then(function (data) {
      artistInfo = data
      info = document.getElementById("artistInfo")
      info.innerHTML = ""
      info.innerHTML += "<div class='jsCard'><p>" + artistInfo.artist.bio.summary.replace("<a", "<a target='_blank'") + "</p>" + "<p>LastFM Listeners: "
        + artistInfo.artist.stats.listeners + "</p>" + "</div>"

      var text = "<div class='row'>"
      artistInfo.artist.tags.tag.forEach(num => {
        text += "<div class='col-auto' style='padding:0,8px'><h4><a class='tag' target='_blank' href='" + num.url + "'>" + num.name + "</a></div>"
      })
      text += "</div>"
      info.innerHTML += text
      info.innerHTML += "</div>"
    }).then(function () {
      // Get similar artists
      fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&format=json&limit=" + artistLimit + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
        return response.json()
      })
        .then(function (data) {

          similarArtists = data.similarartists.artist
          cardList = document.getElementById("artistSimilarArtists")
          let counter = 0
          similarArtists.forEach(function (artist, num) {
            artists.push(artist.name)

            cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + artist.name + "</h4></div><div class='col col-button'>" +
              "<button id='a" + num + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"

          })
        }).then(function () {
          // Get top tracks for artist
          artists.forEach(function (artist, num) {
            document.getElementById('a' + num).onclick = function () {
              setArtist(artist)
            }
          })
          fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&format=json&limit=" + songLimit + "&artist=" + artistName + "&api_key=" + lastFm_key).then(function (response) {
            return response.json()
          })
            .then(function (data) {
              topTracks = data.toptracks.track
              let counter = 0
              cardList = document.getElementById("artistTopTracks")
              topTracks.forEach(track => {
                songs.push(track.name)
                cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + track.name + "</h4></div><div class='col col-button'>" +
                  "<button id='t" + counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
                counter = counter + 1
              })
            }).then(function () {
              songs.forEach(function (song, num) {
                document.getElementById('t' + num).onclick = function () {
                  setSong(artistName, song)
                }
              })
            })
        })
        .catch(function (err) {
          console.warn('Something went wrong when executing the necessary queries', err)
        })
    })
}

//Returns a song's Lyrics, Info, Related Songs, and Album Songs to the frontend.
function loadSongPage() {
  let songInfo
  let songTitle = queriedItem[0]
  let artistName = queriedItem[1]
  let similarTracks = []
  let otherSongsFromAlbum = []

  getLyrics(songTitle, artistName)
  iTunesSearch(songTitle, artistName)

  //Getting all similar songs (present in card format)
  fetch("https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=" + artistName + "&track=" + songTitle + "&limit=" + songLimit + "&api_key=d2392b98754e7803f61a33e9fbc82c3f&format=json")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      similarTracks = data.similartracks.track
      var cardList = document.getElementById("songSimilarTracks")
      a_counter = 0
      cardList.innerHTML = ''
      similarTracks.forEach(track => {
        cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + track.name + " by " + track.artist.name + "</h4></div><div class='col col-button'>" +
          "<button id='t" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
        a_counter = a_counter + 1
      })
    }).then(function () {
      similarTracks.forEach(function (track, num) {
        document.getElementById('t' + num).onclick = function () {
          setSong(track.artist.name, track.name)
        }
      })
    })

  //Find all Album Tracks and Song Info (present Album Tracks in card format)
  fetch("https://ws.audioscrobbler.com/2.0/?method=track.getInfo&format=json&artist=" + artistName + "&api_key=" + lastFm_key + "&track=" + songTitle).then(function (response) {
    return response.json()
  }).then(function (data) {
    var songData = document.getElementById("songInfo")
    let duration = data.track.duration / 1000
    let durationS = ("0" + duration % 60).slice(-2)
    var textData = ''
    textData += "<div class='jsCard'><h4>Duration: " + Math.trunc(duration / 60) + ":" + durationS + "</h4>"
    textData += "<h4>LastFM Listeners: " + data.track.listeners + "</h4>"
    textData += "<h4>LastFM Playcount: " + data.track.playcount + "</h4></div>"
    songData.innerHTML += textData
    let track = data.track.toptags.tag
    var text = "<div class='row'>"
    data.track.toptags.tag.forEach(num => {
      text += "<div class='col-auto' style='padding:0,8px'><h4><a class='tag' target='_blank' href='" + num.url + "'>" + num.name + "</a></div>"
    })
    text += "</div>"
    songData.innerHTML += text
    songData.innerHTML += "</div>"

    //return the album info
    let albumMBID = data.track.album.mbid
    fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + lastFm_key + "&mbid=" + albumMBID + "&format=json")
      .then(function (response) {
        return response.json()
      })
      .then(function (items) {
        var cardList = document.getElementById("songAlbumTracks")
        cardList.innerHTML = ''
        a_counter = 0
        otherSongsFromAlbum = items.album.tracks.track
        if(otherSongsFromAlbum.length == 0)
        {
          cardList.innerHTML += "<div class='jsCard'><h4>This song is a single!</h4></div>"
        }
        else{
          otherSongsFromAlbum.forEach(track => {
            cardList.innerHTML += "<div class='jsCard'><div class='row'><div class='col-sm-8'><h4>" + track.name + " by " + artistName + "</h4></div><div class='col col-button'>" +
              "<button id='g" + a_counter + "' class='btn btn-md jsButton'>more info <i class='fas fa-arrow-circle-right'></i></button></div></div></div>"
            a_counter = a_counter + 1
          })
        }
      }).then(function () {
        otherSongsFromAlbum.forEach(function (track, num) {
          document.getElementById('g' + num).onclick = function () {
            setSong(artistName, track.name)
          }
        })
      })
  })
}

//Gets a song's lyrics given song and artist name
function getLyrics(songTitle, artistName) {
  const query = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=" + songTitle + "&q_artist=" + artistName + "&apikey=" + musixMatch_key
  //const query = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=Back in Black&q_artist=AC/DC&apikey=2955ef75358d45c71b8079065c3d288e"
  //fetch lyrics page
  fetch(query).then(function (response) {
    return response.json()
  })
    .then(function (data) {
      var songLyrics = document.getElementById("songLyrics")
      let lyrics = data.message.body.lyrics.lyrics_body
      lyrics = lyrics.substring(0, lyrics.indexOf("...\n") + 3).replaceAll('\n', '<br>')
      songLyrics.innerHTML = "<div class='jsCard'><p>" + lyrics + "</p></div>"
    })
    .catch(function (err) {
      console.warn("Something went wrong when executing the necessary queries.\n", err)
    })
}

// Deals with data missing for the getEventPage function (takes a singular event and parses data)
function eventHelper(obj) {
  let eventData = []
  var title = (obj.title == "") ? "Concert" : obj.title
  eventData.push("Title: " + title)
  eventData.push("DateTime: " + obj.datetime)

  if (obj.venue != undefined) //have to do this to avoid errors
  {
    if (obj.venue.timezone != undefined) eventData.push("Timezone: " + obj.venue.timezone)
    if (obj.venue.name != undefined) eventData.push("Venue Name: " + obj.venue.name)
    if (obj.venue.location != undefined) eventData.push("Venue Location: " + obj.venue.location)
    if (obj.venue.type != undefined) eventData.push("Type of Concert: " + obj.venue.type)
  }
  //Find where the api key starts and snips it off
  eventData.push("URL: " + obj.url.substring(0, obj.url.indexOf("?app_id")))
  return eventData
}

// Pulls all of an artist's upcoming events
function getEventPage(artistName) {
  const query = "https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=" + bandsInTown_key + "&date=upcoming"
  const allEvents = []
  // fetch event page
  fetch(query).then(function (response) {

    return response.json()
  })
    .then(function (data) {
      // Grab all events
      data.forEach(function (obj) {
        allEvents.push(eventHelper(obj))
      })
      let eventList = document.getElementById("artistEvents")
      eventList.innerHTML = ""
      var text = ""
      if (allEvents.length == 0) {
        eventList.innerHTML += "<div class='jsCard'><h4>No upcoming events for this artist.</h4></div>"
      }
      allEvents.forEach((item, i) => {
        if (i % 2 == 0) {
          text = ""
          text += "<div class='row'>"
        }
        text += "<div class='col-sm-6'>"
        text += "<div class='jsCard'>"
        text += "<h4> Event #" + (i + 1) + "</h4>"
        item.forEach((info) => {
          if (info.indexOf("URL:") != -1)
            text += "<p><a target='_blank' href='" + info.substring(4) + "'> Link to BandsInTown</a></p>"
          else if (info.indexOf("DateTime:") != -1) {
            words = info.substring(9).split("T")
            text += "<p> Date: " + words[0] + "<br> Time: " + words[1] + "</p>"
          } else
            text += "<p> " + info + "</p>"
        })
        text += "</div></div>"
        if (i % 2 == 1) {
          text += "</div>"
          eventList.innerHTML += text
        }
        if (allEvents.length % 2 == 1 && allEvents.length == i + 1) {
          text += "</div>"
          eventList.innerHTML += text
        }
      })

    })
    .catch(function (err) {
      console.warn("Something went wrong when executing the necessary queries.\n", err)
    })
  // Here is where all events can be pushed into a list on the frontend.
}

//Itunes function to search for a specific song, then pull up the embedded player.
function iTunesSearch(songTitle, artistName){
  fetch("https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=" + artistName +  " by " + songTitle + "&entity=song")
    .then(function (response) {
      return response.json()
      })
      .then(function(data){
        let trackURL
        let embedTrackURL
        //Easier to do a normal for loop because I want to break
        for(i = 0; i < data.results.length; i++){
          track = data.results[i]
          if(track.trackCensoredName.toUpperCase() === songTitle.toUpperCase()){
            trackURL = track.trackViewUrl
            embedTrackURL = trackURL.substring(0,8) + "embed." + trackURL.substring(8)
            break
          }
        }
        return embedTrackURL
        })
        .then(function(embedTrackURL){
            var embed = document.getElementById("embeddedPlayer")
            embed.innerHTML = ""
            embed.innerHTML += '<center><iframe id="framePlayer" name="apple-player" allow="autoplay *; encrypted-media *;" frameborder="0" height="150"' +
            'style="width:100%;max-width:660px;overflow:hidden;background:transparent;" '+
            'sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" '+
            'src=' + embedTrackURL + '></iframe></center>'
        })
        .catch(function (err) {
          console.warn("Something went wrong when executing the necessary iTunes queries.\n", err)
          var embed = document.getElementById("embeddedPlayer")
          embed.innerHTML = "<div class='jsCard'><h3>Song Player Not Available</h3></div>"
        })
}

//Sets the artist
function setArtist(artistName) {
  pageSong = artistName
  window.location = "artist.html?" + artistName
}

//Sets the song
function setSong(artistName, songName) {
  pageSong = songName
  window.location = "song.html?" + songName + "|" + artistName
}

// Cora function tests for collapse
function collapseArrowChange(headerID, iconID) {
  document.getElementById(headerID).addEventListener("click", function() {
    var current = document.getElementById(iconID)
    if (current.className.substr(15, 2) === "up") {
      current.className = current.className.replace("up", "down")
    } else {
      current.className = current.className.replace("down", "up")
    }
  })
}

function addCollapse() {
  collapseArrowChange("resultHeader1", "resultIcon1")
  collapseArrowChange("resultHeader2", "resultIcon2")
  collapseArrowChange("resultHeader3", "resultIcon3")
  collapseArrowChange("resultHeader4", "resultIcon4")
}

function switchSearchText(text) {
    if (text === "song") {
      // text.innerHTML = "songs"
      document.getElementById("searchDropdown").innerHTML = "search by songs"
      document.getElementById("artistSearch").placeholder = "type a song name"
      document.getElementById("searchType").value = "song"
      document.getElementById("searchType").innerHTML = "songs"
      return false
    } else {
      document.getElementById("artistSearch").placeholder = "type an artist name"
      document.getElementById("searchDropdown").innerHTML = "search by artists"
      document.getElementById("searchType").value = "artist"
      document.getElementById("searchType").innerHTML = "artists"
      return true
    }
}
