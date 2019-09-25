<template>
  <div id="app" style="margin-top: 0">
    <router-view name="header"></router-view>
    <div class="container">
      <transition name="slide">
        <router-view> </router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
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
  .slide-leave-active{
    transition: opacity 0.3s ease;
    opacity: 0;
    animation: slide-out 0.3s ease-out forwards;
  }
  .slide-leave{
    opacity: 1;
    transform: translateX(0);
  }
  @keyframes slide-out{
    0%{
      transform: translateX(0)
    }
    100%{
      transform: translateX(30px)
    }
  }
</style>
