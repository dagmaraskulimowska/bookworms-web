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
      <router-link v-if="loggedInUserName" to="/" class="navbar-link">
        <span>Witaj, {{ loggedInUserName }}</span>
      </router-link>
      <button v-if="loggedInUserName" @click="logout" class="navbar-link">
        Wyloguj
      </button>
      <router-link v-else to="/login" class="navbar-link"
        >Zaloguj się</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "UserNavbar",
  props: {
    transparent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    loggedInUserName() {
      return localStorage.getItem("loggedInUserName");
    },
  },
  methods: {
    logout() {
      fetch("https://bookworms.fly.dev/api/logout", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            localStorage.removeItem("loggedInUserName");
            localStorage.removeItem("token");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style>
@import "@/assets/navbar-styles.css";
</style>
