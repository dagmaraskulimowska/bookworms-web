import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import UserProfile from "../views/UserProfile.vue";
import UserSettings from "../views/UserSettings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresGuest: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
    {
      path: "/settings",
      name: "settings",
      component: UserSettings,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresGuest) && loggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
