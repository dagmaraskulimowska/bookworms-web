<template>
  <div class="profile">
    <div class="profile-info">
      <div
        class="profile-image"
        :style="{
          backgroundImage: user.image ? 'url(' + user.image + ')' : 'none',
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
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Nixanea",
        description:
          "Bookworms to super miejsce. Mam nadzieję, że będę się tutaj świetnie bawić :)",
      },
    };
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  padding: 8rem;
  margin-left: 25rem;
  margin-right: 25rem;
  border-radius: 30px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
}

.profile-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.profile-image {
  margin-right: 40px;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

.profile-image img {
  width: 10rem;
  height: 10rem;
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
  margin-top: 100px;
}

.categories a {
  text-decoration: none;
  color: #333;
  padding: 1rem 4rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 40px;
}

.categories a:last-child {
  margin-right: 0;
}

.categories a:hover {
  background-color: #f0f0f0;
}
</style>
