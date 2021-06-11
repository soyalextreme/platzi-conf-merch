import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY_POSITIONS_STACK } from '../.config';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${API_KEY_POSITIONS_STACK}&query=${address}`;

  //

  useEffect(async () => {
    const response = await axios(API);
    console.log(response.data.data[0]);
    setMap({
      lat: response.data.data[0].latitude,
      lng: response.data.data[0].longitude,
    });
  }, []);

  return map;
};

export default useGoogleAddress;
