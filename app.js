
//Create map:                                                       
 const myMap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},

//build map
    buildMap() {
        this.map = L.map('map', {
            center: this.coordinates,
            zoom: 11,
        }),

      // Add OpenStreetMap tiles:

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          minZoom: '11',
        }).addTo(this.map)
        // create and add geolocation marker
        const marker = L.marker(this.coordinates)
        marker
        .addTo(this.map)
        .bindPopup('<p1><b>You are here</b><br>Have a Nice Day!</p1>')
        .openPopup()
      },
    
      // add business markers
      addMarkers() {
        for (var i = 0; i < this.businesses.length; i++) {
        this.markers = L.marker([
          this.businesses[i].lat,
          this.businesses[i].long,
        ])
          .bindPopup(`<p1>${this.businesses[i].name}</p1>`)
          .addTo(this.map)
        }
      },
    }
  //get coordinates via geolocation api
  async function getCoords() {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
  } 
  //get foursquare businessess
  async function getFoursquare(business) {
    const options = {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3E/KwNqwhkapXcSrJ319l/hYNy344nrmLyRFslCwARFA='
      }
    }
    let limit = 5
    let lat = myMap.coordinates[0]
    let lon = myMap.coordinates[1]
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
    let data = await response.text()
    let parsedData = JSON.parse(data)
    let businesses = parsedData.results
    return businesses
  }
  //process fourquare array
  function processBusinesses(data) {
    let businesses = data.map((element) => {
      let location = {
        name: element.name,
        lat: element.geocodes.main.latitude,
        lon: element.geocodes.main.longitude
      };
      return location
    })
    return businessess
  }
  //window load
  window.onload = async () => {
    const coords = await getCoords()
    console.log(coords)
    myMap.coordinates = coords
    myMap.buildMap()
  }

  //business submit button
  document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
  })

// //find user's location

//       var div  = document.getElementById("location");
//       function getLocation() {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition, showError);
//         } else {
//           div.innerHTML = "The Browser Does not Support Geolocation";
//         }
//       }

//       function showPosition(position) {
//         div.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
//       }

//       function showError(error) {
//         if(error.PERMISSION_DENIED){
//             div.innerHTML = "The User have denied the request for Geolocation.";
//         }
//       }
//       getLocation();
    
//       const options = {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           Authorization: 'fsq3FCLMyAhKd7/IcJYt3cQAbGtfCSvfjppsffWlHSoO5Lg='
//         }
//       };
//     }      
//       fetch('https://api.foursquare.com/v3/places/search?query=restaurant&ll=42.7550044%2C-98.8098758&radius=2000&limit=5', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));