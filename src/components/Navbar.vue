<template>
  <div>
    <!-- Horizontal Navbar -->
    <header class="header">
      <div class="container header__container">
        <h1 class="header__img">
          <a href="#">
            <img src="../assets/img/morty.png" width="100" height="85" alt="Rick">
          </a>
        </h1>
        <ul class="navbar">
          <li v-for="item in items" :key="item.title" class="navbar__item">
            <a class="navbar__link" :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
        <div class="header__logo">
          <img src="../assets/img/logo-rm.png" width="200" height="70" alt="Rick and Morty Logo">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true }
  },
}
</script>