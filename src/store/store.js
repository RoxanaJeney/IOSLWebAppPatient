import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
//axios.defaults.baseURL = 'http://identitychain.snet.tu-berlin.de:8005/api';
axios.defaults.baseURL = 'http://localhost:8000/api';

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
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
      axios.post('/login', {
        username: credentials.username,
        password: credentials.password,
      })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          context.commit('retrieveToken', token)
        })
        .catch({
        })
    },
  },
  modules: {
  }
});