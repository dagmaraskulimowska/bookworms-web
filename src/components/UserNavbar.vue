<template>
  <nav :class="{ navbar: true, 'navbar-transparent': transparent }">
    <div class="navbar-left">
      <router-link to="/">
        <img
          src="@/assets/bookwormsLogo.png"
          alt="Bookworms Logo"
          class="navbar-logo"
        />
      </router-link>
      <router-link to="/" class="navbar-link">
        <span class="navbar-text">Bookworms</span>
      </router-link>
    </div>
    <div class="navbar-right">
      <router-link to="/profile" class="navbar-link">
        <span>Witaj, {{ loggedInUserName }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    transparent: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
@import "@/assets/navbar-styles.css";
</style>
