import { getField, updateField } from "vuex-map-fields";
import { store } from "@/store/index.js";
import { fetchAllProducts } from "@/apis/product.js";

const state = {
  allProducts: [],
  currentSelectedProduct: null
};

const actions = {
  // hydrate all products
  async hydrateAllProducts() {
    await localforage.getItem("product", async (err, value) => {
      if (value) {
        /* Flush the allProducts from product Vuex state */
        state.allProducts = null;
        /* Hydarte allProducts  States before persisting */
        state.allProducts = value.allProducts;
      } else {
        return;
      }
    });
  },
  // fetch products
  async getAllProducts({ commit }, { payload }) {
    try {
      const data = await fetchAllProducts(payload.page, payload.limit);

      // hydrate the localstore before checking
      //await actions.hydrateAllProducts();
      // check if product is already stored in local Index DB
      var findPage = state.allProducts.find(
        (product) => product.page === data.current_page
      );

      // If not stored in local IndexDB then store the values
      if (!findPage) {
        const productsData = {
          page: data.current_page,
          data: data.data,
        };
        state.allProducts.splice(data.current_page - 1, 0, productsData);
        store.commit("persistProducts");
      }

      if (!data) {
        alert("Error occurred on during the product fetching process!");
      }
    } catch (error) {
      return error;
    }
  },

  // store product selected
  storeProductSelection({ commit }, { payload }) {
    commit("updateField", {
      path: "currentSelectedProduct",
      value: payload,
    });
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
