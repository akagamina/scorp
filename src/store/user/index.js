export const state = () => ({
  user: {},
  isUserLoggedIn: false
});

export const getters = {
  getUser: state => state.user,
  getIsUserLoggedIn: state => state.isUserLoggedIn
};

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  deleteUser(state) {
    state.user = {};
  }
};
