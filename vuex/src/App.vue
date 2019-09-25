<template>
  <div class="container">
    <h1>Vue Section</h1>
    <result :result="result"/>
    <br>
    <vuex @updated="updatedNumber"/>
    <!-- <vuex @updated="result += $event"/> -->
  </div>
</template>

<script>
import Vuex from './components/Vuex'
import Result from './components/Result'
export default {
  name: 'app',
  data(){
    return{
      result: 0
    }
  },
  methods:{
    updatedNumber(e){
      this.result += e;
    }
  },
  components: {
    Vuex,
    Result
  },
}
</script>

<style>
</style>
