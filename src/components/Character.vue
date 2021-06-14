<template>
  <section class="container pt-4">
  <p class="character__title"> Rick and Morty Character List </p>
  <div class="character__search-box">
    <input type="text" v-model="character_name" class="character__search" placeholder="The name is here">
    <button class="character__search-btn desktop'">
      <span @click="getCharByName(character_name)">Find your Character</span>
    </button>
  </div>
  <div class="characters">
    <div v-for="char in getCharacters.results" :key="char.id" class="character__item">
      <div class="character__box">
        <div class="character__img-box">
          <img class="character__img" :src="char.image" />
        </div>
        <div class="character__info">
          <h3 class="character__name">{{ char.name }}</h3>
          <div class="information-box">
            <div class="all-info">
              <span class="character__customer"> <span class="character__description">Status:</span> {{ char.status }}</span>
              <span class="character__customer"> <span class="character__description">Species:</span> {{ char.species }}</span>
              <span class="character__customer"> <span class="character__description">Origin:</span> {{ char.origin.name }}</span>
              <span class="character__customer"> <span class="character__description">Total Episodes:</span> {{ char.episode.length }}</span>
            </div>
            <button
              :class="['btn character__btn desktop',{'btn--green': char.name,},]"
            >
              <span @click="getInfo(char.name)"> More information</span>
            </button>
          </div>
        </div>
      </div>
      <button
        :class="['btn character__btn mobile',{'btn--green': char.name,},]"
      >
        <span @click="getInfo(char.name)"> More information</span>
      </button>
    </div>
  </div>
  <div class="character__buttons">
    <span @click="prevPage()" class="previous round" :class="{'disabled': disable }">&#8249;</span>
    <span @click="nextPage()" class="next round">&#8250;</span>
  </div>
  </section>
</template>

<script>
import store from "@/store"
import { getPaginationCharacters, setCharacters, setEpisodes, getCharactersByName } from '@/assets/js/utils/apiCaller'

export default {
  data(){
    return {
      page: 1,
      character_name: ''
    }
  },
  computed: {
    getCharacters() {
      return store.getters?.getCharacters
    },
    disable() {
      return this.page <= 1
    }
  },
  created() {
    setCharacters()
    setEpisodes()
  },
  methods: {
    getInfo(character) {
      return window.open(`https://rickandmorty.fandom.com/wiki/${character}`, '_blank'); //redirect for a rick and morty wikipedia made by fans.
    },
    getCharByName(name) {
      getCharactersByName(name)
    },
    nextPage(){
      this.page = this.page + 1
      getPaginationCharacters(this.page)
    },
    prevPage(){
      this.page = this.page > 1 ? this.page - 1 : this.page
      getPaginationCharacters(this.page)
    }
  }
};
</script>