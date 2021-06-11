<template>
  <div>
    <Navbar :items="items" />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      items: [
        { title: 'Characters', link: '#' },
        { title: 'Episodes', link: '#' }
      ]
    }
  },
}
</script>