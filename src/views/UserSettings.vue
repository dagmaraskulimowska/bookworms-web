<template>
  <div class="container">
    <div class="categories">
      <div
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
    <div v-if="selectedTab">
      <div class="settings-container">
        <div v-if="selectedTab === 'Zmień nazwę'">
          <form @submit.prevent="changeName">
            <div class="form-group">
              <label for="currentName">Obecna nazwa użytkownika:</label>
              <input
                type="text"
                id="currentName"
                v-model="currentName"
                required
              />
            </div>
            <div class="form-group">
              <label for="newName">Nowa nazwa użytkownika:</label>
              <input type="text" id="newName" v-model="newName" required />
            </div>
            <button type="submit" class="send-button">Zastosuj</button>
          </form>
        </div>

        <div v-if="selectedTab === 'Zmień email'">
          <form @submit.prevent="changeEmail">
            <div class="form-group">
              <label for="email">Obecny adres email:</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="newEmail">Nowy adres email:</label>
              <input type="email" id="newEmail" v-model="newEmail" required />
            </div>
            <div class="form-group">
              <label for="confirmEmail">Potwierdź adres email:</label>
              <input
                type="email"
                id="confirmEmail"
                v-model="confirmEmail"
                required
              />
            </div>
            <button type="submit" class="send-button">Zastosuj</button>
          </form>
        </div>

        <div v-else-if="selectedTab === 'Zmień hasło'">
          <form @submit.prevent="changePassword">
            <div class="form-group">
              <label for="password">Obecne hasło:</label>
              <input
                type="password"
                id="oldPassword"
                v-model="oldPassword"
                required
              />
            </div>
            <div class="form-group">
              <label for="newPassword">Nowe hasło: </label>
              <input
                type="password"
                id="newPassword"
                v-model="newEmail"
                required
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Potwierdź hasło:</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                required
              />
            </div>
            <button type="submit" class="send-button">Zastosuj</button>
          </form>
        </div>
        <div v-else-if="selectedTab === 'Usuń konto'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["Zmień nazwę", "Zmień email", "Zmień hasło", "Usuń konto"],
      selectedTab: null,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.form-container h2 {
  margin: 0 auto;
  margin-bottom: 60px;
  color: var(--vt-c-white);
}

.form-group {
  margin-bottom: 15px;
  color: var(--vt-c-white);
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 6px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--vt-c-white);
  background: transparent;
  color: var(--vt-c-white);
}

.send-button {
  background-color: var(--color-navbar-custom);
  border: none;
  color: var(--vt-c-white);
  padding: 10px;
  display: block;
  width: 50%;
  margin: auto;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 30px;
}

.send-button:hover {
  background-color: var(--color-button-send);
}

.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8vw;
}

.tab {
  text-decoration: none;
  color: #333;
  padding: 0.7vw 2vw;
  border: 1px solid #ccc;
  border-radius: 1vw;
  margin-right: 1vw;
}

.tab:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vw;
  padding: 6vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  border-radius: 2vw;
  box-shadow: 10px 10px 20px #00000066;
  background-color: var(--color-background-custom2);
}
</style>
