import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import styles from './styles';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const travelModeColors = {
  'DRIVING': 'red',
  'WALKING': 'blue',
  'BICYCLING': 'green',
  'TRANSIT': 'purple'
};

const Map = ({ apiKey }) => {
  const [directions, setDirections] = useState(null);
  const [locations, setLocations] = useState([]);
  const [destination, setDestination] = useState('');
  const [startDestination, setStartDestination] = useState('');
  const [autocompleteStart, setAutocompleteStart] = useState(null);
  const [autocompleteDestination, setAutocompleteDestination] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [travelMode, setTravelMode] = useState('');
  const [duration, setDuration] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [counter, setCounter] = useState(0);
  const routeOptimization = true;
  const [isRouteCalculated, setIsRouteCalculated] = useState(false);
  const [shouldCalculateRoute, setShouldCalculateRoute] = useState(false);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleStartDestinationChange = (event) => {
    setStartDestination(event.target.value);
  };

  const handlePlaceSelect = useCallback(
    (type) => {
      const addressObject =
        type === 'start'
          ? autocompleteStart.getPlace()
          : autocompleteDestination.getPlace();
      const address = addressObject.formatted_address;
      const lat = addressObject.geometry.location.lat();
      const lng = addressObject.geometry.location.lng();
      const newLocation = { lat, lng };
      setLocations([...locations, newLocation]);
      if (type === 'start') {
        setStartDestination(address);
        setAutocompleteStart(null);
      } else {
        setDestination(address);
        setAutocompleteDestination(null);
      }
      setStartDestination('');
      setDestination('');
      setSelectedDestinations([...selectedDestinations, address]);
    },
    [autocompleteStart, autocompleteDestination, locations, selectedDestinations]
  );

  useEffect(() => {
    if (window.google && !autocompleteStart) {
      const options = {
        types: ['establishment'],
      };
      const inputElement = document.getElementById('start-destination-input');
      const autocompleteInstance = new window.google.maps.places.Autocomplete(
        inputElement,
        options
      );
      setAutocompleteStart(autocompleteInstance);
    }
    if (window.google && !autocompleteDestination) {
      const options = {
        types: ['establishment'],
      };
      const inputElement = document.getElementById('destination-input');
      const autocompleteInstance = new window.google.maps.places.Autocomplete(
        inputElement,
        options
      );
      setAutocompleteDestination(autocompleteInstance);
    }
  }, [autocompleteStart, autocompleteDestination]);

  const calculateRoute = (start, waypoints) => {
    const directionsService = new window.google.maps.DirectionsService();
    const waypointsCoordinates = waypoints.map((location) => ({
      location: new window.google.maps.LatLng(location.lat, location.lng),
      stopover: true,
    }));
    const destinationCoordinate = new window.google.maps.LatLng(
      locations[locations.length - 1]?.lat,
      locations[locations.length - 1]?.lng
    );
    const destinationAddress = selectedDestinations[selectedDestinations.length - 1];
    if (start && destinationCoordinate) {
      directionsService.route(
        {
          origin: start,
          destination: destinationCoordinate,
          waypoints: waypointsCoordinates,
          optimizeWaypoints: routeOptimization,
          travelMode: travelMode,
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
            const route = result.routes[0];
            const totalDuration = route.legs.reduce((acc, leg) => acc + leg.duration.value, 0);
            const hours = Math.floor(totalDuration / 3600);
            const minutes = Math.floor((totalDuration % 3600) / 60);
            const seconds = totalDuration % 60;
            setDuration({ hours, minutes, seconds });

            if (routeOptimization) {
              const order = result.routes[0].waypoint_order;
              setSelectedDestinations((prevDestinations) => {
                const start = prevDestinations[0];
                const destinations = prevDestinations.slice(1);
                const sortedDestinations = order.map((index) => destinations[index]);
                return [start, ...sortedDestinations, destinationAddress];
              });
            }
          } else {
            setDirections(null);
            setDuration(null);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (locations.length >= 2 && shouldCalculateRoute) {
      const startCoordinate = new window.google.maps.LatLng(
        locations[0]?.lat,
        locations[0]?.lng
      );
      const waypoints = locations.slice(1, -1);
      calculateRoute(startCoordinate, waypoints);
      setShouldCalculateRoute(false);  // Reset after calculation
    } else {
      setDirections(null);
      setDuration(null);
    }
  }, [locations, travelMode, routeOptimization, shouldCalculateRoute]); // Added shouldCalculateRoute to dependency array


  const handleTravelModeChange = (mode) => {
    setTravelMode(mode);
    setIsRouteCalculated(false);
  };
  const handleCalculateRoute = () => {
    setShouldCalculateRoute(true);
    setIsRouteCalculated(true);
  };
  const handleDeleteDestinations = () => {
    setLocations([]);
    setDirections(null);
    setDuration(null);
    setSelectedDestinations([]);
    setCounter((prevCounter) => prevCounter + 1);
    window.location.reload();
  };

  const handleDeleteDestination = (index) => {
    setLocations((prevLocations) => {
      const updatedLocations = [...prevLocations];
      updatedLocations.splice(index, 1);
      setDirections(null);
      setDuration(null);

      if (updatedLocations.length >= 2) {
        const startCoordinate = new window.google.maps.LatLng(
          updatedLocations[0]?.lat,
          updatedLocations[0]?.lng
        );
        const waypoints = updatedLocations.slice(1, -1);
        calculateRoute(startCoordinate, waypoints);
      }

      return updatedLocations;
    });

    setSelectedDestinations((prevSelectedDestinations) => {
      const updatedSelectedDestinations = [...prevSelectedDestinations];
      updatedSelectedDestinations.splice(index, 1);
      return updatedSelectedDestinations;
    });
  };



return (
  <div style={styles.container}>
    <div style={styles.controlsContainer}>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={startDestination}
          onChange={handleStartDestinationChange}
          placeholder="Search"
          id="start-destination-input"
          style={styles.input}
        />
        <button onClick={() => handlePlaceSelect('start')} style={styles.addButton}>
          Add Destination
        </button>
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="travel-mode">Travel Mode:</label>
        <select
          id="travel-mode"
          value={travelMode}
          onChange={(e) => handleTravelModeChange(e.target.value)}
          style={styles.input}
        >
          <option value="">Select travel mode</option>
          <option value="DRIVING">Driving</option>
          <option value="WALKING">Walking</option>
          <option value="BICYCLING">Bicycling</option>
          <option value="TRANSIT">Transit</option>
        </select>
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleCalculateRoute} style={styles.modeButton}>
            Calculate Route
          </button>
       </div>
      </div>
      <div style={styles.selectedDestinations}>
        <h3>Selected Destinations:</h3>
        {selectedDestinations.map((destination, index) => (
          <div key={index} style={styles.destinationContainer}>
            <p style={styles.destinationText}>{destination}</p>
            <button onClick={() => handleDeleteDestination(index)} style={styles.modeButton}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div style={styles.buttonsContainer}>
        <button onClick={handleDeleteDestinations} style={styles.modeButton}>
          Delete Destinations
        </button>
      </div>
      
      {duration && (
        <p style={styles.duration}>
          Duration: {duration.hours} hours {duration.minutes} minutes {duration.seconds} seconds
        </p>
      )}
      {!directions && isRouteCalculated && (
        <p style={styles.noRouteMessage}>
          No route available for the selected travel mode. Please try a different mode.
        </p>
      )}
    </div>
    <div style={{...styles.mapContainer, ...containerStyle}}> {/* Apply containerStyle here */}
      {currentLocation && (
        <GoogleMap
          key={travelMode}
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={10}
        >
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{ polylineOptions: { strokeColor: travelModeColors[travelMode] } }}
            />
          )}
        </GoogleMap>
      )}
    </div>
  </div>
);
};

export default Map;
