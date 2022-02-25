import App from "@/App.vue";
import { mount , shallowMount , createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import router from "@/router/router.js";


describe("App Tests", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("App is mounted on the application", () => {
    const wrapper = shallowMount(App, {
      localVue,
      vuetify,
      router
    });
    expect(wrapper.is(App)).toBe(true);
  });
});
