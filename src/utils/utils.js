import { toast } from 'react-hot-toast';
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants';

export function callToast() {
  toast("Hello Darkness!", {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#FFF',
      fontFamily: 'Lato'
    }
  });
}

export function getAxios(url, callback) {
  axios
    .get(url)
    .then(callback)
    .catch((err) => console.error(err));
}

export const makeEndpoint = (latitude, longitude) => {
  const params = `?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  return `${API_BASE_URL}${params}`
}