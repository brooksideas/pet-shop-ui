<template>
  <v-card class="productContainer">
    <img src="../assets/Product_Image.svg" alt="Product" height="200px" />

    <v-card-title class="productTitle text-decoration-underline">
      Top western road trips
    </v-card-title>

    <v-card-subtitle class="">
      <label class="productSubTitle"> Animonda </label>
      <label class="black--text productAmountLabel"> 200kn </label>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary">
        <v-icon left class="cartIcon"> mdi-cart </v-icon>
        <label class="white--text productAddLabel"> add to cart </label>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import "../styles/product.scss";

export default {
  name: "ProductCard",
  data: () => ({
    show: false,
  }),
};
</script>