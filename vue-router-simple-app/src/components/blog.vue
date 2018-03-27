<template>
  <section class="content-wrapper">
    <h2 class="content-caption">Blog</h2>
    <div class="post-wrapper">
      <div class="post__container" v-for="(post, index) in posts" v-bind:key="post.id">
        <router-link :to="{ name: 'post', params: { id: index } }">
          <div class="post__preview">
            <img :src="post.image" class="post-img"/>
            <div class="post-caption-wrapper">
              <h3 class="post-caption">{{ post.title }}</h3>
            </div>
          </div>
        </router-link>
        <p class="post-text">{{ post.body }}</p>
        <router-link :to="{ name: 'post', params: { id: index } }" class="post-btn">Read next</router-link>
      </div>
    </div>
  </section>
</template>

<script>
let posts = require('../posts')

module.exports = {
  data: function () {
    return {
      posts: posts
    }
  }
}
</script>
