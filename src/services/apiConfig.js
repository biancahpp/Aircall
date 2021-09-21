import axios from 'axios';

const api = axios.create({
  baseURL: "https://aircall-job.herokuapp.com" ,
})

export default api;
