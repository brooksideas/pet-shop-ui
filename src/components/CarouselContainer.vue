<template>
  <v-carousel
    v-model="model"
    height="300"
    hide-delimiters
    @change="nextProduct(model)"
  >
    <v-carousel-item v-for="i in 4" :key="i">
      <v-sheet color="white" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <product-card
            :image="defaultImage"
            :title="defaultTitle"
            :description="defaultDescription"
            :price="defaultPrice"
          >
          </product-card>
          <product-card
            :image="defaultImage"
            :title="defaultTitle"
            :description="defaultDescription"
            :price="defaultPrice"
          >
          </product-card>
          <product-card
            :image="defaultImage"
            :title="defaultTitle"
            :description="defaultDescription"
            :price="defaultPrice"
          >
          </product-card>
          <product-card
            :image="defaultImage"
            :title="defaultTitle"
            :description="defaultDescription"
            :price="defaultPrice"
          >
          </product-card>
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
    defaultImage: "4dc2780f-4559-3d29-aacc-136208511c0f",
    defaultTitle: "Brit care endurance",
    defaultDescription: "Animonda",
    defaultPrice: 200,
  }),
  methods: {
    nextProduct(n) {},
  },
};
</script>