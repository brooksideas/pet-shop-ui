<template>
  <v-row justify="center" class="mt-0">
    <v-card
      class="py-0 my-0 cardRadius"
      max-width="33.875rem"
      max-height="47.875rem"
    >
      <v-row justify="center">
        <v-spacer> </v-spacer>
        <div class="closeClass">
          <v-icon @click="closeForm" color="grey" size="1.5rem"> mdi-close </v-icon>
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
        <label class="black--text LoginLabel">{{ "Sign up" }} </label>
      </v-row>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="signUpUser" ref="signupForm" lazy-validation>
            <v-row>
              <v-text-field
                id="firstNameId"
                type="text"
                v-model="firstName"
                class="pr-0 mr-0 textFieldFirstNameClass"
                placeholder="First Name *"
                outlined
                required
                :error-messages="firstNameErrors"
                @input="$v.firstName.$touch()"
                @blur="$v.firstName.$touch()"
              ></v-text-field>
              <v-text-field
                id="lastNameId"
                type="text"
                v-model="lastName"
                class="textFieldLastNameClass"
                placeholder="Last Name *"
                outlined
                required
                :error-messages="lastNameErrors"
                @input="$v.lastName.$touch()"
                @blur="$v.lastName.$touch()"
              ></v-text-field>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  id="signupEmailId"
                  type="email"
                  v-model="email"
                  class="textFieldClass"
                  placeholder="Email Address *"
                  outlined
                  required
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  id="signupPasswordId"
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

              <v-col class="py-0 my-0" cols="12" sm="12" md="12">
                <v-text-field
                  id="signupConfirmPasswordId"
                  v-model="confirmPassword"
                  class="textFieldConfirmClass"
                  placeholder="Confirm Password *"
                  outlined
                  type="password"
                  required
                  :error-messages="confirmPasswordErrors"
                  @input="$v.confirmPassword.$touch()"
                  @blur="$v.confirmPassword.$touch()"
                ></v-text-field>
              </v-col>

              <v-col class="px-0 py-0 mx-0 my-0" cols="12" sm="12" md="12">
                <v-checkbox
                  id="signupCheckboxId"
                  class="ml-2 my-0 checkboxClass"
                  v-model="checkbox"
                >
                  <template v-slot:label>
                    <label class="black--text pt-2 checkboxLabel"
                      >I want to receive inspiration, marketing promotions and
                      updates via email.
                    </label>
                  </template>
                </v-checkbox>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-btn
                  id="signupBtnId"
                  class="primary loginBtnClass"
                  type="submit"
                  :loading="loading"
                  @click="signUpUser"
                >
                  <label class="white--text loginLabelClass">Sign UP </label>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-row justify="center" class="px-0 py-0 mx-0 my-0">
          <label
            @click="backToLogin"
            class="blue--text backLoginClass cursor ml-3"
            >Already have an account? Log in</label
          >
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/signup.scss";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "signupForm",
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.required && errors.push("first name is required");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.required && errors.push("last name is required");
      return errors;
    },

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
      !this.$v.password.minLength &&
        errors.push("password length should be atleast 8 characters");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.required &&
        errors.push("confirm password required");
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("confirm password should match password entered");
      return errors;
    },
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
    loading: false,
    showPass: false,
    loading: false,
  }),
  methods: {
    ...mapActions("auth", ["signUp"]),
    ...mapActions("shared", ["storeFormNumber"]),
    closeForm() {
      //close form
      const form = {
        number: -1,
      };
      this.storeFormNumber({ form });
    },
    backToLogin() {
      this.closeForm();
      //close form
      const form = {
        number: 1,
      };
      this.storeFormNumber({ form });
    },

    async signUpUser() {
      this.loading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("Error on the Form. Please fill all the required fields.");
        this.loading = false;
        return;
      } else {
        try {
          const payload = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          };
          await this.signUp({ payload }).then(() => {
            //close form
            this.closeForm();
            this.loading = false;
          }).catch((error)=>{
            alert("Error occured during signup process!");
          })
        } catch (error) {
          alert("Error occured during signup process!");
          this.loading = false;
        }
      }
    },
  },
  validations: {
    firstName: { required },
    lastName: { required },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>