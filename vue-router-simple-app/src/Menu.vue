<template>
  <div id="menu">
    <header class="header">
      <nav class="nav">
        <ul class="header-list">
          <li class="header-item">
            <router-link to="/">+ Home</router-link>
            <router-link to="/brands">+ Brands</router-link>
            <router-link to="/contacts">+ Contacts</router-link>
            <router-link to="/projects">+ Projects</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #menu {
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    font-size: 48px;
    font-weight: 700;
  }
</style>
