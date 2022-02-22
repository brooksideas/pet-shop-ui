<template>
  <v-row justify="center" class="mt-0">
    <v-card class="py-0 my-0 cardRadius" width="68.313rem" height="47.875rem">
      <v-row justify="center">
        <v-spacer> </v-spacer>
        <div class="closeClass">
          <v-icon color="grey" size="1.5rem"> mdi-close </v-icon>
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
                      Fname Lname
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text dateLabel"> date Joined </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text dateValueLabel">
                      name lname
                    </label>
                  </v-row>
                </v-col>

                <!-- Phone Number  and Email -->
                <v-col class="phoneContainer" cols="2" sm="2" md="2" lg="2">
                  <v-row class="" justify="start">
                    <label class="black--text phoneLabel"> phone </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text phoneValueLabel">
                      name lname
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text emailLabel">date Joined </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text emailValueLabel">
                      name lname
                    </label>
                  </v-row>
                </v-col>

                <!-- Address and Marketing -->
                <v-col class="addressContainer" cols="3" sm="3" md="3" lg="3">
                  <v-row class="" justify="start">
                    <label class="black--text addressLabel"> name </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text addressValueLabel">
                      name lname
                    </label>
                  </v-row>

                  <v-row class="mt-4" justify="start">
                    <label class="black--text marketingLabel">
                      date Joined
                    </label>
                  </v-row>

                  <v-row class="" justify="start">
                    <label class="black--text marketingValueLabel">
                      name lname
                    </label>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-row justify="start" class="latestContainer">
          <label @click="$router.go(-1)" class="black--text latestLabel"
            >Latest orders</label
          >
          <div class="tableContainer">
          <data-table-container :headerData="headers" :selectedTable="1"> </data-table-container>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>
import "@/styles/setting.scss";
import DataTableContainer from "@/components/DataTableContainer.vue";
export default {
  name: "UserSettingForm",
  components: { DataTableContainer },
  data: () => ({
    email: "",
    password: "",
    loading: false,
    showPass: false,
    iconColor: "orange",
    browserTip: "browser-tip",
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
};
</script>