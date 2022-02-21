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

        <v-avatar class="avatarBtn" color="secondary" size="48"></v-avatar>
      </v-app-bar>
    </v-app>
  </div>
</template>
<script> 
import ModalBuilder from "@/components/ModalBuilder.vue";

export default {
  name: "TopBar",
  components:{ModalBuilder},
  data: () => ({
    cartItems: 0,
    showLoginModal: false,
    injectLoginForm: 1,
  }),
  methods: { 

    // Injects the login form and displays the dialog
    openLoginModal() {
      this.showLoginModal = true;
    },
  },
};
</script>
