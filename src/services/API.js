import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

export const api = {
    getCharacters: () => axiosInstance.get('/character'),
    getPaginationCharacters: (page) => axiosInstance.get(`/character/?page=${page}`),
    getCharactersByName: (name) => axiosInstance.get(`/character/?name=${name}`),
    getEpisodes: () => axiosInstance.get('/episode')
}