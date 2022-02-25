import { getField, updateField } from "vuex-map-fields";
import { store } from "@/store/index.js";
import localforage from "localforage";
import { signIn, logInUser, signUpUser, viewUserAccount } from "@/apis/auth.js";

const state = {
  bearerToken: null,
  currentUser: null,
};

const actions = {
  // hydrate Auth
  async hydrateAuthBearerToken() {
    await localforage.getItem("auth", async (err, value) => {
      if (value) {
        /* Flush the bearerToken from auth Vuex state */
        state.bearerToken = null;

        /* Hydarte bearerToken auth States before persisting */
        state.bearerToken = value.bearerToken;
      }
    });
  },
  // signin Admins
  async signInAdmin({ commit }, { payload }) {
    var email = payload.email;
    var password = payload.password;
    try {
      const { data } = await signIn(payload.email, payload.password);
      commit("updateField", {
        path: "bearerToken",
        value: data.token,
      });
      if (data.token != undefined) {
        store.commit("persistAuth");
      }
    } catch (error) {
      // on admin error it might be a normal user
      const payload = {
        email: email,
        password: password,
      };
      await actions.signInUser({ commit }, { payload });
    }
  },

  // Signin normal users
  async signInUser({ commit }, { payload }) {
    console.log("pay", payload);
    try {
      const { data } = await logInUser(payload.email, payload.password);
      commit("updateField", {
        path: "bearerToken",
        value: data.token,
      });
      if (data.token != undefined) {
        store.commit("persistAuth");
      }
    } catch (error) {
      return error;
    }
  },

  // Signup normal users
  async signUp({ commit }, { payload }) {
    try {
      const data = await signUpUser(
        payload.firstName,
        payload.lastName,
        payload.email,
        payload.password,
        payload.confirmPassword
      );
      commit("updateField", {
        path: "currentUser",
        value: data,
      });
      commit("updateField", {
        path: "bearerToken",
        value: data.token,
      });
      console.log(data.token);
      if (data.token != undefined) {
        store.commit("persistAuth");
      }
    } catch (error) {
      alert("Error occurred on during the signup process!");
      return error;
    }
  },

  // view a User Account
  async getUserAccount({ commit }, { _ }) {
    try {
      const data = await viewUserAccount();
      commit("updateField", {
        path: "currentUser",
        value: data,
      });

      console.log('ber->', state.currentUser);
      // rehydrate the bearer token so that we will not lose it on committing to the Index Database
      await actions
        .hydrateAuthBearerToken()
        .then(() => store.commit("persistAuth"));
    } catch (error) {
      alert("Could Not display user Account! Showing Defaults!");
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
