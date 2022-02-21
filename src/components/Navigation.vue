<template>
  <div id="navigation">
    <top-bar> </top-bar>
    <v-app>
      <!-- Header Component -->
        <top-bar> </top-bar>
      <!-- SideBar Component which is only visible for Admins -->
      <side-bar></side-bar>
      <!-- Main Display area for Child routes -->
      <v-main class="px-2 pt-0 main-offset">
        <v-container class="px-0 py-0 mx-0 fill-height" fluid>
          <div class="row fill-height">
            <div class="col">
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
    <!-- Footer Component -->
    <footer-section> </footer-section>
  </div>
</template>
<script>
import "../styles/main.scss";
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Navigation",
  created() {},
  components: {
    TopBar,
    SideBar,
    FooterSection,
  },
  data: () => ({}),
};
</script>
