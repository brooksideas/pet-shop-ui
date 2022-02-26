<template>
  <v-carousel
    v-model="model"
    height="200"
    hide-delimiters
    @change="nextProduct(model)"
  >
    <v-carousel-item v-for="i in 4" :key="i">
      <v-sheet color="white" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <product-card> </product-card>
          <product-card> </product-card>
          <product-card> </product-card>
          <product-card> </product-card>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "CarouselContainer",
  components: { ProductCard },

  data: () => ({
    model: 0,
  }),
  methods: {
    nextProduct(n) {
    },
  },
};
</script>