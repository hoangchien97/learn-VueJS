<template>
  <div class="container">
    <h1>Vue Section</h1>
    <result/>
    <hr/>
    <other/>
    <br>
    <vuex/>
  </div>
</template>

<script>
import Vuex from './components/Vuex'
import Result from './components/Result'
import Other from './components/Other'

export default {
  name: 'app',
  components: {
    Vuex,
    Result,
    Other
  },
}
</script>

<style>
</style>
