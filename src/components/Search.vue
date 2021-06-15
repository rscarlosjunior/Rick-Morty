<template>
  <section>
    <p class="search__title">{{ title }}</p>
    <div class="search__box">
      <input
        type="text"
        v-model="params"
        class="search__input"
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
    title: { type: String },
    finder: { type: String },
    placeholder: { type: String },
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
  },
};
</script>
