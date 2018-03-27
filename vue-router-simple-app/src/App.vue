<template>
  <div id="content">
    <div id="menu">
      <header class="header">
        <nav class="nav">
          <ul class="header-list">
            <li class="header-item">
              <router-link to="/" class="header-item-link"><img :src="require('./assets/cube.svg')" class="header-logo"/></router-link>
            </li>
            <li class="header-item">
              <router-link to="/" class="header-item-link"><span class="header-item-link--small">+</span> Blog</router-link>
            </li>
            <li class="header-item">
              <router-link to="/brands" class="header-item-link"><span class="header-item-link--small">+</span> Brands</router-link>
            </li>
            <li class="header-item">
              <router-link to="/contacts" class="header-item-link"><span class="header-item-link--small">+</span> Contacts</router-link>
            </li>
            <li class="header-item">
              <router-link to="/projects" class="header-item-link"><span class="header-item-link--small">+</span> Projects</router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #232B2B;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #f6f3f3;
  }

  /*Header nav-bar*/
  .header-list {
    max-width: 1200px;
    width: 100%;
    padding: 20px 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  .header-item {
    margin-right: 20px;
  }

  .header-logo {
    width: 50px;
    height: 50px;
  }

  .header-item:last-child {
    margin-right: 0;
  }

  .header-item-link {
    color: #232B2B;
    text-decoration: none;
    font-size: 18px;
    transition: all .3s ease-in-out;
    letter-spacing: 1.2px;
  }

  .header-item-link:hover,
  .header-item-link:hover span {
    color: #307e80;
  }

  .header-item-link--small {
    font-size: 14px;
    font-weight: bold;
    transition: all .3s ease-in-out;
  }

  .header-item-link.router-link-exact-active.router-link-active,
  .header-item-link.router-link-exact-active.router-link-active span {
    color: #307e80;
  }
  /*end*/

  /*Content styles*/
  .content-caption {
    font-family: 'Roboto Condensed', sans-serif;
    color: #232B2B;
    font-size: 48px;
    font-weight: 700;
    padding: 15px;
    cursor: default;
  }

  .content-wrapper {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .content-text {
    line-height: 1.5;
    cursor: default;
  }
  /*end*/

  /*Post styles*/
  .post-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-around;
  }

  .post__container {
    width: 30%;
    min-width: 300px;
    margin-bottom: 20px;
    border-radius: 4px;
    padding-bottom: 15px;
    background: #f9f9f9;
    box-shadow: 0 5px 20px 5px rgba(0,0,0,0.1);
  }

  .post__preview {
    width: 100%;
    height: 190px;
    position: relative;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }

  .post-caption-wrapper {
    position: absolute;
    width: 100%;
    height: 190px;
    top:0;
    left: 0;
    z-index: 3;
    opacity: 0;
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: rgba(0,0,0,0.3);
    cursor: pointer;
  }

  .post-caption {
    padding: 0 20px;
    text-align: center;
    color: white;
  }

  .post-img {
    width: 100%;
  }

  .post__container:hover .post-caption-wrapper {
    opacity: 1;
  }

  .post-text {
    color: #6b7a8f;
    padding: 15px;
    cursor: default;
  }

  .post-btn {
    padding: 5px 15px;
    margin-left: 15px;
    text-decoration: none;
    transition: all .3s ease-in-out;
    border-radius: 4px;
  }

  .post-btn:hover {
    background: #232B2B;
    color: white;
  }
</style>
