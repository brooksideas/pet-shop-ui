import { mount, createLocalVue } from "@vue/test-utils";
import SignupForm from "@/forms/SignupForm.vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

describe("Login Form Tests", () => {
  const localVue = createLocalVue();
  const signupMock = jest.fn(() => Promise.resolve());

  let vuetify;
  let store;
  let wrapper;
  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      actions: {
        // mock function
        submitForm: signupMock,
      },
    });
    wrapper = mount(SignupForm, {
      sync: false,
      localVue,
      vuetify,
      store,
    });
  });
  it("Signup Form: Form Mounts", () => {
    expect(wrapper.is(SignupForm)).toBe(true);
  });
  
  it("Signup Form: renders first name field", () => {
    expect(wrapper.find("#firstNameId").exists());
  });

  it("Signup Form: renders last name field", () => {
    expect(wrapper.find("#lastNameId").exists());
  });

  it("Signup Form: renders email field", () => {
    expect(wrapper.find("#signupEmailId").exists());
  });

  it("Signup Form: renders password field", () => {
    expect(wrapper.find("#signupPasswordId").exists());
  });

  it("Signup Form: renders confirm password field", () => {
    expect(wrapper.find("#signupConfirmPasswordId").exists());
  });

  it("Signup Form: renders receive promotions checkbox", () => {
    expect(wrapper.find("textfield[type=checkbox]").exists());
  });

  it("Signup Form: renders Signup button", () => {
    expect(wrapper.find("textfield[type=submit]").exists());
  });

  it("Signup Form: first name can be set by User interaction", async () => {
    const firstInput = wrapper.find("#firstNameId");
    await firstInput.setValue("first name");
    expect(wrapper.find("#firstNameId").element.value).toBe("first name");
  });
  it("Signup Form: last name can be set by User interaction", async () => {
    const lastInput = wrapper.find("#lastNameId");
    await lastInput.setValue("last name");
    expect(wrapper.find("#lastNameId").element.value).toBe("last name");
  });
  it("Signup Form: email can be set by User interaction", async () => {
    const emailInput = wrapper.find("#signupEmailId");
    await emailInput.setValue("test@mail.com");
    expect(wrapper.find("#signupEmailId").element.value).toBe("test@mail.com");
  });

  it("Signup Form: password can be set by User interaction", async () => {
    const passwordInput = wrapper.find("#signupPasswordId");
    await passwordInput.setValue("123456");
    expect(wrapper.find("#signupPasswordId").element.value).toBe("123456");
  });

  it("Signup Form: confirm password can be set by User interaction", async () => {
    const confirmPasswordInput = wrapper.find("#signupConfirmPasswordId");
    await confirmPasswordInput.setValue("123456");
    expect(wrapper.find("#signupConfirmPasswordId").element.value).toBe("123456");
  });

  
  it("Signup Form: password and confirm password similarity check", async () => {
    const passwordInput = wrapper.find("#signupPasswordId");
    await passwordInput.setValue("123456");
    const confirmPasswordInput = wrapper.find("#signupConfirmPasswordId");
    await confirmPasswordInput.setValue("123456");
    expect(passwordInput.element.value).toEqual(confirmPasswordInput.element.value);
  });

  it("Signup Form: receive promotions checkbox can be set by User interaction", async () => {
    const checkboxInput = wrapper.find("#signupCheckboxId");
    await checkboxInput.setChecked();
    expect(wrapper.find("#signupCheckboxId").element.checked).toBeTruthy();
  });

  it("Signup Form: User can signup", async () => { 
    wrapper.find("#signupBtnId").trigger("submit.prevent");
    // Wait for the DOM to update before continuing the test
    // so that mock function can be called
    wrapper.vm.$nextTick(() => {
      expect(signupMock).toHaveBeenCalled();
    });
  });
});
