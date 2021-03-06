import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

export const api = {
    getCharacters: () => axiosInstance.get('/character'),
    getCharactersByName: (name) => axiosInstance.get(`/character/?name=${name}`),
    getCharactersById: (id) => axiosInstance.get(`/character/${id}`),
    getPaginationCharacters: (page) => axiosInstance.get(`/character/?page=${page}`),
    getEpisodes: (number) => axiosInstance.get(`/episode/${number ? number : ''}`),
    getPaginationEpisodes: (page) => axiosInstance.get(`/episode/?page=${page}`),
}