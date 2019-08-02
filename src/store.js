import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    ADD_USER_REQUEST(state, data) {
      state.user = data;
    }
  },
  actions: {
    saveUserID({ commit }, data) {
      commit("ADD_USER_REQUEST", data);
    }
  }
});
