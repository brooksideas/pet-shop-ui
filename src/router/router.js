import Vue from "vue";
import VueRouter from "vue-router";
import localforage from "localforage";
import { store } from "@/store/index.js";
// import routes
import Layout from "@/layouts/Layout.vue";
import MainPage from "@/pages/MainPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import CustomerPage from "@/pages/CustomerPage.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
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
        {
          path: "/customer-page",
          name: "customer-page",
          component: CustomerPage,
        },
      ],
    },
  ],
  /* Scroll to the Top of the page when navigating from one page to another */
  // navigating with back/forward buttons will return to the position the user was on
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
