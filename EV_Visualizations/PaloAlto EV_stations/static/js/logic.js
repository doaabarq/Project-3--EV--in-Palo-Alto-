// Create the Leaflet map
function createMap(data) {
  var map = L.map('map').setView([37.4419, -122.1430], 13);
  
  // Base Layers
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  });
  
  var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }); 
  
  // Overlay Layers
  var markers = L.markerClusterGroup();
  
  data.forEach(function(station) {
    var marker = L.marker([station.Latitude, station.Longitude])
      .bindPopup("<b>Station Name:</b> " + station.StationName + "<br>"
                 + "<b>Street:</b> " + station.Street)
      .addTo(markers);
  });
  
  // Create layer groups
  var baseLayers = {
    "OpenStreetMap": osm,
    "Google Sat": googleSat,
    "Google Street": googleStreets
  };
  
  var overlays = {
    "Markers": markers
  };
  
  // Create layer group manager control
  var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
  
  // Set the default base layer
  osm.addTo(map);
  
  // Add event listener to handle layer group visibility
  map.on("overlayadd overlayremove", function(eventLayer) {
    if (eventLayer.type === "overlayadd") {
      // Layer added, perform any actions needed
    } else if (eventLayer.type === "overlayremove") {
      // Layer removed, perform any actions needed
    }
  });
}


fetch('http://127.0.0.1:5000/api/data')
  .then(response => response.json())
  .then(data => {
//     // Process the data and create the Leaflet map
    createMap(data);
  })
 .catch(error => console.error(error));

