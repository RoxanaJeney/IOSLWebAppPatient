import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueStripeCheckout from 'vue-stripe-checkout';
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import router from "./router/index";
import { store } from './store/store'

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueStripeCheckout, 'pk_test_ePmSGqHydH0ida1IWZIAfSDF00tIqUqdtF');
Vue.use(VueResource);
Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app');
