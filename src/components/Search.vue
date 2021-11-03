<template>
  <section>
    <p class="search__title">{{ title }}</p>
    <p class="search__subtitle" @click="goTo()">{{ subtitle }}</p>
    <div class="search__box">
      <input
        type="text"
        v-model="params"
        class="search__input"
        @keyup.enter="getSearch(params)"
        :placeholder="placeholder"
      />
      <button class="search__input-btn desktop'">
        <span @click="getSearch(params)">{{ finder }}</span>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "Search",
  props: {
    title: String,
    finder: String,
    subtitle: String,
    placeholder: String,
    character: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      params: "",
    };
  },
  methods: {
    getSearch(params) {
      this.$emit("iniciatedSearch", params);
    },
    goTo() {
      return this.character
        ? this.$router.push("/episodes")
        : this.$router.push("/characters");
    },
  },
};
</script>
