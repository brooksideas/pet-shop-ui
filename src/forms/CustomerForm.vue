<template>
  <v-row justify="center" class="mt-0">
    <v-card
      class="py-0 my-0 cardRadius"
      width="33.875rem"
      height="47.875rem"
    >
      <v-row justify="center">
        <v-spacer> </v-spacer>
        <div class="closeClass">
          <v-icon color="grey" size="1.5rem"> mdi-close </v-icon>
        </div>
        <v-col class="topContainer" cols="12" sm="12" md="12" lg="12">
          <label class="black--text LoginLabel">{{ topLabel }} </label>
        </v-col>
        <v-col class="loginClass" cols="12" sm="12" md="6" lg="12">
          <v-avatar class="px-0 py-0 mx-0 my-0" size="92" color="primary">
            <v-icon v-if="true" class="lightGrey" size="92">
              mdi-account</v-icon
            >
            <img v-if="false" src="" alt="Profile Picture" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-card-text>
        <v-container>
          <v-form @submit.prevent="login" ref="signupForm" lazy-validation>
            <v-row>
              <v-text-field
                v-model="firstName"
                class="pr-0 mr-0 textFieldFirstNameClass"
                placeholder="First Name *"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                class="textFieldLastNameClass"
                placeholder="Last Name *"
                outlined
                required
              ></v-text-field>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="email"
                  class="textFieldClass"
                  placeholder="Email Address *"
                  outlined
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="email"
                  class="textFieldClass"
                  placeholder="Phone Number *"
                  outlined
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="email"
                  class="textFieldClass"
                  placeholder="Location *"
                  outlined
                  required
                  append-icon="mdi-map-marker"
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
                   :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                ></v-text-field>
              </v-col>

              <v-col class="py-0 my-0" cols="12" sm="12" md="12">
                <v-text-field
                  v-model="password"
                  class="textFieldConfirmClass"
                  placeholder="Confirm Password *"
                  outlined
                  type="password"
                  required
                   :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                ></v-text-field>
              </v-col>

              <v-col class="mt-3" cols="12" sm="12" md="12">
                <v-btn
                  class="primary loginBtnClass ml-12"
                  type="submit"
                  :loading="loading"
                >
                  <label class="white--text loginLabelClass"> {{topLabel}} </label>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/signup.scss";

export default {
  name: "CustomerForm",
  data: () => ({
    topLabel: "Add new customer",
    email: "",
    password: "",
    showPassword:false,
    loading: false,
    showPass: false,
    iconColor: "orange",
    browserTip: "browser-tip",
  }),
};
</script>

<style scoped>
.topContainer {
  padding-left: 3rem !important;
  padding-top: 1rem;
  margin-top: -1.5rem !important;
} 
</style>