import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCharacters: [],
    allEpisodes: []
  },
  getters: {
    getCharacters(state){
      return state.allCharacters
    },
    getEpisodes(state){
      return state.allEpisodes
    },
  },
  mutations: {
    setCharacters(state, character){
        state.allCharacters = character
    },
    setEpisodes(state, episodes){
      state.allEpisodes = episodes
  },
  },
  actions: {
    addCharacters({commit}, character) {
      commit('setCharacters', character)
    },
    addEpisodes({commit}, episodes) {
      commit('setEpisodes', episodes)
    },
  }
})