import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isUserLoggedIn: false
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
      state.isUserLoggedIn = true;
    },
    deleteUser(state) {
      state.user = {};
      state.isUserLoggedIn = false;
    }
  },
  actions: {},
  modules: {}
});
