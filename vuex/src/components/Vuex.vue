<template>
  <div>
      <button class="btn btn-success" @click="increment">Increment</button>
      <button class="btn btn-success" @click="decrement">Decrement</button>
      <button class="btn btn-success" @click="optionsIncrement">Option Increment</button>
  </div>
</template>

<script>
export default {
    methods:{
        increment(){
            this.$store.state.result++
        },
        decrement(){
            this.$store.state.result--
        },
        optionsIncrement(){
            // this.$store.commit(‘mutationName’, payload).
            this.$store.commit('optionsIncrement',30)
        }
    }
}
</script>

<style>

</style>