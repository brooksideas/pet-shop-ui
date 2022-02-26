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

     // persist Auth Stored Data
     persistAuth: (state) => {
      localforage
        .setItem("auth", state.auth)
        .catch((error) => console.error(error));
    },
    // persist Product Stored Data 
    persistProducts: (state) => {
      localforage
        .setItem("product", state.product)
        .catch((error) => console.error(error));
    },
     // Logout removes persistance from all data in IndexDb  
     unpersistAll: () => {
      localforage.iterate(function(value, key) {
        // Resulting key/value pair -- this callback
        // will be executed for every item in the
        // database.
        localforage
          .removeItem(`${key}`)
          .then(() =>
            localforage
              .clear()
              .then(() => location.replace('/')) // replace to home page
              .catch((error) => {
                console.error(error);
              })
          )
          .catch((error) => console.error(error));
      });
    },
  },
  actions: {},
});
 
