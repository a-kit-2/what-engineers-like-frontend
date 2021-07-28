import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";

import WordCloud from "../components/WordCloud.vue";

Vue.use(VueRouter);

Vue.use(VueAnalytics, {
  id: "G-1TNZ7QX62E",
});

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: WordCloud,
    },
  ],
});
