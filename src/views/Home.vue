<template>
  <div>
    <Character />
  </div>
</template>

<script>
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
  }
}
</script>
