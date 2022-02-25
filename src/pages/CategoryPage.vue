<template>
  <v-app>
    <v-row class="mainContainer" justify="center">
      <v-col cols="12" sm="12" md="6" lg="12">
        <v-row justify="center">
          <v-col class="searchBarContainer" cols="12" sm="12" md="12" lg="12">
            <v-text-field
              placeholder="Search products"
               
              
              class="searchBarInput pl-12 ml-12"
              outlined
              color="primary"
              prepend-inner-icon="mdi-magnify"
              v-model="search"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="firstTitleContainer" cols="12" sm="12" md="12" lg="12">
            <label class="primary--text titleText"> Dry dog food </label>
            <v-row>
              <div class="breadContainer">
                <bread-crumb-container> </bread-crumb-container>
              </div>

              <div class="dropContainer">
                <v-row class="sortContainer">
                  <v-col
                    class="mx-0 my-0 px-0 py-0"
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                  >
                    <label class="sortLabel"> Sort by </label>
                  </v-col>
                  <v-col
                    class="selectContainer mx-0 my-0 px-0 py-0"
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                  >
                    <v-select
                      class=""
                      :items="items"
                      label="Standard"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-col>
        </v-row>

        <div class="priceWrap">
          <price-container> </price-container>
        </div>

        <v-row justify="start" class="priceContainer">
          <v-col
            v-for="n in 4"
            :key="n"
            class="productWrap"
            cols="2"
            sm="2"
            md="2"
            lg="2"
          >
            <div class="col-12 pa-0 ma-0">
              <product-card> </product-card>
            </div>
          </v-col>
        </v-row>

        <!-- pagination at the bottom -->
        <div class="text-center">
          <v-pagination v-model="page" :length="4" circle></v-pagination>
        </div>

        <!-- configure pagination -->
        <div class="container">
          <div class="row justify-content-center px-0 mx-0 py-0 my-0">
            <div class="col-2  itemLabelContainer">
              <label class="itemLabel"> Items per page: </label>
            </div>
            <div class="col-1 itemSelectContainer">
              <v-select class="" :items="items" label="15"></v-select>
            </div>
            <div class="col-2">
              <label class="itemLabel"> 1-15 of 1240 </label>
              </div>
          </div>
        </div>
        <!-- main container ends -->
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import "../styles/category.scss";
import ProductCard from "@/components/ProductCard.vue";
import BreadCrumbContainer from "@/components/BreadCrumbContainer.vue";
import PriceContainer from "@/components/PriceContainer.vue";

export default {
  name: "CategoryPage",
  components: { ProductCard, BreadCrumbContainer, PriceContainer },
  created() {},
  data: () => ({
    page: 1,
  }),
};
</script> 