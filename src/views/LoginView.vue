<template>
  <div class="container">
    <div class="content">
      <div class="image-container">
        <img src="@/assets/loginwithbooks.jpg" alt="Obrazek" />
      </div>
      <div class="form-container" v-if="!registerMode">
        <h2>Zaloguj się</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Hasło:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="form-group forgot-password">
            <a href="#">Zapomniałeś hasła?</a>
          </div>
          <button type="submit" class="send-button">Zaloguj</button>
          <div class="form-group register-link">
            <p>
              Nie masz konta?
              <a href="#" @click="toggleRegisterMode">Zarejestruj się</a>
            </p>
          </div>
        </form>
      </div>
      <div class="form-container" v-if="registerMode">
        <h2>Zarejestruj się</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Nazwa użytkownika:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="newEmail">Email:</label>
            <input type="email" id="newEmail" v-model="newEmail" required />
          </div>
          <div class="form-group">
            <label for="newPassword">Hasło:</label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Powtórz hasło:</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
            />
          </div>
          <button type="submit" class="send-button">Zarejestruj</button>
          <div class="form-group register-link">
            <p>
              Masz już konto?
              <a href="#" @click="toggleRegisterMode">Zaloguj się</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      newPassword: "",
      confirmPassword: "",
      registerMode: false,
    };
  },
  methods: {
    login() {},
    register() {},
    toggleRegisterMode() {
      this.registerMode = !this.registerMode;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 50%;
}

.image-container,
.form-container {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
}

.image-container img {
  height: 100%;
  object-fit: cover;
}

.form-container {
  padding: 60px;
  background-color: var(--color-background-custom2);
  max-width: 50%;
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

label {
  display: block;
  margin-bottom: 5px;
  color: var(--vt-c-white);
}

input[type="email"],
input[type="password"],
input[type="text"] {
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
  margin-top: 20px;
}

.send-button:hover {
  background-color: var(--color-button-send);
}

.forgot-password {
  text-align: right;
}

.forgot-password a {
  color: var(--vt-c-white);
  text-decoration: none;
}

.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link a {
  color: var(--vt-c-white);
  text-decoration: none;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    display: none;
  }
}
</style>
