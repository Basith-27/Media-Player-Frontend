import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://media-player-backed.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;