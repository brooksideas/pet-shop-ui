import { getField, updateField } from "vuex-map-fields";
import { store } from "@/store/index.js";
import { fetchLatestUserOrders } from "@/apis/order.js";

const state = {
  userOrders: null,
};

const actions = {
  // latest orders
  async getLatestUserOrders({ commit }) {
    try {
      const { data } = await fetchLatestUserOrders();
     

      const ordersList = data.data;
      if (ordersList.length === 0 && !messageDisplayed) {
        // no orders by the user thus show the default layouts
        return;
      } 
      if (ordersList.length !== 0 && !messageDisplayed) {
        commit("updateField", {
          path: "userOrders",
          value: ordersList,
        });
        return;
      }
    } catch (error) {
      return error;
    }
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
