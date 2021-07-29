<template>
  <div class="container text-center">
    <div class="m-md-5">
      <img class="logo-img" src="../assets/what_engineers_like_logo.png" />
      <h1 class="d-inline">エンジニアは何が好き？</h1>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <vue-word-cloud style="height: 480px; width: 640px;" :words="words" :color="([, weight]) => (weight > (numOfWords / 100) * 10 ? 'var(--main-color)' : weight > (numOfWords / 100) * 5 ? 'var(--sub-color)' : 'var(--accent-color)')" font-family="Dela Gothic One" />
    </div>
    <div class="row m-md-5">
      <div class="col-md-10">
        <div class="form-group">
          <input v-model="like.name" type="text" class="form-control input-form" id="input" placeholder="エンジニアとして好きなものを自由に入力してください。何度でも入力できます。" />
        </div>
      </div>
      <div class="col-md-2">
        <button @click="newLike()" type="submit" class="btn btn-primary w-100 submit-btn">好き！</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueWordCloud from "vuewordcloud";
import axios from "axios";

export default {
  name: "WordCloud",
  components: { [VueWordCloud.name]: VueWordCloud },
  data() {
    return {
      like: {
        name: "",
      },
      words: [],
      numOfWords: 0,
      isPosting: false,
    };
  },
  mounted: function() {
    this.getLikes();
  },
  methods: {
    beginPost() {
      this.isPosting = true;
    },
    endPost() {
      this.isPosting = false;
    },
    newLike() {
      if (!this.isPosting && this.like.name != "") {
        this.beginPost();
        axios
          .post(
            `${process.env.VUE_APP_BACKEND_URL}/new_like`,
            {
              like: {
                name: this.like.name,
                count: 1,
              },
            },
            { withCredentials: true }
          )
          .then((response) => {
            if (response.data.create_like || response.data.add_count) {
              this.like.name = "";
              this.getLikes();
            } else {
              alert("投稿に失敗しました。");
            }
          })
          .catch((e) => {
            alert(e);
          });
        this.endPost();
      }
    },
    getLikes() {
      axios
        .get(`${process.env.VUE_APP_BACKEND_URL}/show_likes`)
        .then((response) => {
          if (response.data.show_likes) {
            this.words = [];
            this.numOfWords = 0;
            response.data.likes.forEach((like) => {
              this.words.push([like.name, like.count]);
              this.numOfWords += like.count;
            });
          } else {
            alert("データ取得に失敗しました。");
          }
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>

<style>
.logo-img {
  width: 3rem;
}

.input-form {
  background-color: var(--font-color);
  border-collapse: var(--font-color);
  color: var(--base-color);
}

.btn-primary,
.btn-primary:hover,
.btn-primary:focus {
  background-color: var(--main-color);
  border-color: var(--main-color);
  color: var(--font-color);
}

@media screen and (max-width: 959px) {
  /* 959px以下に適用されるCSS（タブレット用） */
}
@media screen and (max-width: 480px) {
  /* 480px以下に適用されるCSS（スマホ用） */
  .logo-img {
    width: 1rem;
  }
  h1 {
    font-size: 1rem;
  }
}
</style>
