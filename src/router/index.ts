import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutViewPage1.vue"),
  },
  {
    path: "/about2",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutViewPage2.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/invest",
    name: "invest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InvestView.vue"),
  },
  {
    path: "/offer",
    name: "offer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OfferView.vue"),
  },
  {
    path: "*",
    name: "catchAll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
