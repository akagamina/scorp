import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

import i18n from "./i18n";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/common.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
