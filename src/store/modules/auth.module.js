import { getField, updateField } from "vuex-map-fields";

const state = {
  bearerToken: null, 
};

const actions = {
  
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
