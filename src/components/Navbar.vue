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
      <router-link to="/login" class="navbar-link"
        >Zaloguj się/Stwórz konto</router-link
      >
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

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-navbar-custom);
  color: #fff;
  padding: 1rem;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar-transparent {
  background-color: rgba(0, 0, 0, 0.3);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: auto;
  max-height: 120px;
  margin-right: 0.5rem;
}

.navbar-right {
  text-align: right;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  font-size: 17px;
}

.navbar-text {
  margin-left: -1.5rem;
}

.navbar-link:hover {
  text-decoration: none;
}
</style>
