<template>
  <section class="container episodes pt-1">
    <search
      @iniciatedSearch="getSingleEpisode"
      title="RICK AND MORTY EPISODE LIST"
      subtitle="or click here to see all Characters"
      placeholder="Type the number of Eps"
      finder="Find your episode"
    />
    <div class="episode">
      <table>
        <thead>
          <th scope="col">Episode</th>
          <th scope="col">Name</th>
          <th scope="col">Air Date</th>
          <th scope="col">Characters</th>
        </thead>
        <tbody v-if="countResult">
          <tr v-for="items in getResult" data-test="episode" :key="items.id">
            <td scope="row" data-test="id" data-label="Episode">
              {{ items.id }}
            </td>
            <td data-label="Name">{{ items.name }}</td>
            <td data-label="Air Date">{{ items.air_date }}</td>
            <td data-label="Characters">
              <a
                class="table__info"
                @click="getCharactersInEpisode(items.characters)"
                >See all</a
              >
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td scope="row" data-test="id" data-label="Episode">
              {{ getResult.id }}
            </td>
            <td data-label="Name">{{ getResult.name }}</td>
            <td data-label="Air Date">{{ getResult.air_date }}</td>
            <td data-label="Characters">
              <a
                class="table__info"
                @click="getCharactersInEpisode(getResult.characters)"
                >See all</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <step-buttons
      @nextPage="nextPage"
      @prevPage="prevPage"
      :disable="disable"
    />
  </section>
</template>

<script>
import Search from "./Search";
import StepButtons from "./stepButtons";
import {
  setEpisodes,
  getPaginationEpisodes,
} from "@/assets/js/utils/apiCaller";

export default {
  components: { Search, StepButtons },
  name: "Episodes",
  data() {
    return {
      page: 1,
      chars: [],
    };
  },
  created() {
    setEpisodes();
  },
  computed: {
    getEpisodes() {
      return this.$store.getters?.getEpisodes.results;
    },
    getResult() {
      return this.getEpisodes
        ? this.getEpisodes
        : this.$store.getters?.getEpisodes;
    },
    countResult() {
      return this.getResult.length > 1 || this.getEpisodes;
    },
    disable() {
      return this.page <= 1;
    },
  },
  methods: {
    getCharactersInEpisode(arr) {
      arr.forEach((element) => {
        const id = element.split("/").pop();
        this.chars.push(id);
      });
      this.$store.dispatch("addEpisodeCharacter", this.chars);
      this.$router.push({ name: "Characters" });
    },

    getSingleEpisode(number) {
      setEpisodes(number);
    },
    nextPage() {
      this.page = this.page + 1;
      getPaginationEpisodes(this.page);
    },
    prevPage() {
      this.page = this.page > 1 ? this.page - 1 : this.page;
      getPaginationEpisodes(this.page);
    },
  },
};
</script>
