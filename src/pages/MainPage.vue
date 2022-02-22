<template>
  <v-app>
    <v-row class="mainContainer" justify="center">
      <v-col cols="12" sm="12" md="6" lg="12">
        <v-row justify="center">
          <v-col class="searchBarContainer" cols="12" sm="12" md="12" lg="12">
            <v-text-field
              placeholder="Search products"
              @click:prepend-inner="filterSearch"
              @keyup.enter="filterSearch"
              class="searchBarInput pl-12 ml-12"
              outlined
              color="primary"
              prepend-inner-icon="mdi-magnify"
              v-model="search"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="topImageContainer">
          <img
            src="../assets/Sales_Image.svg"
            width="1200"
            height="250"
            alt="Sales Image"
            class="topImage"
          />
          <label class="white--text font-weight-thin bigImageText">
            Up to 30% sale
          </label>
          <label class="white--text pa-2 smallImageText"
            >On select dog food and toys
          </label>
        </v-row>

        <v-row>
          <v-col class="firstTitleContainer" cols="12" sm="12" md="12" lg="12">
            <label class="primary--text titleText"> Dry dog food </label>
            <div class="carouselContainer">
              <carousel-container> </carousel-container>
            </div>
          </v-col>
        </v-row>

        <v-row class="secondTitleContainer">
          <v-col class="" cols="5" sm="5" md="5" lg="5">
            <img
              src="../assets/Dog_Image.svg"
              width="608"
              height="250"
              alt="Dog Image"
              class="secondImageContainer"
            />
          </v-col>
          <v-col class="treatContainer" cols="4" sm="4" md="4" lg="4">
            <v-row justify="start" align="center">
              <label class="primary--text treatText ml-12">
                Treat your pup
              </label>
            </v-row>
            <v-row justify="start">
              <v-btn class="primary ml-12" width="350px" height="40px">
                <label
                  class="white--text discoverText text-decoration-underline"
                  >Discover our dog treat selection
                </label>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="firstTitleContainer" cols="12" sm="12" md="12" lg="12">
            <label class="primary--text titleText">
              Pet treats and chews
            </label>
            <div class="carouselContainer">
              <carousel-container> </carousel-container>
            </div>
          </v-col>
        </v-row>

        <v-row class="lastContainer mr-0">  
          <v-col class="treatContainer" cols="4" sm="4" md="4" lg="4">
            <v-row justify="start" align="center">
              <label class="primary--text tipsText">
               Get the best tips
              </label>
            </v-row>
            <v-row justify="start">
              <v-btn class="primary ml-12" width="151px" height="40px">
                <label
                  class="white--text text-decoration-underline"
                  >Read our blog
                </label>
              </v-btn>
            </v-row>
          </v-col>
          <v-col class="" cols="6" sm="6" md="6" lg="6">
            <img
              src="../assets/Dog_Cat_Image.svg"
              width="608"
              height="250"
              alt="Dog Image"
              class="lastImageContainer"
            />
          </v-col>
        </v-row>

        <!-- main container ends -->
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import "../styles/landing.scss";
import ProductCard from "@/components/ProductCard.vue";
import CarouselContainer from "@/components/CarouselContainer.vue";

export default {
  name: "MainPage",
  components: { ProductCard, CarouselContainer },
};
</script> 