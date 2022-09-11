import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import SpendingView from "../views/SpendingView.vue";
import BoxesView from "../views/BoxesView.vue";
import GoalsView from "../views/GoalsView.vue";

const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
