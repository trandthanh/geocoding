import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const initMapbox = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY29yYWxpZWRlbHBoYSIsImEiOiJjanJ1aDRkd2kweWI1NDRtaTk4N2I1ZHJlIn0.9oQDlKfcOgH4v4KZA6bo8w';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
}

export { initMapbox };
