// Create map:                                                       
const myMap = {

}
   
});

// Add OpenStreetMap tiles:
L.tileLayer('https://.tile.openstreetmap.org/{z}/{x}/{Y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

// Create and add a geolocation marker:
const marker = L.marker([])
marker.addTo(myMap).bindPopup('<p1><b>You are Here</b></p1>').openPopup()
