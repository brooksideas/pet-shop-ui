<template>
  <v-main id="app">
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.commit("setLocalforageConfig");
  },
};
</script>
 
