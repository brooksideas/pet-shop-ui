<template>
  <div id="topBar">
    <v-app>
      <v-app-bar class="topBarContainer" app color="primary" dark elevation="0">
        <v-icon v-if="!isAdmin" class="logoIcon">mdi-paw</v-icon>
        <label v-if="!isAdmin" class="ml-2 white--text logoName">
          petson.
        </label>

        <v-btn class="productsBtn" text color="primary" elevation="0">
          <label class="white--text productsBtnLabel"> Products</label>
          <v-icon right color="white" class="productsBtnIcon">
            mdi-chevron-down
          </v-icon>
        </v-btn>
        <v-btn class="promotionsBtn" text color="primary" elevation="0">
          <label class="white--text promotionsBtnLabel"> Promotions</label>
        </v-btn>
        <v-btn class="blogBtn" text color="primary" elevation="0">
          <label class="white--text blogBtnLabel"> Blog</label>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn class="cartBtn" outlined color="white" elevation="0">
          <v-icon left class="cartBtnIcon"> mdi-cart </v-icon>
          <label class="white--text cartBtnLabel">
            Cart ({{ cartItems }})</label
          >
        </v-btn>

        <!-- Login -->
        <v-btn
          v-if="loginBtn === 1"
          class="loginBtn cursor"
          outlined
          color="white"
          elevation="0"
          @click="openLoginModal"
        >
          <label class="white--text loginBtnLabel">
            {{ loginBtn | displayLoginLabel }}</label
          >
          <div v-if="showLoginModal">
            <modal-builder :injectForm="injectLoginForm"> </modal-builder>
          </div>
        </v-btn>

        <!-- Logout -->

        <v-btn
          v-if="loginBtn === 0"
          class="loginBtn cursor"
          outlined
          color="white"
          elevation="0"
          @click="logout"
        >
          <label class="white--text loginBtnLabel">
            {{ loginBtn | displayLoginLabel }}</label
          >
        </v-btn>

        <v-avatar
          @click="openSettingModal"
          class="avatarBtn cursor"
          color="secondary"
          size="48"
        >
          <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" /> -->
          <v-img
            v-if="avatar !== null"
            :src="displayAvatar"
            alt="Profile"
            height="48px"
          ></v-img>
          <span
            v-if="avatar === null"
            class="white--text font-weight-bold avatarPlaceholderLabel"
          >
            {{ nameInitialsFilter(firstName, lastName) }}
          </span>
          <div v-if="showSettingModal">
            <modal-builder :injectForm="injectSettingForm"> </modal-builder>
          </div>
        </v-avatar>
      </v-app-bar>
    </v-app>
  </div>
</template>
<script>
import ModalBuilder from "@/components/ModalBuilder.vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import localforage from "localforage";
import { urls } from "@/constants/urls";
import getInitials from "@/mixins/names.mixin.js";

export default {
  name: "TopBar",
  components: { ModalBuilder },
  computed: {
    ...mapFields("auth", ["bearerToken", "isAdmin" , "currentUser"]),
    ...mapFields("shared", ["currentForm"]),
    displayAvatar() {
      return urls.FILES + this.avatar;
    },
  },
  created() {
    this.toggleLoginLabel();
  },
  data: () => ({
    cartItems: 0,
    showLoginModal: false,
    showSettingModal: false,
    injectLoginForm: 1,
    injectSettingForm: 3,
    loginBtn: 1,
    avatar: null,
    firstName: "Buck",
    lastName: "Hill",
  }),
  filters: {
    displayLoginLabel(button) {
      return button === 0 ? "Logout" : "Login";
    },
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),

    // Injects the login form and displays the dialog
    openLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    // Injects the User Settings form and displays the dialog
    openSettingModal() {
      this.showSettingModal = !this.showSettingModal;
    },

    // toggle login label
    async toggleLoginLabel() {
      await localforage.getItem("auth", async (err, value) => {
        if (value && value.bearerToken != null) {
          this.loginBtn = 0; // 0 means already logged in so show logout
        } else {
          if (this.bearerToken != null) {
            this.loginBtn = 0;
          } else {
            this.loginBtn = 1; // 1 means not logged In so show login button
          }
        }
      });
    },

    // display avatar for user
    async populateUserAvatarView(value) {
      this.avatar = value.avatar;
      this.firstName = value.first_name;
      this.lastName = value.last_name;
    },
    // logout
    logout() {
      this.logoutUser();
    },
  },
  mixins: [getInitials],

  watch: {
    currentForm: {
      immediate: true,
      handler(value) {
        // close the dialog
        if (value == -1) {
          this.showLoginModal = false;
          this.showSettingModal = false;
        }
      },
    },
    bearerToken: {
      immediate: true,
      handler(value) {
        // check if token is found
        if (value) {
          this.toggleLoginLabel();
        }
      },
    },

    currentUser: {
      immediate: true,
      handler(value) {
        if (value) {
          this.populateUserAvatarView(value);
        }
      },
    },
  },
};
</script>
