<template>
  <v-row justify="center" class="mt-0">
    <v-card class="py-0 my-0 cardRadius" max-width="542px" max-height="600px">
      <v-row justify="center">
        <v-spacer> </v-spacer>
        <div class="closeClass">
          <v-icon @click="closeForm" color="grey" size="1.5rem">
            mdi-close
          </v-icon>
        </div>
        <v-col class="loginClass" cols="12" sm="12" md="12" lg="12">
          <v-avatar size="92" color="primary">
            <div class="container">
              <div class="row">
                <div class="col loginIconClass">
                  <v-icon dark class="primary" size="2.936rem">
                    mdi-paw
                  </v-icon>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="loginIconNameClass white--text">
                    petson.
                  </label>
                </div>
              </div>
            </div>
          </v-avatar>
        </v-col>
        <label class="black--text LoginLabel">{{ "Log in" }} </label>
      </v-row>
      <v-card-text>
        <v-container>
          <v-form
            @submit.prevent="login"
            id="loginForm"
            ref="loginForm"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  id="emailId"
                  v-model="email"
                  class="textFieldClass"
                  placeholder="Email Address *"
                  outlined
                  required
                  type="email"
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  id="passwordId"
                  v-model="password"
                  class="textFieldClass"
                  placeholder="Password *"
                  outlined
                  type="password"
                  required
                  :error-messages="passwordErrors"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-checkbox
                  id="checkboxId"
                  type="checkbox"
                  class="ml-2 textFieldClass"
                  v-model="checkbox"
                >
                  <template v-slot:label>
                    <label class="black--text checkboxLabel"
                      >Remember Me
                    </label>
                  </template>
                </v-checkbox>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-btn
                  id="loginBtnId"
                  class="primary loginBtnClass"
                  type="submit"
                  :loading="loading"
                  @click="login"
                >
                  <label class="white--text loginLabelClass">LOG IN </label>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-row>
          <v-col cols="6" sm="6" md="6">
            <label
              @click="$router.push('/choice-page')"
              class="blue--text mb-n4 forgotLabel"
            >
              Forgot password?</label
            >
          </v-col>

          <v-col cols="6" sm="6" md="6">
            <label @click="openSignupModal" class="blue--text mb-n4 cursor ml-3"
              >Don’t have an account? Sign Up</label
            >
            <div v-if="showSignupModal">
              <modal-builder :injectForm="injectSignupForm"> </modal-builder>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "../styles/login.scss";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import ModalBuilder from "@/components/ModalBuilder.vue";

export default {
  name: "LoginForm",
  data: () => ({
    email: "",
    password: "",
  }),
  components: { ModalBuilder },
  computed: {
     ...mapFields("shared", ["currentForm"]),
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("email is required");
      !this.$v.email.email && errors.push("valid email is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("password is required");
      return errors;
    },
  },
  data: () => ({
    showSignupModal: false,
    injectSignupForm: 2,
    email: "",
    password: "",
    checkbox: true,
    loading: false,
    showPass: false,
  }),

  methods: {
    ...mapActions("auth", ["signInAdmin"]),
    ...mapActions("shared", ["storeFormNumber"]),

    // Injects the signup (number 2 indicates the second form) form and displays the dialog
    openSignupModal() {
      this.closeForm();
      this.showSignupModal =  true;
        //close form
      const form = {
        number: 2,
      };
      this.storeFormNumber({ form });
    },
    closeForm() {
      //close form
      const form = {
        number: -1,
      };
      this.storeFormNumber({ form });
    },
    async login() {
      this.loading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("Error on the Form. Please fill all the required fields.");
        this.loading = false;
        return;
      } else {
        try {
          const payload = {
            email: this.email,
            password: this.password,
          };
          await this.signInAdmin({ payload }).then(() => {
            //close form
            this.closeForm();
            this.loading = false;
          })
          .catch((error)=>{
            alert("Error occured during signin process!");
          });
        } catch (error) {
          console.error(error);
          alert("Error occured during signin process!");
          this.loading = false;
        }
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  }, 
};
</script>