<template>
  <div id="app">
    <vue-word-cloud
      style="height: 480px; width: 640px;"
      :words="[
        ['romance', 19],
        ['horror', 3],
        ['fantasy', 7],
        ['adventure', 3],
        ['romance', 9],
        ['horror', 33],
        ['fantasy', 72],
        ['adventure', 13],
      ]"
      :color="([, weight]) => (weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo')"
      font-family="Roboto"
    />
  </div>
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  name: "App",
  components: { [VueWordCloud.name]: VueWordCloud },
};
</script>

<style></style>
