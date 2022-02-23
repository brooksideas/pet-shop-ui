import Vue from "vue";
import VueRouter from "vue-router";
// import routes
import Layout from "@/layouts/Layout.vue";
import MainPage from "@/pages/MainPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import ProductPage from "@/pages/ProductPage.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
 
export default router;
