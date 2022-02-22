import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);
 
export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#4EC690", 
            secondary: "#DDE3E2",
            background: "#F7F9FC",
            white: "#FFFFFF", 
            black: "#000000",
            grey: "#69817B",
            blue: "#2196F3",
            yellow: "#F09E00",
            green: "#008655",
            lightGrey: "#B6C4C1"
          }
        }
    }
});
