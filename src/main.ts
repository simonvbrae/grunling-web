import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueScrollactive from "vue-scrollactive";
import vuetify from "@/plugins/vuetify";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "leaflet/dist/leaflet.css";

import "./assets/css/main.css";

Vue.config.productionTip = true;

// Optionally install the BootstrapVue icon components plugin
Vue.use(VueScrollactive).use(vuetify).use(BootstrapVue).use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
