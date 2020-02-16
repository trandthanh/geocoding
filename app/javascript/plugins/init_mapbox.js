import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const mapElement = document.getElementById('map');
const markers = JSON.parse(mapElement.dataset.markers);

const addMarkersToMap = (map, markers) => {
  if (mapElement) {
    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(map);
    });
  }
}

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const initMapbox = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY29yYWxpZWRlbHBoYSIsImEiOiJjanJ1aDRkd2kweWI1NDRtaTk4N2I1ZHJlIn0.9oQDlKfcOgH4v4KZA6bo8w';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
  addMarkersToMap(map, markers);
  fitMapToMarkers(map, markers);
}

export { initMapbox };
