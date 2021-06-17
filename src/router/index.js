import Vue from "vue";
import VueRouter from "vue-router";
import Template from "@/views/layouts/Template";
import Home from "@/views/Home";
import Char from "@/components/Character";
import Eps from "@/components/Episodes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Template,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/characters",
        name: "Characters",
        component: Char,
      },
      {
        path: "/episodes",
        name: "Episodes",
        component: Eps,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
