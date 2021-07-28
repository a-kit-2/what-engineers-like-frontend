<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
:root {
  --main-color: #e980fc;
  --sub-color: #b96ac9;
  --accent-color: #ffd2fc;
  --base-color: #231b1b;
  --font-color: #ddfff7;
}

body {
  font-family: "Dela Gothic One", cursive;
  background-color: var(--base-color);
  color: var(--font-color);
}
</style>
