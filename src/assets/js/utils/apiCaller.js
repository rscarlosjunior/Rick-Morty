import store from '@/store/index'
import {api} from '@/services/API'

const setCharacters = () => {
  return api.getCharacters()
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const setEpisodeCharacters = (id) => {
  return api.getCharactersById(id)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const setEpisodes = (number) => {
  return api.getEpisodes(number)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addEpisodes",data)
  })
}
const getPaginationCharacters = (page) => {
  return api.getPaginationCharacters(page)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const getPaginationEpisodes = (page) => {
  return api.getPaginationEpisodes(page)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addEpisodes",data)
  })
}
const getCharactersByName = (name) => {
  return api.getCharactersByName(name)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}

export {getPaginationCharacters, getCharactersByName, setCharacters, setEpisodes, setEpisodeCharacters, getPaginationEpisodes }