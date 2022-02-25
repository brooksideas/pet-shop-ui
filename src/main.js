import Vue from 'vue'
import App from './App.vue'
import { router } from "@/router/router.js";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import ModalBuilder from "@/components/ModalBuilder.vue";
import "./styles/main.scss";

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.component("ModalBuilder", ModalBuilder); // Globally registered custom component
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
