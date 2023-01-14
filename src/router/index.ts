import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import SpendingView from "../views/SpendingView.vue";
import BoxesView from "../views/BoxesView.vue";
import GoalsView from "../views/GoalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/spending",
      name: "spending",
      component: SpendingView,
    },
    {
      path: "/boxes",
      name: "boxes",
      component: BoxesView,
    },
    {
      path: "/goals",
      name: "goals",
      component: GoalsView,
    },
  ]
})

export default router;
