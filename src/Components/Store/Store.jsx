import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Store.css';
import hdrbg from '../../assets/hdr-bg.webp';
import red_icon from '../../assets/warning.png';

// Helper component to recenter the map based on coordinates
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

const Store = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPos = [position.coords.latitude, position.coords.longitude];
        setCurrentPosition(initialPos);
      },
      (error) => console.error('Error getting initial location:', error),
      { enableHighAccuracy: true }
    );

    const watchID = navigator.geolocation.watchPosition(
      (position) => {
        const newPos = [position.coords.latitude, position.coords.longitude];
        setCurrentPosition(newPos);
      },
      (error) => console.error('Error getting updated location:', error),
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  const handleSearch = () => {
    const baseUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`;
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        const searchResults = data.map(item => ({
          lat: item.lat,
          lon: item.lon,
          label: item.display_name
        }));
        setSearchResults(searchResults);
        if (searchResults.length > 0) {
          setCurrentPosition([searchResults[0].lat, searchResults[0].lon]);
        }
      })
      .catch(error => console.error('Error fetching search results:', error));
  };

  return (
    <div className='map'>
      <h1 className='head2'>Stores Nearby</h1>
      <h3 className='alert-box'> <img src={red_icon} alt="" className="red_icon" /> Please make sure to 'allow the access to the location ' to view the API map</h3>
      <img src={hdrbg} alt="Header Background" className='hdrbg' />
      <div className="search-box">
          <input
            type="text"
            className='input'
            placeholder="Search for places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className='searchm'>Search</button>
      </div>

      <div className="map-container">
        {currentPosition && (
          <MapContainer center={currentPosition} zoom={13} style={{ height: '400px', width: '90%' , border:'3px solid grey', borderRadius: '20px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <SetViewOnClick coords={currentPosition} />
            <Marker position={currentPosition}>
              <Popup>You are here!</Popup>
            </Marker>
            {searchResults.map(result => (
              <Marker key={result.label} position={[result.lat, result.lon]}>
                <Popup>{result.label}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Store;
