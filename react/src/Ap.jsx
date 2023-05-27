import React from 'react';
import Map from './components/Gps/MAP';
import Header from './components/Gps/Header';
const Ap = () => {
  const apiKey = 'AIzaSyBabVU7azrnpCvM8iqwMhq52-DAuIlS-hg'; //API Google Maps key

  return (
    <div>
      <Header/>
      <Map apiKey={apiKey} />
    </div>
  );
};

export default Ap;
