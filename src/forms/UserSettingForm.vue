<template>
  <v-row justify="center" class="mt-0">
    <v-card class="py-0 my-0 cardRadius" width="68.313rem" height="47.875rem">
      <v-row justify="center">
        <v-spacer> </v-spacer>
        <div class="closeClass">
          <v-icon @click="closeForm" color="grey" size="1.5rem">
            mdi-close
          </v-icon>
        </div>
      </v-row>
      <v-row justify="center" class="px-0 py-0 mx-0 my-0">
        <label class="black--text settingLabel">{{ "User settings" }} </label>
      </v-row>

      <v-card-text class="pt-2">
        <v-container>
          <v-row justify="start">
            <v-col class="" cols="12" sm="12" md="12" lg="12">
              <v-row class="" justify="start">
                <v-col class="ml-10" cols="2" sm="2" md="2" lg="2">
                  <v-avatar size="141" color="primary"> </v-avatar>
                </v-col>

                <v-col
                  class="px-0 py-0 mx-0 my-0"
                  cols="1"
                  sm="1"
                  md="1"
                  lg="1"
                >
                  <v-divider class="dividerClass" vertical></v-divider>
                </v-col>

                <!-- Name and Date -->
                <v-col class="nameContainer" cols="3" sm="3" md="3" lg="3">
                  <v-row class="" justify="start">
                    <label class="black--text nameLabel"> Name </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text nameValueLabel">
                      {{ firstName | fullName(lastName) }}
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text dateLabel"> Date joined </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text dateValueLabel">
                      {{ dateJoined | dateJoinedFormatted }}
                    </label>
                  </v-row>
                </v-col>

                <!-- Phone Number  and Email -->
                <v-col class="phoneContainer" cols="2" sm="2" md="2" lg="2">
                  <v-row class="" justify="start">
                    <label class="black--text phoneLabel"> Phone number </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text phoneValueLabel">
                      {{ phoneNumber }}
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text emailLabel">Email </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text emailValueLabel">
                      {{ email }}
                    </label>
                  </v-row>
                </v-col>

                <!-- Address and Marketing -->
                <v-col class="addressContainer" cols="3" sm="3" md="3" lg="3">
                  <v-row class="" justify="start">
                    <label class="black--text addressLabel"> Address </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text addressValueLabel">
                      {{ address }}
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text marketingLabel">
                      Marketing preferences
                    </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text marketingValueLabel">
                      {{ marketingPreferences | marketingPreferencesFomatted }}
                    </label>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-row justify="start" class="latestContainer">
          <label class="black--text latestLabel">Latest orders</label>
          <div class="tableContainer">
            <data-table-container :headerData="headers" :selectedTable="1">
            </data-table-container>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/setting.scss";
import moment from "moment";
import { mapActions } from "vuex";
import localforage from "localforage";
import DataTableContainer from "@/components/DataTableContainer.vue";
export default {
  name: "UserSettingForm",
  components: { DataTableContainer },
  created() {
    this.fetchUserAccount();
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    marketingPreferences: "",
    dateJoined: "",
    loading: false,
    showPass: false,
    headers: [
      {
        text: "Order UUID",
        align: "start",
        sortable: false,
        value: "order",
      },
      { text: "Status", value: "status" },
      { text: "Download invoice", value: "invoice" },
    ],
  }),
  filters: {
    fullName(firstName, lastName) {
      return firstName + lastName;
    },

    dateJoinedFormatted(date) {
      var input = moment(date).format("L");
      var formattedDate = input.replace("/", ".");
      return formattedDate;
    },

    marketingPreferencesFomatted(preferences) {
      return preferences === 1 ? "No" : "Yes";
    },
  },
  methods: {
    ...mapActions("shared", ["storeFormNumber"]),
    ...mapActions("auth", ["getUserAccount"]),
    closeForm() {
      //close form
      const form = {
        number: -1,
      };
      this.storeFormNumber({ form });
    },
    async fetchUserAccount() {
      try {
        await this.getUserAccount().catch(() => {
          alert("Could Not display user Account! Showing Defaults!");
        });
      } catch (error) {
        alert("Could Not display user Account! Showing Defaults!");
      }
    },
    async populateUserAccountView() {
      await localforage.getItem("auth").then(async (value) => {
        if (value && value.currentUser != null) {
          this.firstName = value.currentUser.first_name;
          this.lastName = value.currentUser.last_name;
          this.email = value.currentUser.email;
          this.address = value.currentUser.address;
          this.phoneNumber = value.currentUser.phone_number;
          this.marketingPreferences = value.currentUser.is_marketing;
          this.dateJoined = value.currentUser.created_at;
        } else {
          alert("Please login to view user account!");
        }
      });
    },
  },

  watch: {
    currentUser: {
      immediate: true,
      handler(value) {
        if (value) {
          this.populateUserAccountView(value);
        }
      },
    },
  },
};
</script>