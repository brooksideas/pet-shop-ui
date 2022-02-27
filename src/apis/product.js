import { urls } from "@/constants/urls";
import localforage from "localforage";

const axios = require("axios");

const BASE_URL = process.env.VUE_APP_BASE_URL || urls.API;


export const fetchAllProducts = async (page , limit) => {
    const productsEndPoint = "v1/products";
  
    var token;
  
    await localforage.getItem("auth").then(async (value) => {
      if (value && value.bearerToken != null) {
        token = value.bearerToken;
      } else {
        alert("Please login to fetch products!");
      }
    });
  
    try {
      const  { data }  = await axios.get(BASE_URL + productsEndPoint, {
        headers: { Authorization: `Bearer ${token}` },
            params: {
                page: page,
                limit: limit
            }
      });

      return data; 
    } catch (error) {
      return error;
    }
  };