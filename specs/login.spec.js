import { mount, createLocalVue } from "@vue/test-utils";
import LoginForm from "@/forms/LoginForm.vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

describe("Login Form Tests", () => {
  const localVue = createLocalVue();
  const loginMock = jest.fn(() => Promise.resolve());

  let vuetify;
  let store;
  let wrapper;
  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      actions: {
        // mock function
        submitForm: loginMock,
      },
    });
    wrapper = mount(LoginForm, {
      sync: false,
      localVue,
      vuetify,
      store,
    });
  });
  it("Login Form: Mounts stabbed childrens", () => {
    expect(wrapper.is(LoginForm)).toBe(true);
  });

  it("Login Form: renders email field", () => {
    expect(wrapper.find("textfield[type=email]").exists());
  });

  it("Login Form: renders password field", () => {
    expect(wrapper.find("textfield[type=password]").exists());
  });

  it("Login Form: renders remember me checkbox", () => {
    expect(wrapper.find("textfield[type=checkbox]").exists());
  });

  it("Login Form: renders login button", () => {
    expect(wrapper.find("textfield[type=submit]").exists());
  });

  it("Login Form: email can be set by User interaction", async () => {
    const emailInput = wrapper.find("#emailId");
    await emailInput.setValue("test@mail.com");
    expect(wrapper.find("#emailId").element.value).toBe("test@mail.com");
  });

  it("Login Form: password can be set by User interaction", async () => {
    const passwordInput = wrapper.find("#passwordId");
    await passwordInput.setValue("123456");
    expect(wrapper.find("#passwordId").element.value).toBe("123456");
  });

  it("Login Form: remember me checkbox can be set by User interaction", async () => {
    const checkboxInput = wrapper.find("#checkboxId");
    await checkboxInput.setChecked();
    expect(wrapper.find("#checkboxId").element.checked).toBeTruthy();
  });

  it("Login Form: User can login", async () => { 
    wrapper.find("#loginBtnId").trigger("submit.prevent");
    // Wait for the DOM to update before continuing the test
    // so that mock function can be called
    wrapper.vm.$nextTick(() => {
      expect(loginMock).toHaveBeenCalled();
    });
  });
});
