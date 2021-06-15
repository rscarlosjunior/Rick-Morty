<template>
  <div>
    <Navbar :items="items" />
    <Banner/>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
export default {
  components: {
    Navbar,
    Banner
  },
  data () {
    return {
      items: [
        { title: 'Characters'},
        { title: 'Episodes'},
        { title: 'Community', link:'https://rickandmorty.fandom.com/wiki/Rick_and_Morty_Wiki:Community_Portal'},
        { title: 'API Documentation', link: 'https://rickandmortyapi.com/'}
        ]
    }
  },
}
</script>