import axios from 'axios';

const instance = axios.create({
  baseURL: '...' //The API (Cloud Function) will be here
})

export default instance;