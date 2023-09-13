// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../store/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView, // Import your Vue component
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
