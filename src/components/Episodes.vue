<template>
  <div v-if="!loading" class="container episodes pt-4">
    <table>
      <thead class="episodes">
        <th scope="col">Episode</th>
        <th scope="col">Name</th>
        <th scope="col">Air Date</th>
        <th scope="col">Characters</th>
      </thead>
      <tbody>
        <tr v-for="eps in episodes" :key="eps.id">
          <td scope="row" data-label="Episode">{{eps.id}}</td>
          <td data-label="Name">{{eps.name}}</td>
          <td data-label="Air Date">{{eps.airDate}}</td>
          <td data-label="Characters">{{eps.list}}<a class="table__info" @click="getCharactersInformation(eps.name)"> and more</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodes: [
        {
          id: 1,
          name: 'Pilot',
          airDate: "December 2, 2013",
          list: 'Rick, Morty, Beth, Jerry'
        },
        {
          id: 2,
          name: 'Lawnmower Dog',
          airDate: "December 2, 2013",
          list: 'Rick, Morty, Beth, Jerry'
        },
        {
          id: 3,
          name: 'Anatomy Park',
          airDate:"December 2, 2013",
          list: 'Rick, Morty, Beth, Jerry'
        },
      ],
    };
  },
  methods: {
    getCharactersInformation(episode){
      return location.href =`https://rickandmorty.fandom.com/wiki/${episode}`
    }
  }
};
</script>