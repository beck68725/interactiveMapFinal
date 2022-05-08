var map = L.map('map').setView([42.7550044, -98.809875], 13);
// Create map:                                                       
// const myMap = {
//     coordinates: [],
//     businesses: [],
//     map: {},
//     markers: {},

// //build map
//     buildMap() {
//         this.map = Lmap('map', {
//             center: this.coordinates,
//             zoom: 11,
//         }),
//     // Add OpenStreetMap tiles:

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //     // Create and add a geolocation marker:
    L.marker([42.7550044, -98.809875]).addTo(map)
        .bindPopup('You are here.')
        .openPopup();

//     },
// }
//find user's location

      var div  = document.getElementById("location");
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }

      function showPosition(position) {
        div.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
      }

      function showError(error) {
        if(error.PERMISSION_DENIED){
            div.innerHTML = "The User have denied the request for Geolocation.";
        }
      }
      getLocation();
    