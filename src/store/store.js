import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
  },
  mutations: {
    retrieveToken(state, token){
      state.token = token
    }
  },
  actions: {
    retrieveToken(context, credentials){
      axios.post('http://localhost:8080/', {
        username: credentials.username,
        password: credentials.password,
      })
        .then(response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          context.commit('retrieveToken', token)
        })
        .catch({
        })
    },
  },
  modules: {
  }
});