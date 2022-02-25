import { getField, updateField } from "vuex-map-fields";
import { store } from "@/store/index.js";
import { signIn } from "@/apis/auth.js";

const state = {
  currentForm: -1, 
};

const actions = {
  // store the current form number
  storeFormNumber({ commit }, { form }) {
     commit("updateField", {
      path: "currentForm",
      value: form.number,
    });
   
  }
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
