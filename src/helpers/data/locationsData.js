import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getLocationsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/locations.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const locationData = response.data;
      const locations = [];
      if (locationData) {
        Object.keys(locationData).forEach((location) => {
          locationData[location].id = location;
          locations.push(locationData[location]);
        });
      }
      resolve(locations);
    })
    .catch((err) => reject(err));
});

export default { getLocationsByUid };
