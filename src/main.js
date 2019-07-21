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
import VueQrcode from '@chenfengyuan/vue-qrcode';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueStripeCheckout, 'pk_test_ePmSGqHydH0ida1IWZIAfSDF00tIqUqdtF');
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.config.productionTip = false;
//Vue.http.options.root = 'http://identitychain.snet.tu-berlin.de:8005/api';
Vue.http.options.root = 'http://localhost:8000/api';
Vue.component(VueQrcode.name, VueQrcode);


new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app');
