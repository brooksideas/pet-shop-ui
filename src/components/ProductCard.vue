<template>
  <v-card class="productContainer">
    
    <v-img 
      :src="image | displayImage"
      alt="Product"
      height="200px"
    ></v-img>
    <v-card-title class="productTitle text-decoration-underline">
      {{ title | shortenTitle }}
    </v-card-title>

    <v-card-subtitle class="">
      <label class="productSubTitle"> {{ description }} </label>
      <label class="black--text productAmountLabel"> {{ price }} </label>
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
import { urls } from "@/constants/urls";

export default {
  name: "ProductCard",
 
  data: () => ({
    show: false,
  }),
  filters: {
    displayImage(image) {
      return urls.FILES + image;
    },
    shortenTitle(title) {
      if (title !== "") {
        var shortVersion = title.split(" ");
        return shortVersion[0] + " "+ shortVersion[1]+ " " + shortVersion[2] + "...";
      }
      return "";
    },
  },
  props: {
    image: {
      type: String,
      required: false,
      default: "4dc2780f-4559-3d29-aacc-136208511c0f",
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
  }, 
};
</script>