<template>
  <div class="container">
    <h1>Vue Section</h1>
    <result/>
    <br>
    <vuex/>
  </div>
</template>

<script>
import Vuex from './components/Vuex'
import Result from './components/Result'
export default {
  name: 'app',
  components: {
    Vuex,
    Result
  },
}
</script>

<style>
</style>
