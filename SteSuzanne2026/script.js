var map = L.map('map').setView([48.8566, 2.3522], 13); // Centré sur Paris

// Ajouter une couche de tuiles (par exemple OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = L.markerClusterGroup();

var marker1 = L.marker([48.8566, 2.3522]).bindPopup('Paris');
var marker2 = L.marker([48.8584, 2.2945]).bindPopup('Tour Eiffel');
var marker3 = L.marker([48.8529, 2.3499]).bindPopup('Notre-Dame');
var marker4 = L.marker([48.8606, 2.3376]).bindPopup('Louvre');

markers.addLayer(marker1);
markers.addLayer(marker2);
markers.addLayer(marker3);
markers.addLayer(marker4);


map.addLayer(markers);