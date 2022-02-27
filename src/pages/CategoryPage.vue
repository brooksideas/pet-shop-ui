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
                <bread-crumb-container :items="homeLink">
                </bread-crumb-container>
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
                    <v-select class="" :items="[]" label="Standard"></v-select>
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
            v-for="product in productList"
            :key="product.uuid"
            class="productWrap"
            cols="2"
            sm="2"
            md="2"
            lg="2"
          >
            <div
              @click="routeToProductPage(product)"
              class="red col-12 pa-0 ma-0 cursor"
            >
              <product-card
                :image="product.image"
                :title="product.title"
                :description="product.description"
                :price="product.price"
              >
              </product-card>
            </div>
          </v-col>
        </v-row>

        <!-- pagination at the bottom , on next click pagination fires next event to fetch that page -->
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="4"
            circle
            @input="fetchAllProductsAvailable"
          ></v-pagination>
        </div>

        <!-- configure pagination -->
        <div class="container">
          <div class="row justify-content-center px-0 mx-0 py-0 my-0">
            <div class="col-2 itemLabelContainer">
              <label class="itemLabel"> Items per page: </label>
            </div>
            <div class="col-1 itemSelectContainer">
              <v-select class="" :items="pageItems" label="15"></v-select>
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
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import localforage from "localforage";
import ProductCard from "@/components/ProductCard.vue";
import BreadCrumbContainer from "@/components/BreadCrumbContainer.vue";
import PriceContainer from "@/components/PriceContainer.vue";

export default {
  name: "CategoryPage",
  components: { ProductCard, BreadCrumbContainer, PriceContainer },
  created() {
    this.fetchAllProductsAvailable();
  },

  data: () => ({
    search: "",
    uuid: "",
    title: "",
    description: "",
    price: "",
    page: 1,
    pageItems: ["15"],
    homeLink: [
      {
        text: "Homepage",
        disabled: true,
        href: "/",
      },
      {
        text: "Dogs",
        disabled: true,
        href: "/",
      },
      {
        text: "Dog food",
        disabled: true,
        href: "/",
      },
      {
        text: "dry dog food",
        disabled: false,
        href: "/",
      },
    ],
    productList: [],
  }),
  methods: {
    ...mapActions("product", ["getAllProducts", "storeProductSelection"]),
    routeToProductPage(product) {
      // store the values
      const payload = {
        uuid: product.uuid,
        image: product.image,
        title: product.title,
        description: product.description,
        price: product.price,
      };
      this.storeProductSelection({payload});
      this.$router.push({ name: "product-page" });
    },
    async fetchAllProductsAvailable() {
      // fetch if not found
      try {
        // check the localstore before fetching
        await localforage.getItem("product").then(async (value) => {
          if (value && value.allProducts != null) {
            this.productList = [];
            this.populateProducts(value.allProducts);
          } else {
            // fetch if not found
            const payload = {
              page: this.page,
              limit: 15, // always set to 15 according to the figma
            };

            await this.getAllProducts({ payload });
          }
        });
      } catch (error) {
        alert("Error occurred on during the product fetching process!");
      }
    },

    populateProducts(value) {
      if (value && value.length != 0) {
        value.forEach((product) => {
          product.data.forEach((p) => {
            // check if the product is already on the list , push if it is not
            var found = this.productList.find(
              (element) => element.uuid === p.uuid
            );
            if (!found) {
              this.productList.push({
                uuid: p.uuid,
                image: p.metadata.image,
                title: p.title,
                description: p.brand.title,
                price: p.price,
              });
            }
          });
        });
      }
    },
  },

  watch: {
    allProducts: {
      immediate: true,
      handler(value) {
        this.populateProducts(value);
      },
    },
  },
};
</script> 