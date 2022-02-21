import Vue from "vue";
import Vuex from "vuex";
import * as modules from "./modules";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules, // all modules in store
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
 
