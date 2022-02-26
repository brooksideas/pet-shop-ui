<template slot="side">
  <div>
    <v-app>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
        class="navBar"
      >
        <v-list class="logoHeight" dense color="primary" dark>
          <v-list-item-group class="logoClass">
            <v-list-item class="px-0">
              <v-list-item-action>
                <v-row>
                  <v-icon
                    class="logoIcon"
                    >mdi-paw</v-icon
                  >
                  <label class="ml-2 white--text logoName"> petson. </label>
                </v-row>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-list class="navBarList px-0 py-0">
          <v-list-item-group active-class="navBarListActive">
            <v-list-item 
              v-for="item in items"
              :key="item.title"
              :to="{ name: item.link }"
            >
              <template>
                <v-list-item-icon>
                  <v-icon v-bind="attrs" v-on="on" color="grey">{{
                    item.icon
                  }}</v-icon>
                </v-list-item-icon>
              </template>

              <template>
                <v-list-item-content v-bind="attrs" v-on="on">
                  <v-list-item-title class="grey--text">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },
  data: () => ({
    petson: "petson",
    sidebarMenu: true,
    toggleMini: false,
    items: [
      {
        title: "Dashboard",
        link: "",
        icon: "mdi-tune",
      },
      {
        title: "All tickets",
        link: "",
        icon: "mdi-credit-card ",
      },
      {
        title: "Shipment Locator",
        link: "",
        icon: "mdi-map-marker ",
      },
      {
        title: "Customers",
        link: "customer-page",
        icon: "mdi-account-multiple-outline ",
      },
      {
        title: "Products",
        link: "",
        icon: "mdi-folder-outline ",
      },
    ],
  }),
};
</script>
