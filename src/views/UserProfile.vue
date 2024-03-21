<template>
  <div>
    <div class="profile">
      <div class="profile-info">
        <div
          class="profile-image"
          :style="{
            backgroundImage: user.image ? 'url(' + user.image + ')' : '#ccc',
            backgroundColor: user.image ? 'transparent' : '#ccc',
          }"
        >
          <div v-if="!user.image" class="placeholder"></div>
        </div>
        <div class="profile-description">
          <h2 class="user-name">{{ user.name }}</h2>
          <div class="description-container">
            <p>{{ user.description }}</p>
          </div>
        </div>
      </div>
      <div class="categories">
        <a href="/bookslist">Przeczytane</a>
        <a href="/bookslist">Aktualnie czytane</a>
        <a href="/bookslist">Chcę przeczytać</a>
      </div>
    </div>
    <div class="background-image-container"></div>
    <div class="background-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Nixanea",
        description:
          "Bookworms to super miejsce. Mam nadzieję, że będę się tutaj świetnie bawić :)",
        image: "",
      },
    };
  },
};
</script>

<style scoped>
.background-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-image: url("@/assets/photos/bookwormsuserprofile.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.background-container {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: #f8eed8;
  z-index: -1;
}

.background-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #fcf7ec00 30%, #f8eed8 100%);
  z-index: 1;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vw;
  padding: 6vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  border-radius: 2vw;
  box-shadow: 10px 10px 20px #00000066;
  background-color: var(--color-background-custom);
}

.profile-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 10px;
}

.profile-image {
  margin-right: 4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  min-width: 10rem;
  background-color: #ccc;
}

.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.profile-description {
  max-width: 40rem;
}

.user-name {
  font-size: 2rem;
  margin-top: 0;
}

.profile-description p {
  margin-bottom: 0;
}

.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vw;
}

.categories a {
  text-decoration: none;
  color: #333;
  padding: 0.8vw 3vw;
  border: 1px solid #ccc;
  border-radius: 1vw;
  margin-right: 1vw;
  cursor: pointer;
}

.categories a:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .profile {
    padding: 4vw;
    max-width: 80vw;
    margin-top: 30vw;
  }

  .profile-info {
    flex-direction: column;
    align-items: center;
  }

  .user-name {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 1vw;
    margin-bottom: 2vw;
  }

  .profile-image {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 7rem;
    height: 7rem;
    min-width: 7rem;
    background-size: cover;
  }

  .profile-description {
    max-width: 100%;
    text-align: center;
  }

  .categories {
    flex-direction: column;
    align-items: center;
    margin-top: 3vw;
  }

  .categories a {
    margin-bottom: 2vw;
    padding: 2vw 3vw;
    border-radius: 3vw;
    height: 10vw;
    width: 40vw;
    text-align: center;
  }
}
</style>
