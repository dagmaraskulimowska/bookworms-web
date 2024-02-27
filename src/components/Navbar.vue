<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <img
          src="@/assets/bookwormsLogo.png"
          alt="Bookworms Logo"
          class="navbar-logo"
        />
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
  font-size: 17px;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  padding: 1rem;
}

.navbar-link:hover {
  text-decoration: none;
}
</style>
