<template>
  <div class="container characters pt-4">
    <div v-for="char in getCharacters.results" :key="char.name" class="character__item">
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
</template>

<script>
import store from "@/store"
export default {
  computed: {
    getCharacters() {
      return store.getters?.getCharacters
    }
  },
  methods: {
    getInfo(character) {
      return window.open(`https://rickandmorty.fandom.com/wiki/${character}`, '_blank'); //redirect for a rick and morty wikipedia made by fans.
    }
  }
};
</script>