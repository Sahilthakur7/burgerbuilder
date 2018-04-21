import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerreact-9ae07.firebaseio.com/'
});

export default instance;
