let lat = -45.87;
let lng = 170.5;
let zoom = 13;

let map = L.map('map', { center: [lat, lng], zoom: zoom });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({ metric: true, imperial: false }).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Dunedin"
    }
}

L.geoJSON(jsonPunkt, {
    style: function (feature) {
        return { color: feature.properties.color };
    }
}).bindPopup(function (layer) {
    return `
    <h2>${layer.feature.properties.name}</h2>   
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)}</li>
    </ul>
`;
}).addTo(map);