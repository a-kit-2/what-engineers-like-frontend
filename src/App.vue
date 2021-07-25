<template>
  <div id="app">
    <div class="container text-center">
      <div class="row m-5">
        <div class="col-4 text-right">
          <img class="logo-img" src="./assets/what_engineers_like_logo.png" />
        </div>
        <div class="col-8 text-left">
          <h1>エンジニアは何が好き？</h1>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <vue-word-cloud
          style="height: 480px; width: 640px;"
          :words="[
            ['MySQL', 11],
            ['Java', 2],
            ['C', 3],
            ['python', 4],
            ['Javascript', 5],
            ['Ruby', 6],
            ['Rails', 17],
            ['Vue.js', 28],
          ]"
          :color="([, weight]) => (weight > 10 ? 'var(--main-color)' : weight > 5 ? 'var(--sub-color)' : 'var(--accent-color)')"
          font-family="Dela Gothic One"
        />
      </div>
      <div class="row m-5">
        <div class="col-10">
          <div class="form-group">
            <input type="text" class="form-control input-form" id="input" placeholder="エンジニアとして好きなものを自由に入力してください。何度でも入力できます。" />
          </div>
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-primary w-100 submit-btn">好き！</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  name: "App",
  components: { [VueWordCloud.name]: VueWordCloud },
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

.logo-img {
  width: 3rem;
}

.input-form {
  background-color: var(--font-color);
  border-collapse: var(--font-color);
  color: var(--base-color);
}

small {
  color: var(--font-color);
}

.btn-primary,
.btn-primary:hover,
.btn-primary:focus {
  background-color: var(--main-color);
  border-color: var(--main-color);
  color: var(--font-color);
}
</style>
