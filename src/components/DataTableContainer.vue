<template>
  <v-data-table
    :headers="headerData"
    :items="itemsData"
    :items-per-page="5"
    class="elevation-1"
  >
    <!-- order UUID  -->
    <template v-slot:[`item.order`]="{ item }">
      <p class="text-wrap grey--text orderLabel">
        {{ item.order }}
      </p>
    </template>

    <!-- status  -->
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        class="chipLabel"
        :color="item.status | selectColor"
        text-color="primary"
      >
        {{ item.status }}
      </v-chip>
    </template>

    <!-- invoice  -->
    <template v-slot:[`item.invoice`]="{}">
      <v-img
        src="../assets/Download_Icon.svg"
        width="0.938rem"
        height="0.938rem"
        alt="Download Icon"
        class="downloadIconClass ml-12 pa-3"
      ></v-img>
    </template>
  </v-data-table>
</template>

<script>
import "@/styles/datatable.scss";

export default {
  name: "DataTableContainer",
  data: () => ({
    itemsData: [],
  }),
  filters: {
    selectColor(status) {
      console.log("status", status);

      switch (status) {
        case "Open":
          return "blue";
        case "Pending payment":
          return "yellow";
        case "Paid":
          return "primary";
        case "Shipped":
          return "green";
        case "Cancelled":
          return "lightGrey";
        default:
          return "lightGrey";
      }
    },
  },
  methods: {
    populateDataTable(value) {
      switch (value) {
        case 1:
          this.fetchOrdersData();
          return;
        case 2:
          this.fetchCustomersData();
          return;
        case 3:
          this.fetchProductsData();
          return;
        default:
          return;
      }
    },

    // for the Latest Orders datatable on the first page
    fetchOrdersData() {
      // TODO:: fetch orders data here
      this.itemsData = [
        {
          order: "Order UUID",
          status: "Open",
          invoice: 6.0,
        },
        {
          order: "Ice cream sandwich",
          status: "Pending payment",
          invoice: 9.0,
        },
        {
          order: "Eclair",
          status: "Paid",
          invoice: 16.0,
        },
        {
          order: "Cupcake",
          status: "Shipped",
          invoice: 3.7,
        },
        {
          order: "Gingerbread",
          status: "Cancelled",
          invoice: 16.0,
        },
      ];
    },
  },
  props: {
    headerData: {
      type: Array,
      required: true,
      default: [],
    },
    selectedTable: {
      type: Number,
      required: true,
    },
  },
  watch: {
    selectedTable: {
      immediate: true,
      handler(value) {
        if (value) {
          this.populateDataTable(value); // fetch and populate with the table data
        }
      },
    },
  },
};
</script>