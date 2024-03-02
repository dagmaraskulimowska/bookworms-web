<template>
  <main>
    <div class="section image-section">
      <div class="image-container">
        <img src="@/assets/booksforhomepage.jpg" alt="booksforhomepage" />
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
      <form class="contact-form">
        <h1>Masz pytania? Skontaktuj się z nami</h1>
        <div class="form-field">
          <label for="name">Imię:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-field">
          <label for="message">Wiadomość:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            maxlength="300"
            required
          ></textarea>
        </div>
        <input type="submit" class="send-button" value="Wyślij" />
      </form>
    </div>
  </main>
</template>

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
