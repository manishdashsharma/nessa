import { useEffect } from 'react';

const MapComponent = ({ data }) => {
  useEffect(() => {
    // Load Leaflet CSS and JS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css';
    document.head.appendChild(link);

    // Initialize map
    const L = window.L;
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each location
    data.forEach(location => {
      L.marker([location.latitude, location.longitude])
        .bindPopup(`
          <b>${location.cityName}, ${location.countryName}</b><br>
          IP: ${location.ipAddress}<br>
          Region: ${location.regionName}
        `)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div id="map" className="h-64 rounded-lg" />
    </div>
  );
};

export default MapComponent;
