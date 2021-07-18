import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HomeComponent from "@/components/Home/HomeComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/HomeComponent",
      name: "HomeComponent",
      component: HomeComponent
    }
  ]
});
