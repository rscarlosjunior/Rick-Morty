<template>
  <div class="step__buttons ">
    <span
      @click="prevPage()"
      class="previous round"
      :class="{ disabled: disable }"
      >&#8249;</span
    >
    <span @click="nextPage()" class="next round">&#8250;</span>
  </div>
</template>
<script>
export default {
  name: "StepButton",
  props: {
    disable: { type: Boolean },
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("prevPage");
    },
  },
};
</script>
