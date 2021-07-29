import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  property: {
    id: "G-KKWC3Z231X",
    router,
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
