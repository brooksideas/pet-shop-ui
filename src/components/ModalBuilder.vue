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
  </modal-container>
</template>



<script>
import ModalContainer from "@/components/ModalContainer.vue";
import LoginForm from "@/forms/LoginForm.vue";
import SignupForm from "@/forms/SignupForm.vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ModalBuilder",
  components: {
    ModalContainer,
    LoginForm,
    SignupForm
  },
  computed: {
    ...mapFields("auth", ["openLoginDialog"]),
  },
  data: () => ({
    openDialog: false,
    injectLogin: false,
    injectSignUp: false,
    injectSettings: false,
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
          this.openDialog = true;
          this.dialogContainerWidth = "542px";
          this.dialogContainerHeight = "600px";
          return;
        case 2:
          this.injectLogin = false;
          this.injectSignUp = true;
          this.injectSettings = false;
          this.openDialog = true;
          this.dialogContainerWidth = "33.875rem";
          this.dialogContainerHeight = "47.875rem";
          return;
        case 3:
          this.injectLogin = false;
          this.injectSignUp = false;
          this.injectSettings = true;
          this.openDialog = true;
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
      default: false,
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