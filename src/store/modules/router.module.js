import { getField, updateField } from "vuex-map-fields";
import { store } from "../index";
const state = {
  currentRouteName: "", 
  loggedIn: false,
  navigationType: "",
};

const actions = {
  storeRoute({ commit }, { routeName }) {
      
    commit("updateField", {
      path: "currentRouteName",
      value: routeName.name,
    }); 

  },
  storeNavigation({ commit }, { navigation }) {
    commit("updateField", {
      path: "navigationType",
      value: navigation.type,
    });
    store.commit("persistRouter");
  },
  // Status of the User if logged in or not 
  storeUserLogginStatus({ commit }, { log }) {
    commit("updateField", {
      path: "loggedIn",
      value: log.logged,
    });
    store.commit("persistRouter");
  },
};

const mutations = {
  updateField,
};

const getters = {
  getField,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
