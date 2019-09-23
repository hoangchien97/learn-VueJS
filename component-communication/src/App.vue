<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <user></user>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './components/User';
export default {
  name: 'app',
  components: {
    User  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
