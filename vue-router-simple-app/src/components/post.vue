<template>
  <div class="post__box" v-if="post">
    <img :src="post.image" class="post-box-img"/>
    <h2 class="post-box-caption">{{ post.title }}</h2>
    <p class="post-box-text">{{ post.body }}</p>
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

    this.post = this.post[postId]
  }
}
</script>

<style>
  .post__box {
    width: 100%;
  }

  .post-box-img {
    width: 100%;
  }

  .post-box-caption {
    font-family: 'Roboto Condensed', sans-serif;
    color: #232B2B;
    font-size: 48px;
    font-weight: 700;
    padding: 15px;
    cursor: default;
  }

  .post-box-text {
    color: #6b7a8f;
    padding: 15px;
    cursor: default;
  }
</style>
