import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-729dd.firebaseio.com/'
});

export default instance;
