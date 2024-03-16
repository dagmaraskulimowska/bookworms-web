<template>
  <main>
    <div class="section image-section">
      <div class="image-container">
        <img
          src="@/assets/photos/booksforhomepage.jpg"
          alt="booksforhomepage"
        />
      </div>
    </div>
    <div class="section description-section">
      <div class="content left-content">
        <div class="logo-container">
          <img src="@/assets/bookwormsLogo.png" alt="logo" />
        </div>
        <h1>Bookworms</h1>
      </div>
      <div class="content right-content">
        <p>
          Jeżeli szukasz miejsca, w którym możesz porządkować swoją biblioteczkę
          to Bookworms jest dla Ciebie!
        </p>
        <p>
          Możesz dodawać książki jako: przeczytane, do przeczytania oraz
          aktualnie czytane. Wszystko w jednym miejscu.
        </p>
        <p>Nie masz jeszcze konta? Zachęcamy do rejestracji!</p>
        <p class="team-name">Zespół Bookworms</p>
      </div>
    </div>
    <div class="section form-section">
      <form class="contact-form" @submit.prevent="sendContactForm">
        <h1>Masz pytania? Skontaktuj się z nami</h1>
        <div class="form-field">
          <label for="contactName">Imię:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            v-model="contactName"
            required
          />
        </div>
        <div class="form-field">
          <label for="contactEmail">Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            v-model="contactEmail"
            required
          />
        </div>
        <div class="form-field">
          <label for="contactMessage">Wiadomość:</label><br />
          <textarea
            id="contactMessage"
            name="contactMessage"
            rows="4"
            cols="50"
            maxlength="300"
            v-model="contactMessage"
            required
          ></textarea>
        </div>
        <input type="submit" class="send-button" value="Wyślij" />
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    };
  },
  methods: {
    sendContactForm() {
      fetch("https://bookworms.fly.dev/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.contactName,
          email: this.contactEmail,
          message: this.contactMessage,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response is wrong");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  flex: 1;
  justify-content: center;
  max-height: 50%;
}

.image-section {
  margin-top: -80px;
}

.image-container img {
  max-width: 100%;
}

.content {
  padding: 10px;
  max-width: 90%;
  margin: auto;
}

.description-section {
  font-size: 20px;
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-right: 40px;
  justify-content: center;
  margin-bottom: 20px;
}

.left-content {
  text-align: right;
  display: flex;
  align-items: center;
}

.logo-container img {
  max-width: 20vw;
}

.right-content {
  text-align: left;
  flex-shrink: 0;
}

.team-name {
  text-align: right;
}

.form-section {
  background-color: var(--color-background-custom2);
  padding: 80px;
}

.form-section h1 {
  margin-bottom: 40px;
  color: var(--vt-c-white);
}

.form-field {
  margin-bottom: 20px;
  color: var(--vt-c-white);
}

.form-field input,
.form-field textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--vt-c-white);
  background: transparent;
  width: 100%;
  color: var(--vt-c-white);
}

.send-button {
  background-color: var(--color-navbar-custom);
  border: none;
  color: var(--vt-c-white);
  padding: 10px;
  display: block;
  width: 30%;
  margin: auto;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
}

.send-button:hover {
  background-color: var(--color-button-send);
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5em;
    text-align: center;
  }

  .description-section {
    font-size: 1em;
    margin-right: 0;
  }

  .send-button {
    width: 60%;
  }
}
</style>
