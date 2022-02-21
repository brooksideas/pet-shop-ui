<template>
  <v-row justify="center" class="mt-0">
    <v-card class="py-0 my-0 cardRadius" max-width="542px" max-height="600px">
      <v-row justify="center">
        <v-spacer> </v-spacer>
         <div  class="closeClass" >
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
        <label class="black--text LoginLabel">{{ "Log in" }} </label>
      </v-row>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="login" ref="loginForm" lazy-validation>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
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
                <v-checkbox class="ml-2 textFieldClass" v-model="checkbox">
                  <template v-slot:label>
                    <label class="black--text checkboxLabel"
                      >Remember Me
                    </label>
                  </template>
                </v-checkbox>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-btn
                  class="primary loginBtnClass"
                  type="submit"
                  :loading="loading"
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
            <label
              @click="$router.push('/forgot-password')"
              class="blue--text mb-n4 cursor ml-3"
              >Don’t have an account? Sign Up</label
            >
          </v-col>
        </v-row> 
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/login.scss";

export default {
  name: "LoginForm",
  data: () => ({
    email: "",
    password: "",
    loading: false,
    showPass: false,
    iconColor: "orange",
    browserTip: "browser-tip",
  }),
};
</script>