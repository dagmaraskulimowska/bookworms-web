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
      <div class="navbar-link" @click="toggleDropdown">
        <span>Moje konto</span>
        <ul v-if="dropdownOpen" class="dropdown-menu">
          <li>
            <router-link to="/profile" class="dropdown-link"
              >Mój profil</router-link
            >
          </li>
          <li>
            <router-link to="/settings" class="dropdown-link"
              >Ustawienia</router-link
            >
          </li>
          <li>
            <router-link to="/stats" class="dropdown-link"
              >Moje statystyki</router-link
            >
          </li>
          <li>
            <button @click="logout" class="logout-button">Wyloguj się</button>
          </li>
        </ul>
      </div>
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
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
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
            window.location.reload();
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

.dropdown-menu {
  position: absolute;
  background-color: var(--color-background-custom);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 0;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 5px;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  text-align: center;
}

.dropdown-menu li:hover {
  background-color: rgba(240, 240, 240, 0.2);
}

.dropdown-link {
  color: #000000;
  text-decoration: none;
}

.logout-button {
  background-color: var(--color-navbar-custom);
  border: none;
  border-radius: 15px;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  color: var(--white);
}
.send-button:hover {
  background-color: var(--color-button-send);
}

@media (max-width: 768px) {
  .logout-button {
    font-size: 12px;
    padding: 0.4rem 1rem;
  }
}
</style>
