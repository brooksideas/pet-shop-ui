<!-- This is a resuable container that consumes and displays forms -->
<template>
  <v-dialog v-model="dialog" :max-width="width" :max-height="height">
    <slot name="content"></slot>
  </v-dialog>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "ModalContainer",
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapFields("shared", ["currentForm"]),
  },
  props: {
    openModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
  watch: {
    openModal: {
      immediate: true,
      handler(value) {
        if (value) {
          this.dialog = value; // open the Modal
        }
      },
    },
    currentForm: {
      immediate: true,
      handler(value) {
        // close the dialog
        if (value == -1) {
          this.dialog = false;
        }
      },
    },
  },
};
</script>