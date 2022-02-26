<template>
  <div>
    <!-- Main Page -->
    <!-- <main-page v-if="main"> </main-page>
    <category-page v-if="cus"> </category-page> -->
    <navigation />
  </div>
</template>

<style>
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import MainPage from "@/pages/MainPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "Layout",
  components: {
    Navigation,
    MainPage,
    CategoryPage,
  },
  computed: {
    ...mapFields("router", ["currentRouteName"]),
  },
  data: () => ({
    main: false,
    cus: false,
  }),
  methods: {
    setRoute(route) {
      switch (route) {
        case "layout":
          this.main = true;
          this.cus = false;
          return;
        case "category-page":
          this.main = false;
          this.cus = true;
          return;
        default:
          this.main = true;
          this.cus = false;
          return;
      }
    },
  },

  watch: {
    currentRouteName: {
      immediate: true,
      handler(value) {
        this.setRoute(value);
      },
    },
  },
};
</script>



