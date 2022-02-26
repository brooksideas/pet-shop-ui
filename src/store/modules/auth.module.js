import { getField, updateField } from "vuex-map-fields";
import { store } from "@/store/index.js";
import localforage from "localforage";
import { signIn, logInUser, signUpUser, viewUserAccount } from "@/apis/auth.js";

const state = {
  bearerToken: null,
  currentUser: null,
  isAdmin: false,
};

const actions = {
  // hydrate Auth
  async hydrateAuthBearerToken() {
    await localforage.getItem("auth", async (err, value) => {
      if (value) {
        /* Flush the bearerToken from auth Vuex state */
        state.bearerToken = null;
        state.isAdmin = null;
        /* Hydarte bearerToken auth States before persisting */
        state.bearerToken = value.bearerToken;
        state.isAdmin = value.isAdmin;
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

      commit("updateField", {
        path: "currentUser",
        value: null,
      });

      if (data.token != undefined) {
        commit("updateField", {
          path: "isAdmin",
          value: true, // set is admin to true since we successfully logged in with the Admin API end point
        });
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
    try {
      const { data } = await logInUser(payload.email, payload.password);
      commit("updateField", {
        path: "bearerToken",
        value: data.token,
      });

      // Do not store anything on the current user field yet
      commit("updateField", {
        path: "currentUser",
        value: null,
      });

      if (data.token != undefined) {
        commit("updateField", {
          path: "isAdmin",
          value: false, // set is admin to false since we successfully logged in with the User API end point 
        });
        store.commit("persistAuth");
      } else {
        alert("Error occurred on during the signin process!");
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
      if (data.token != undefined) {
        store.commit("persistAuth");
      } else {
        alert("Error occurred on during the signup process!");
      }
    } catch (error) {
      alert("Error occurred on during the signup process!");
      return error;
    }
  },

  // view a User Account
  async getUserAccount({ commit }) {
    try {
      const { data } = await viewUserAccount();
      commit("updateField", {
        path: "currentUser",
        value: data,
      });

      // rehydrate the bearer token so that we will not lose it on committing to the Index Database
      await actions
        .hydrateAuthBearerToken()
        .then(() => store.commit("persistAuth"));
    } catch (error) {
      alert("Could Not display user Account! Showing Defaults!");
      return error;
    }
  },

  async logoutUser() {
    store.commit("unpersistAll");
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
