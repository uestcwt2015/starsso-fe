import Vue from "vue";
import Router from "vue-router";

// pages
import Index from "./views/Index.vue";
import Signup from "./views/Signup.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
