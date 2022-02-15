import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.1.116:5000/api/v1',
});

export default instance;