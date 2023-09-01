import { createRouter, createWebHistory } from "vue-router";
import PluginComponent from "@plugin/components/PluginComponent.vue";

export const pluginRoutes = [
  {
    path: "/plugin",
    component: PluginComponent,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: pluginRoutes,
});

export default router;
