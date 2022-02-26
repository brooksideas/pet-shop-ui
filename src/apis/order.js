import { urls } from "@/constants/urls";
import localforage from "localforage";

const axios = require("axios");

const BASE_URL = process.env.VUE_APP_BASE_URL || urls.API;

// fetch Latest  Orders Endpoint
export const fetchLatestUserOrders = async (email, password) => {
  const orderEndPoint = "v1/user/orders";

  var token;

  await localforage.getItem("auth").then(async (value) => {
    if (value && value.bearerToken != null) {
      token = value.bearerToken;
    } else {
      alert("Please login to view user account!");
    }
  });

  try {
    const  data  = await axios.get(BASE_URL + orderEndPoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data; 
  } catch (error) {
    return error;
  }
};
