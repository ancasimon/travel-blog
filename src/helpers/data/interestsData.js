import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getInterestsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/interests.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbData = response.data;
      const interests = [];
      if (fbData) {
        Object.keys(fbData).forEach((interestPoint) => {
          fbData[interestPoint].id = interestPoint;
          interests.push(fbData[interestPoint]);
        });
      }
      resolve(interests);
      console.log('interes', interests);
    })
    .catch((err) => reject(err));
});

export default { getInterestsByUid };
