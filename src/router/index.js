import Vue from "vue";
import VueRouter from "vue-router";

import WordCloud from "../components/WordCloud.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "WordCloud",
      component: WordCloud,
    },
  ],
});
