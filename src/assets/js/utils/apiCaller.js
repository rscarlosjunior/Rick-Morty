import store from '@/store/index'
import {api} from '@/services/API'

const getPaginationCharacters = (page) => {
  return api.getPaginationCharacters(page)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const getCharactersByName = (name) => {
  return api.getCharactersByName(name)
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const setCharacters = () => {
  return api.getCharacters()
  .then(response => response.data)
  .then(data => {
    store.dispatch("addCharacters",data)
  })
}
const setEpisodes = () => {
  return api.getEpisodes()
  .then(response => response.data)
  .then(data => {
    store.dispatch("addEpisodes",data)
  })
}

export {getPaginationCharacters, getCharactersByName, setCharacters, setEpisodes }