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
  // mode: history,
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

// const router = new VueRouter.({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// router.beforeEach(async (to, from, next) => {
//   console.log("to => ", to);
//   console.log("from =>", from);
//   console.log("next=>", next);

//   localforage.setItem("router", to.name).catch((error) => console.error(error));
  
//   const routeName = { name: to.name };

//   console.log("Store => ", store);
//   store.dispatch('router/storeRoute', { routeName } , { root: true });


//   next();
// });

// export default router;
