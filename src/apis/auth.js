import { urls } from "@/constants/urls";
import localforage from "localforage";

const axios = require("axios");

const BASE_URL = process.env.VUE_APP_BASE_URL || urls.API;

// Signin Endpoint
export const signIn = async (email, password) => {
  const loginEndPoint = "v1/admin/login";

  try {
    const { data } = await axios.post(BASE_URL + loginEndPoint, {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    // on admin error it might be a normal user so return empty data for retry
    const empty = {};
    return empty;
  }
};

// Signin Users Endpoint
export const logInUser = async (email, password) => {
  const userLoginEndPoint = "v1/user/login";

  try {
    const { data } = await axios.post(BASE_URL + userLoginEndPoint, {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    return error;
  }
};

// Signup Users Endpoint
export const signUpUser = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const userCreateEndPoint = "v1/user/create";
  try {
    const { data } = await axios.post(BASE_URL + userCreateEndPoint, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      // Default Values since the UI does not currently handle the below fields
      avatar: "",
      address: "1285 Fallen Pioneer Heights, Dallas, TX",
      phone_number: "(559) 979-6096",
      is_marketing: "No",
    });
    return data;
  } catch (error) {
    return error;
  }
};

// View user Account
export const viewUserAccount = async () => {
  const viewUserEndPoint = "v1/user";

  var token;

  await localforage.getItem("auth").then(async (value) => {
    if (value && value.bearerToken != null) {
      token = value.bearerToken;
    } else {
      alert("Please login to view user account!");
    }
  });
  try {
    const { data } = await axios.get(BASE_URL + viewUserEndPoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.success === 1) {
      return data;
    } else {
      return error;
    }
  } catch (error) {
    return error;
  }
};
