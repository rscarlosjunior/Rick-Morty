import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

export const api = {
    getCharacters: () => axiosInstance.get('/character'),
    getEpisodes: () => axiosInstance.get('/episode')
}