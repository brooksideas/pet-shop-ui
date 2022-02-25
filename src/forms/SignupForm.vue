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
          <v-icon color="grey" size="1.5rem"> mdi-close </v-icon>
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
          <v-form @submit.prevent="login" ref="signupForm" lazy-validation>
            <v-row>
              <v-text-field
                id="firstNameId"
                type="text"
                v-model="firstName"
                class="pr-0 mr-0 textFieldFirstNameClass"
                placeholder="First Name *"
                outlined
                required
              ></v-text-field>
              <v-text-field
               id="lastNameId"
                type="text"
                v-model="lastName"
                class="textFieldLastNameClass"
                placeholder="Last Name *"
                outlined
                required
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
                ></v-text-field>
              </v-col>

              <v-col  class="py-0 my-0" cols="12" sm="12" md="12">
                <v-text-field
                 id="signupConfirmPasswordId"
                  v-model="password"
                  class="textFieldConfirmClass"
                  placeholder="Confirm Password *"
                  outlined
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col class="px-0 py-0 mx-0 my-0" cols="12" sm="12" md="12">
                <v-checkbox id="signupCheckboxId" class="ml-2 my-0 checkboxClass" v-model="checkbox">
                  <template v-slot:label>
                    <label class="black--text checkboxLabel"
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
                >
                  <label class="white--text loginLabelClass">Sign UP </label>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-row justify="center" class="px-0 py-0 mx-0 my-0">
          <label @click="$router.go(-1)" class="blue--text backLoginClass cursor ml-3"
            >Already have an account? Log in</label
          >
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/signup.scss";

export default {
  name: "signupForm",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
    loading: false,
    showPass: false,
    iconColor: "orange",
    browserTip: "browser-tip",
  }),
};
</script>