<template>
  <v-data-table
    :headers="headerData"
    :items="itemsData"
    :items-per-page="5"
    class="elevation-1 dataTableClass"
  >
    <!-- order UUID  -->
    <template v-if="selectedTable === 1" v-slot:[`item.order`]="{ item }">
      <p class="text-wrap grey--text orderLabel">
        {{ item.order }}
      </p>
    </template>

    <!-- status  -->
    <template v-if="selectedTable === 1" v-slot:[`item.status`]="{ item }">
      <v-chip
        class="chipLabel"
        :color="item.status | selectColor"
        text-color="primary"
      >
        {{ item.status }}
      </v-chip>
    </template>

    <!-- invoice  -->
    <template v-if="selectedTable === 1" v-slot:[`item.invoice`]="{}">
      <v-img
        src="../assets/Download_Icon.svg"
        width="0.938rem"
        height="0.938rem"
        alt="Download Icon"
        class="downloadIconClass ml-12 pa-3"
      ></v-img>
    </template>

    <!-- Avatar -->
    <template v-if="selectedTable === 2" v-slot:[`item.avatar`]="{}">
      <v-avatar
        class="avatarDataTable mx-4 my-4 cursor"
        color="primary"
        size="48"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Customer Image"
          class=""
        />
      </v-avatar>
    </template>

    <!-- name  -->
    <template v-if="selectedTable === 2" v-slot:[`item.name`]="{ item }">
      <label class="grey--text nameLabel">
        {{ item.name }}
      </label>
    </template>

    <!-- email  -->
    <template v-if="selectedTable === 2" v-slot:[`item.email`]="{ item }">
      <p class="grey--text emailLabel">
        {{ item.email }}
      </p>
    </template>

    <!-- phone  -->
    <template v-if="selectedTable === 2" v-slot:[`item.phone`]="{ item }">
      <p class="grey--text phoneLabel">
        {{ item.phone }}
      </p>
    </template>

    <!-- address  -->
    <template v-if="selectedTable === 2" v-slot:[`item.address`]="{ item }">
      <p class="grey--text my-0 py-0 addressLabel">
        {{ item.address }}
      </p>
      <p class="grey--text my-0 py-0 addressSubLabel">Seattle</p>
    </template>

    <!-- created  -->
    <template v-if="selectedTable === 2" v-slot:[`item.created`]="{ item }">
      <p class="grey--text my-0 py-0 createdLabel">
        {{ item.created }}
      </p>
      <p class="grey--text my-0 py-0 addressSubLabel">6:30PM</p>
    </template>

    <!-- preferences  -->
    <template v-if="selectedTable === 2" v-slot:[`item.preferences`]="{ item }">
      <v-chip
        class="chipLabel"
        :color="item.preferences | selectpreferencesColor"
        text-color="white"
      >
        {{ item.preferences }}
      </v-chip>
    </template>

    <!-- actions  -->
    <template v-if="selectedTable === 2" v-slot:[`item.actions`]="{ item }">
      <v-row :class="{'actionsActiveClass':currentActionRowClicked === item.actions , 'actionsInactiveClass': currentActionRowClicked !== item.actions }">
        <!-- Approve -->
        <v-col   v-if="currentActionRowClicked === item.actions && showDeleteOptions" class="mr-4 ml-0" cols="2" sm="2" md="2" lg="2">
          <v-btn class="white" icon>
            <v-icon size="16" color="primary"> mdi-check</v-icon>
          </v-btn>
        </v-col>
        <!-- Cancel -->
        <v-col v-if="currentActionRowClicked === item.actions && showDeleteOptions" class="mr-0 ml-0 pl-3" cols="2" sm="2" md="2" lg="2">
          <v-btn class="white" icon @click="toggleDelete">
            <v-icon size="16" color="red"> mdi-close </v-icon>
          </v-btn>
        </v-col>
        <!-- edit -->
        <v-col v-if="currentActionRowClicked === item.actions && !showDeleteOptions" class="mr-0" cols="2" sm="2" md="2" lg="2">
          <v-btn class="white" rounded icon>
            <v-icon size="16" color="grey"> mdi-pencil</v-icon>
          </v-btn>
        </v-col>

        <!-- Delete -->
        <v-col v-if="currentActionRowClicked === item.actions"  class="ml-8 pl-1" cols="2" sm="2" md="2" lg="2">
          <v-btn class="white" rounded icon @click="toggleDelete">
            <v-icon size="16" color="grey">mdi-delete</v-icon>
          </v-btn>
        </v-col>

        <!-- Three Dots -->
        <v-col class="ml-2 pl-6" cols="2" sm="2" md="2" lg="2">
          <v-btn @click="actionRowClicked(item.actions)" :class="{'activeActionBtn': currentActionRowClicked === item.actions , 'inactiveActionBtn': currentActionRowClicked !== item.actions }" rounded icon>
            <v-icon size="16" color="grey"> mdi-dots-vertical</v-icon>
          </v-btn>
        </v-col>
        
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
import "@/styles/datatable.scss";

export default {
  name: "DataTableContainer",
  data: () => ({
    itemsData: [],
    currentActionRowClicked: -1,
    showDeleteOptions: true
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
    selectpreferencesColor(prefer) {
      switch (prefer) {
        case "Yes":
          return "primary";
        case "No":
          return "yellow";
      }
    },
  },
  methods: {
    actionRowClicked(clicked){
      this.currentActionRowClicked = clicked;
      
    },
    toggleDelete(){
      this.showDeleteOptions = !this.showDeleteOptions;
    },
    populateDataTable(value) {
      switch (value) {
        case 1:
          this.fetchOrdersData();
          return;
        case 2:
          this.fetchCustomersData();
          return;
        case 3:
          this.fetchProductsData(); // not Implemented
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

    fetchCustomersData() {
      this.itemsData = [
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 1,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "No",
          actions: 2,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 3,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 4,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 5,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 6,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
          name: "Tom Cruise",
          email: "j.sutton@yahoo.com",
          phone: "(947) 025-9536",
          address: "784 Quaking Lagoon Pathway",
          created: "May 26, 2019",
          preferences: "Yes",
          actions: 7,
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