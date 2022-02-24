<!--  Feeds the Container with the appropriate type of Form to display -->

<template>
  <modal-container
    :openModal="openDialog"
    :width="dialogContainerWidth"
    :height="dialogContainerHeight"
  >
    <div v-if="injectLogin" slot="content">
      <login-form />
    </div>
    <div v-if="injectSignUp" slot="content">
      <signup-form />
    </div>
    <div v-if="injectSettings" slot="content">
      <user-setting-form />
    </div>
    <div v-if="injectCustomer" slot="content">
      <customer-form />
    </div>
  </modal-container>
</template>



<script>
import ModalContainer from "@/components/ModalContainer.vue";
import LoginForm from "@/forms/LoginForm.vue";
import SignupForm from "@/forms/SignupForm.vue";
import UserSettingForm from "@/forms/UserSettingForm.vue";
import CustomerForm from "@/forms/CustomerForm.vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ModalBuilder",
  components: {
    ModalContainer,
    LoginForm,
    SignupForm,
    UserSettingForm,
    CustomerForm,
  },
  computed: {
    ...mapFields("auth", ["openLoginDialog"]),
  },
  data: () => ({
    openDialog: false,
    injectLogin: false,
    injectSignUp: false,
    injectSettings: false,
    injectCustomer: false,
    dialogContainerWidth: "",
    dialogContainerHeight: "",
  }),
  methods: {
    // Decide the Type of form to inject

    buildForm(value) {
      switch (value) {
        case 1:
          this.injectLogin = true;
          this.injectSignUp = false;
          this.injectSettings = false;
          this.injectCustomer = false;
          this.openDialog = true;
          this.dialogContainerWidth = "33.875rem";
          this.dialogContainerHeight = "37.5rem";
          return;
        case 2:
          this.injectLogin = false;
          this.injectSignUp = true;
          this.injectSettings = false;
          this.injectCustomer = false;
          this.openDialog = true;
          this.dialogContainerWidth = "33.875rem";
          this.dialogContainerHeight = "47.875rem";
          return;
        case 3:
          this.injectLogin = false;
          this.injectSignUp = false;
          this.injectSettings = true;
          this.injectCustomer = false;
          this.openDialog = true;
          this.dialogContainerWidth = "68.313rem";
          this.dialogContainerHeight = "47.875rem";
          return;
        case 4:
          this.injectLogin = false;
          this.injectSignUp = false;
          this.injectSettings = false;
          this.injectCustomer = true;
          this.openDialog = true;
          this.dialogContainerWidth = "33.875rem";
          this.dialogContainerHeight = "49.875rem";
          return;
        default:
          return;
      }
    },
  },
  props: {
    injectForm: {
      type: Number,
      required: true,
    },
  },
  watch: {
    injectForm: {
      immediate: true,
      handler(value) {
        this.buildForm(value); // inject the form
      },
    },
  },
};
</script>