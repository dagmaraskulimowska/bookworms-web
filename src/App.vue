<template>
  <div>
    <component :is="navbarComponent" :transparent="isNavbarTransparent" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterView } from "vue-router";
import GuestNavbar from "./components/GuestNavbar.vue";
import UserNavbar from "./components/UserNavbar.vue";

const isLoggedIn = ref(false);
const isNavbarTransparent = ref(true);
const navbarComponent = ref(GuestNavbar);

function handleScroll() {
  isNavbarTransparent.value = window.scrollY === 0;
}

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem("token");

  window.addEventListener("scroll", handleScroll);
  document.title = "Bookworms";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(isLoggedIn, (newValue) => {
  navbarComponent.value = newValue ? UserNavbar : GuestNavbar;
});
</script>

<style scoped></style>
