<template>
  <div id="app" style="margin-top: 0">
    <div class="container">
      <Header></Header>
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from './components/layouts/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
