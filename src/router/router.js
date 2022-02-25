import Vue from "vue";
import VueRouter from "vue-router";
import localforage from "localforage";
import { store } from "@/store/index.js";
// import routes
import Layout from "@/layouts/Layout.vue";
import MainPage from "@/pages/MainPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: "main-page",
      component: Layout,
      children: [
        {
          path: "/main-page",
          name: "main-page",
          component: MainPage,
        },
        {
          path: "/category-page",
          name: "category-page",
          component: CategoryPage,
        },
        {
          path: "/product-page",
          name: "product-page",
          component: ProductPage,
        },
      ],
    },
  ]
});
 
