<template>
  <div>
    <Navbar :transparent="isNavbarTransparent" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const isNavbarTransparent = ref(true);

function handleScroll() {
  isNavbarTransparent.value = window.scrollY === 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
</style>
