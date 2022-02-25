import Vue from "vue";
import Vuex from "vuex";
import localforage from "localforage";
import * as modules from "./modules";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules, // all modules in store
  state: {},
  getters: {},
  mutations: {
    // Configure Localforge on App Loading . Added localstorage as a fallback option
    setLocalforageConfig: () => {
      localforage.config({
        driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
        name: "Pet-Shop-UI",
      });
      localforage.setDriver([localforage.INDEXEDDB, localforage.LOCALSTORAGE]);
    },
  },
  actions: {},
});
 
