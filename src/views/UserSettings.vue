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
    <div class="background-image"></div>
    <div v-if="selectedTab">
      <div class="settings-container">
        <div v-if="selectedTab === 'Zmień opis'">
          <form @submit.prevent="changeDescription">
            <div class="form-group">
              <label for="description">Wprowadź opis:</label>
              <textarea
                id="description"
                v-model="description"
                maxlength="100"
                required
              ></textarea>
            </div>
            <button type="submit" class="send-button">Zastosuj</button>
          </form>
        </div>

        <div v-if="selectedTab === 'Zmień zdjęcie'">
          <form @submit.prevent="uploadPhoto">
            <div class="form-group">
              <label for="photo">Wybierz zdjęcie profilowe:</label>
              <input
                type="file"
                id="photo"
                @change="handlePhotoUpload"
                required
              />
            </div>
            <button type="submit" class="send-button">Zastosuj</button>
          </form>
        </div>

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
      tabs: [
        "Zmień opis",
        "Zmień zdjęcie",
        "Zmień nazwę",
        "Zmień email",
        "Zmień hasło",
        "Usuń konto",
      ],
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

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url("@/assets/photos/usersettings.jpg") center;
  background-size: cover;
}

.background-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 1;
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

input[type="file"] {
  padding: 6px;
  margin-top: 2vw;
}

textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--vt-c-white);
  background: transparent;
  width: 100%;
  color: var(--vt-c-white);
  height: 100px;
  max-height: 100px;
  max-width: 500px;
  min-width: 300px;
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
  width: 150px;
}

.send-button:hover,
.tab:hover {
  background-color: var(--color-button-send);
  cursor: pointer;
  border: 1px solid var(--color-button-send);
  color: white;
}

.categories {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8vw;
  margin-left: 5vw;
  width: 20vw;
}

.tab {
  text-decoration: none;
  color: #333;
  padding: 0.7vw 2vw;
  border: 1px solid #ccc;
  border-radius: 1vw;
  margin-bottom: 2vw;
  max-width: 200px;
  min-width: 200px;
  text-align: center;
  background-color: var(--color-background-custom);
  box-shadow: 5px 5px 10px #00000066;
}

.settings-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6vw;
  max-width: 40rem;
  border-radius: 2vw;
  box-shadow: 10px 10px 20px #00000066;
  background-color: var(--color-background-custom2);
  width: 500vw;
}

@media only screen and (max-width: 1280px) {
  .categories {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    margin-top: 30px;
    margin-left: 0;
    width: 100%;
    padding-bottom: 10px;
  }

  .tab {
    margin-right: 10px;
    margin-bottom: 0;
    min-width: 150px;
    margin-left: 40px;
    border-radius: 10px;
    padding: 10px 2vw;
  }

  .settings-container {
    width: 90%;
    border-radius: 20px;
  }
}
</style>
