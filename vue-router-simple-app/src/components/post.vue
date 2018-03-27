<template>
  <div class="post__box" v-if="post">
    <p class="post-path">
      <router-link to="/">Blog</router-link> /
      <span>{{ post.title }}</span>
    </p>
    <div class="post-wrapper">
      <img :src="post.image" class="post-box-img"/>
      <h2 class="post-box-caption">{{ post.title }}</h2>
      <p class="post-box-text">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
let posts = require('../posts')

module.exports = {
  data: function () {
    return {
      posts: posts,
      post: null
    }
  },
  created: function () {
    let postId = this.$route.params.id

    this.post = this.posts[postId]
  }
}
</script>

<style>
  .post__box {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .post-path {
    padding: 0 10px;
    color: #232B2B;
    cursor: default;
  }

  .post-path a {
    color: #307e80;
    text-decoration: none;
    cursor: pointer;
  }

  .post-wrapper {
    margin: 10px 0;
    padding: 10px;
  }

  .post-box-img {
    width: 100%;
  }

  .post-box-caption {
    font-family: 'Roboto Condensed', sans-serif;
    color: #232B2B;
    font-size: 48px;
    font-weight: 700;
    padding: 15px 0;
    cursor: default;
  }

  .post-box-text {
    color: #6b7a8f;
    padding: 15px 0;
    cursor: default;
    line-height: 1.5;
  }
</style>
