<template>
  <v-card class="ml-12" max-width="14.875rem" elevation="0">
    <v-row justify="start">
      <v-col cols="6" sm="6" md="6" lg="6">
        <label class="priceLabel"> PRICE </label>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6">
        <v-icon @click="show = !show" class="priceIcon cursor">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-col>
    </v-row>

    <v-row v-if="show" class="priceSlider">
      <v-slider
        v-model="ex3.val"
        :label="ex3.label"
        :thumb-color="ex3.color"
        thumb-label="always"
      ></v-slider>
    </v-row>

    <v-expand-transition v-show="show" class="pt-12 mt-12">
      <div v-show="show">
        <v-row justify="end">
          <v-btn outlined>
            <label class="grey--text priceBtnLabel"> 5000kn</label>
          </v-btn>
        </v-row>
      </div>
    </v-expand-transition>

    <v-row class="brandContainer" justify="start">
      <v-col cols="6" sm="6" md="6" lg="6">
        <label class="priceLabel"> BRAND </label>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6">
        <v-icon @click="show = !show" class="brandIcon cursor">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-col>
      <div class="pt-2" v-for="n in 6" :key="n">
        <v-row class="brandList">
          <v-col class="pb-8" cols="10" sm="10" md="10" lg="10">
            <label class="text-wrap"> Alleva Equilibrium </label>
          </v-col>
          <v-col class="" cols="2" sm="2" md="2" lg="2">
            <label> (7) </label>
          </v-col>
        </v-row>
      </div>
    </v-row>

    <v-row class="brandContainer" justify="start">
      <v-col cols="8" sm="8" md="8" lg="8">
        <label class="priceLabel"> CATEGORY </label>
      </v-col>

      <v-col cols="4" sm="4" md="4" lg="4">
        <v-icon @click="show = !show" class="categoryIcon cursor">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-col>
      <div class="pt-2" v-for="n in 6" :key="n">
        <v-row class="categoryList">
          <v-col class="pb-8" cols="9" sm="9" md="9" lg="9">
            <label class="text-wrap"> Pet treats and chews </label>
          </v-col>
          <v-col class="pl-7" cols="3" sm="3" md="3" lg="3">
            <label> (32) </label>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import "@/styles/category.scss";
export default {
  name: "PriceContainer",
  data: () => ({
    show: true,
    ex3: { label: "thumb-color", val: 50, color: "red" },
  }),
  methods: {
    togglePrice() {
      alert("Show", this.show);
      this.show = !this.show;
    },
  },
};
</script>