<template>
  <div>
    <!-- First Search For Customer -->

    <v-row class="mt-8 filterWrapper" v-if="filterType === 1">
      <v-col class="px-0 mx-0 my-0" cols="4" sm="4" md="4" lg="4">
        <!-- Customer Name -->
        <v-row justify="start">
          <v-text-field
            placeholder="Customer name"
            class=""
            outlined
            color="primary"
            append-icon="mdi-magnify"
            v-model="searchName"
          ></v-text-field>
        </v-row>

        <!-- Customer Address -->

        <v-row justify="start" class="mt-6">
          <v-text-field
            placeholder="Customer Address"
            class=""
            outlined
            color="primary"
            append-icon="mdi-magnify"
            v-model="searchAddress"
          ></v-text-field>
        </v-row>
      </v-col>

      <v-col class="px-0 mx-0 my-0" cols="4" sm="4" md="4" lg="4">
        <!-- Customer Email -->
        <v-row justify="start">
          <v-text-field
            placeholder="Customer Email"
            class="emailSearch"
            outlined
            color="primary"
            append-icon="mdi-magnify"
            v-model="searchEmail"
          ></v-text-field>
        </v-row>

        <v-row>
          <!-- Date Created -->
          <v-col class="pl-6 mx-0 my-0" cols="6" sm="6" md="6" lg="6">
            <!-- Calendar Date picker -->
            <v-menu
              ref="startMenu"
              v-model="startMenu"
              :close-on-content-click="false"
              :return-value.sync="startDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  placeholder="Date Created"
                  color="secondary"
                  append-icon="mdi-calendar-blank "
                  v-model="dateSelected"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                :no-title="checkDateSelected"
                scrollable
                range
                color="primary lighten-1"
                header-color="primary"
                :allowed-dates="allowedStartDates"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="startMenu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.save(startDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <!-- Marketing Preferance -->
          <v-col class="pl-4 mx-0 mt-2" cols="6" sm="6" md="6" lg="6">
            <v-select
              class=""
              :items="items"
              label="Marketing preferences"
              hint="Marketing preferences"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="px-0 my-0 phoneSearch" cols="4" sm="4" md="4" lg="4">
        <!-- Customer Phone -->
        <v-row justify="start">
          <v-text-field
            placeholder="Customer Phone"
            class=""
            outlined
            color="primary"
            append-icon="mdi-magnify"
            v-model="searchPhone"
          ></v-text-field>
        </v-row>

        <!-- Reset Button -->
        <v-row justify="start" class="mt-10 ml-3">
          <v-btn color="secondary">
            <label class="grey--text" dark> Reset </label>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FilterContainer",
  computed: {
    checkDateSelected() {
      return this.dateSelected === null ? true : false;
    },
  },
  data: () => ({
    search: "",
    startMenu: false,
    dateSelected: null,
    startDate: new Date().toISOString().substr(0, 10),
    searchName: "",
  }),
  props: {
    filterType: {
      type: Number,
      required: true,
      default: -1,
    },
  },
};
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  width: 19.138rem;
  height: 3.5rem;
  margin-left: 1.5rem;
}
.v-text-field--outlined >>> .v-text-field__slot {
  padding-left: 1.5rem;
  padding-top: -0.5rem;
}

.filterWrapper {
  background: #fafafa;
  border-radius: 0px 0px 4px 4px;
}
</style>