<template>
  <v-app>
    <v-row class="mainContainer" justify="center">
      <v-col cols="12" sm="12" md="12" lg="12">
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
        <v-row>
          <v-col class="firstTitleContainer" cols="12" sm="12" md="8" lg="12">
            <v-row>
              <div class="breadContainer">
                <bread-crumb-container> </bread-crumb-container>
              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-card class="productDetailContainer" elevation="0">
          <v-row>
            <v-col cols="4" sm="4" md="4" lg="4">
              <img
                src="../assets/Product_Image.svg"
                alt="Product"
                width="405.34"
                height="637.07px"
              />
            </v-col>

            <v-col class="productRight" cols="8" sm="8" md="8" lg="8">
              <v-card-title class="productDetailTitle"> Brit Care </v-card-title>

              <v-card-subtitle class="">
                <label class="productDetailSubTitle"> {{ productText }} </label>
                <label class="black--text productDetailAmountLabel"> 200kn </label>
              </v-card-subtitle>

              <v-card-actions>
                <v-row class="">
                  <v-col cols="6" sm="6" md="6" lg="6">
                    <v-btn color="primary" class="cartBtnWrapper">
                      <v-icon left class="cartIcon"> mdi-cart </v-icon>
                      <label class="white--text productDetailAddLabel">
                        add to cart
                      </label>
                    </v-btn>
                  </v-col>

                  <v-col
                    class="addContainer pt-6"
                    cols="6"
                    sm="6"
                    md="12"
                    lg="6"
                  >
                    <v-row>
                      <v-btn class="ml-2 btnWrap" outlined dark color="primary">
                        <v-icon dark> mdi-minus </v-icon>
                      </v-btn>
                      <div class="ml-2 numberDiv">
                        <label class="grey--text pb-1"> 0 </label>
                      </div>
                      <v-btn class="ml-2 btnWrap" outlined dark color="primary">
                        <v-icon dark> mdi-plus </v-icon>
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <label class="black--text topTitleLabel"> {{ topTitle }} </label>
        <label class="descriptionTitleLabel">
          {{ firstTitle }}
        </label>
        <label class="descriptionValueLabel">
          {{ firstDescription }}
        </label>

        <label class="descriptionTitleLabel">
          {{ secondTitle }}
        </label>
        <label class="descriptionValueLabel">
          {{ secondDescription }}
        </label>

        <label class="descriptionTitleLabel">
          {{ thirdTitle }}
        </label>
        <label class="descriptionValueLabel">
          {{ thirdDescription }}
        </label>

        <label class="descriptionTitleLabel">
          {{ fourthTitle }}
        </label>
        <label class="descriptionValueLabel">
          {{ fourthDescription }}
        </label>
        <!-- main container ends -->
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import "../styles/productdetail.scss";
import BreadCrumbContainer from "@/components/BreadCrumbContainer.vue";

export default {
  name: "ProductPage",
  components: { BreadCrumbContainer },
  created() {},
  data: () => ({
    productText: "Endurance Duck & Rice Dry dog food",
    topTitle:
      "Hypoallergenic superpremium complete feed for dogs. lamb & rice formula for adult dogs of medium breeds (10 – 25 kg). ",
    firstTitle: "Composition:",
    firstDescription:
      "lamb meat meal (38%), rice (37%), chicken fat, dried apple pulp, salmon oil (2%), chicken liver hydrolyzed, brewer´s yeast, glucosamine sulphate (260 mg/kg), chondroitine sulphate (160 mg/kg), mannan-oligosaccharides (150 mg/kg), fructo-oligosaccharides (100 mg/kg), yucca Mojave (100 mg/kg), inulin (90 mg/kg), dried milk thistle (75 mg/kg), dried rosemary (50 mg/kg), dried cloves (50 mg/kg), dried citrus (50mg/kg), dried curcuma (50 mg/kg).",
    secondTitle: "Analytical ingredients:",
    secondDescription:
      "crude protein 26.0%, crude fat 16.0%, moisture 10.0%, crude ash 7.0%, crude fibre 2.9%, calcium 1.6%, phosphorus 1.3%, sodium 0.2%.",
    thirdTitle: "Nutritional composition:",
    thirdDescription:
      "vitamin A (3a672a) 20,000 I.U., vitamin D3 (3a671) 1,500 I.U., vitamin E (3a700) 500 mg, vitamin C (3a312) 200 mg, choline chloride (3a890) 1,800 mg, biotin  (3a880) 0.6 mg, vitamin B1 (3a821) 5 mg, vitamin B2 (3a825i) 6 mg, niacinamide (3a315) 22 mg, calcium-D-pantothenate (3a841) 15 mg, vitamin B6 (3a831) 5 mg, folic acid (3a316) 0.6 mg, vitamin B12 0.05 mg, zinc (3b606) 80 mg, iron (3b106) 70 mg, manganese (3b504) 35 mg, iodine (3b201) 0.65 mg, copper (3b406) 15 mg, selenium (3b810) 0.2 mg. Contains natural antioxidants: tocopherol extracts from vegetable oil (1b306(i)), ascorbyl palmitate (1b304) & rosemary extract.",
    fourthTitle: "Metabolizable energy:",
    fourthDescription: "3,820 kcal/kg. Omega 3:  0.36 %, Omega 6:  1.90 %.",
  }),
};
</script> 