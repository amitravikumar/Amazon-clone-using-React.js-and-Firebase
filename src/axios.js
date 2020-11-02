import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-e486a/us-central1/api' //The API (Cloud Function) will be here
})

export default instance;