<template slot="side">
  <div style="margin-top: 100px">
    <v-app>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
        class="navBar"
      >
        <v-list dense color="primary" dark>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-action class="logoClass">
                <v-icon @click.stop="sidebarMenu = !sidebarMenu"
                  >mdi-paw</v-icon
                >
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="petson"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="{ name: item.link }"
          >
            <template>
              <v-list-item-icon>
                <v-icon v-bind="attrs" v-on="on" color="primary">{{
                  item.icon
                }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ item.tooltip }}</span>

            <template>
              <v-list-item-content v-bind="attrs" v-on="on">
                <v-list-item-title class="primary--text">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
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
        link: "#",
        icon: "mdi-home-outline",
      },
      {
        title: "All tickets",
        link: "#",
        icon: "mdi-newspaper-variant-outline",
      },
      {
        title: "Shipment Locator",
        link: "#",
        icon: "mdi-account-outline",
      },
      {
        title: "Customers",
        link: "#",
        icon: "mdi-bullhorn-outline",
      },
      {
        title: "Products",
        link: "#",
        icon: "mdi-cash-usd-outline",
      },
    ],
  }),
};
</script>
