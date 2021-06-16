import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCharacters: [],
    allEpisodes: [],
    allCharacterEpisode: []
  },
  getters: {
    getCharacters(state){
      return state.allCharacters
    },
    getEpisodes(state){
      return state.allEpisodes
    },
    getEpisodeCharacter(state){
      return state.allCharacterEpisode
    },
  },
  mutations: {
    setCharacters(state, character){
        state.allCharacters = character
    },
    setEpisodes(state, episodes){
      state.allEpisodes = episodes
    },
    setEpisodeCharacter(state, epsChar){
      state.allCharacterEpisode = epsChar
    },
  },
  actions: {
    addCharacters({commit}, character) {
      commit('setCharacters', character)
    },
    addEpisodes({commit}, episodes) {
      commit('setEpisodes', episodes)
    },
    addEpisodeCharacter({commit}, epsChar) {
      commit('setEpisodeCharacter', epsChar)
    },

  }
})