<template>
  <div>
    <!-- Main Page -->
    <main-page> </main-page>
    <navigation />
  </div>
</template>

<style>
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import MainPage from "@/pages/MainPage.vue";

export default {
  name: "Layout",
  components: {
    Navigation,
    MainPage,
  },
};
</script>



