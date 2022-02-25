<template>
  <div id="topBar">
    <v-app>
      <v-app-bar class="topBarContainer" app color="primary" dark elevation="0">
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

        <v-btn
          class="loginBtn"
          outlined
          color="white"
          elevation="0"
          @click="openLoginModal"
        >
          <label class="white--text loginBtnLabel"> login</label>
          <div v-if="showLoginModal">
            <modal-builder :injectForm="injectLoginForm"> </modal-builder>
          </div>
        </v-btn>

        <v-avatar @click="openSettingModal" class="avatarBtn cursor" color="secondary" size="48">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
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

export default {
  name: "TopBar",
  components: { ModalBuilder },
  computed:{
    ...mapFields("shared", ["currentForm"]),
  },
  data: () => ({
    cartItems: 0,
    showLoginModal: false,
    showSettingModal: false,
    injectLoginForm: 1,
    injectSettingForm: 3
  }),
  methods: {
    // Injects the login form and displays the dialog
    openLoginModal() {
      this.showLoginModal = !this.showLoginModal;

    },
     // Injects the User Settings form and displays the dialog
    openSettingModal() {
      this.showSettingModal = !this.showSettingModal;
    },
  },
  watch:{
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
  }
};
</script>
