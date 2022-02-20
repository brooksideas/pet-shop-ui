import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("App", () => {
  it("App renders a div", () => {
    const wrapper = mount(App);
    expect(wrapper.find("#app").exists()).toBe(true);
  });
}); 