<template>
  <section class="container pt-4">
    <search @iniciatedSearch="getCharByName" title="Rick and Morty Character List" placeholder="The name is here" finder="Find your Character"/>
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
    <step-buttons @nextPage="nextPage" @prevPage="prevPage" :disable="disable"/>
  </section>
</template>

<script>
import store from "@/store"
import Search from './Search'
import StepButtons from './stepButtons'
import { getPaginationCharacters, setCharacters, getCharactersByName } from '@/assets/js/utils/apiCaller'

export default {
  components: { Search, StepButtons },
  name: "Characters",
  data() {
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