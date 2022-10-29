import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import path from "./path";
import Main from "@/views/MainView.vue";
import Home from "@/views/HomeView.vue";

const defaultPath = path.main.path;

const routes: Array<RouteRecordRaw> = [
  {
    path: path.root.path,
    name: path.root.name,
    redirect: defaultPath,
    meta: {},
  },
  {
    path: path.main.path,
    name: path.main.name,
    component: Main,
    meta: {},
  },
  {
    path: path.home.path,
    name: path.home.name,
    component: Home,
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to: any, from, next) => {
  // 정의되지 않은 경로
  if (!routes.map((el) => el.name).includes(to.name)) {
    next({ name: path.main.name });
  }

  next();
});

export default router;
