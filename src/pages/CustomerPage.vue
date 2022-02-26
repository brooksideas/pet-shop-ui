<template>
  <v-app>
    <v-row class="mainCustomerContainer" justify="center">
      <v-col class="px-0 py-0 mx-0 my-0" cols="12" sm="12" md="12" lg="12">
        <label class="black--text customersTitle"> Customers </label>
        <div class="row breadCustomerContainer">
          <bread-crumb-container :items="customersLink"> </bread-crumb-container>
        </div>
        <div class="customerTableContainer">
          <v-row justify="start" class="mx-0 my-0 px-0 py-0">
            <v-col class="px-0 pt-3 mx-0 my-0" cols="3" sm="3" md="3" lg="3">
              <label class="customerTitleLabel"> All customers </label>
            </v-col>
            <v-col
              class="addBtnContainer py-0 mx-0 mt-1"
              cols="6"
              sm="6"
              md="6"
              lg="6"
            >
              <v-btn
                color="primary"
                class="addBtnWrapper cursor"
                @click="openCustomerModal"
              >
                <v-icon left class="addIcon ml-1"> mdi-plus </v-icon>
                <label class="white--text addNewLabel">
                  Add new customer
                </label>
              </v-btn>

              <div v-if="showAddModal">
                <modal-builder :injectForm="injectCustomerForm">
                </modal-builder>
              </div>
            </v-col>

            <v-col class="py-0 pr-4 ml-12 mt-2" cols="2" sm="2" md="2" lg="2">
              <label class="filterLabel"> Filter </label>
              <v-icon @click="showFilters" class="filterIcon cursor">{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-col>
          </v-row>

          <v-card class="filterIndex" v-if="show">
            <filter-container v-if="show" :filterType="customerFilterOn">
            </filter-container>
          </v-card>

          <div :class="{ noFilter: !show, filterDisplay: show }">
            <data-table-container :headerData="headers" :selectedTable="2">
            </data-table-container>
          </div>
        </div>
        <!-- main container ends -->
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import "../styles/customer.scss";
import BreadCrumbContainer from "@/components/BreadCrumbContainer.vue";
import DataTableContainer from "@/components/DataTableContainer.vue";
import FilterContainer from "@/components/FilterContainer.vue";

export default {
  name: "CustomerPage",
  components: { BreadCrumbContainer, DataTableContainer, FilterContainer },
  created() {},
  data: () => ({
    show: true,
    showAddModal: false,
    injectCustomerForm: 4,
    customerFilterOn: 1,
    headers: [
      {
        text: "",
        align: "start",
        sortable: false,
        value: "avatar",
      },
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Address", value: "address" },

      { text: "Date created", value: "created" },
      { text: "Marketing preferences", value: "preferences" },
      { text: "", value: "actions" },
    ],
    customersLink: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
    ],
  }),
  methods: {
    showFilters() {
      this.show = !this.show;
    },

    // Injects the signup (number 4 indicates the Add / Edit Customer form) form and displays the dialog
    openCustomerModal() {
      this.showAddModal = true;
    },
  },
};
</script> 