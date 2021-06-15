<template>
  <div>
    <!-- Horizontal Navbar -->
    <header class="header">
      <div class="container header__container">
        <h1 class="header__img">
          <a href="/">
            <img
              src="../assets/img/logo-rm.png"
              width="100"
              height="85"
              alt="Rick"
            />
          </a>
        </h1>
        <ul class="navbar">
          <li v-for="item in items" :key="item.title" class="navbar__item">
            <a
              class="navbar__link"
              @click="goTo(item.title)"
              :href="item.link"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
  methods: {
    goTo(selection) {
      this.$router.push({ name: selection });
    },
  },
};
</script>
