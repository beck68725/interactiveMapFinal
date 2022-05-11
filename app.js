
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
        
      // var map = L.map('map').setView([this.coordinates], 13);
    // Add OpenStreetMap tiles:

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map),

    //     // Create and add a geolocation marker:
    L.marker([this.coordinates]).addTo(this.map)
        .bindPopup('You are here.')
        .openPopup(),

    
}
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
    
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3FCLMyAhKd7/IcJYt3cQAbGtfCSvfjppsffWlHSoO5Lg='
        }
      };
      
      fetch('https://api.foursquare.com/v3/places/search?query=restaurant&ll=42.7550044%2C-98.8098758&radius=2000&limit=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));