<!-- This is a resuable container that consumes and displays forms -->
<template> 
    <v-dialog   v-model="dialog" persistent :max-width="width" :max-height="height">
      <slot name="content"></slot>
    </v-dialog> 
</template>

<script>
export default {
  name: "ModalContainer",
  data: () => ({
    dialog: false,
  }),
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
  },
};
</script>