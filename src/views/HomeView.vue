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
          aktulnie czytane. Wszystko w jednym miejscu.
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
  max-height: 50vh;
}

.image-section {
  margin-top: -80px;
}

.image-container img {
  max-width: 100%;
}

.content {
  padding: 100px;
}

.description-section {
  font-size: 1.3em;
}

.left-content {
  text-align: right;
  display: flex;
  align-items: center;
}

.logo-container img {
  max-width: 300px;
}

.right-content {
  text-align: left;
}

.team-name {
  text-align: right;
}

.form-section {
  background-color: #dda57a;
  padding: 100px;
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
  border-bottom: 1px solid var(--vt-c-white);
  background: transparent;
  width: 100%;
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
  background-color: #36020d;
}
</style>
