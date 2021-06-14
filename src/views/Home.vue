<template>
  <div>
    <Character />
  </div>
</template>

<script>
import {api} from '@/services/API'
import store from '@/store/index'
import Character from '@/components/Character'

export default {
  name: 'Home',
  metaInfo: {
  htmlAttrs: {
    lang: 'pt-BR'
  },
  title: 'Rick and More Wikipedia | Search your spacial information here.',
  meta: [{
      name: 'descrition',
      content: 'Episodes,characteres informations and more.'
    }],
  },
  components: {
    Character,
  },
  created(){
    this.setCharacters()
    this.setEpisodes()
  },
  methods: {
    setCharacters() {
      return api.getCharacters()
      .then(response => response.data)
      .then(data => {
        store.dispatch("addCharacters",data)
      })
    },
    setEpisodes() {
      return api.getEpisodes()
      .then(response => response.data)
      .then(data => {
        store.dispatch("addEpisodes",data)
      })
    }
  }
}
</script>
