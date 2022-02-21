<template>
  <div id="topBar">
    <v-app>
      <v-app-bar app color="primary" dark elevation="0">
        <v-row align="center" justify="center">
          <v-col cols="4" sm="4" md="4" lg="4">
            <v-btn text color="primary" elevation="0">
              <label class="white--text"> Products</label>
              <v-icon right> mdi-chevron-down </v-icon>
            </v-btn>
          </v-col>

          <v-col cols="4" sm="4" md="4" lg="4">
            <v-btn text color="primary" elevation="0">
              <label class="white--text"> Promotions</label>
            </v-btn>
          </v-col>

          <v-col cols="4" sm="4" md="4" lg="4">
            <v-btn text color="primary" elevation="0">
              <label class="white--text"> Blog</label>
            </v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-icon right> mdi-cart </v-icon>
        <v-btn outlined color="white" elevation="0">
          <label class="white--text"> Cart ({{ cartItems }})</label>
        </v-btn>

        <v-btn outlined color="white" elevation="0">
          <label class="white--text"> logout</label>
        </v-btn>

        <v-avatar color="secondary" size="48"></v-avatar>
      </v-app-bar>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "TopBar",
  data: () => ({
    cartItems: 0,
  }),
};
</script>
