import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('idtoken') || '',
  },
  getters: {
    getUser: state => state.user,
    isLoggedIn: state => !!state.token,
  },
  mutations: {
    userLoginSuccess(state, token, user) {
      state.token = token;
      state.user = user;
    },
    userLogout(state) {
      state.token = '';
      state.user = null;
      localStorage.removeItem("idtoken");
      delete axios.defaults.headers.common['Authorization'];
    },
    setUser(state, userdata) {
      state.user = userdata;
    }
  },
  actions: {
    async login({
      commit
    }, userdata) {
      try {
        const res = await axios.post(
          "integration/customer/token",
          userdata
        );
        localStorage.setItem("idtoken", res.data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data}`;
        const user = await axios.get("customers/me");
        commit("userLoginSuccess", res.data, user.data);
      } catch (error) {
        commit("userLogout");
        alert("Error: " + error);
      }
    },

    logout({
      commit
    }) {
      commit("userLogout");
    },

    async fetchUser({
      commit
    }) {
      try {
        const user = await axios.get("customers/me");
        commit("setUser", user.data);
        return user.data;
      } catch (error) {
        commit("userLogout");
        alert("Error: " + error);
      }
    }

  },
  modules: {}
})