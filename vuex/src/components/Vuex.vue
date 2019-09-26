<template>
  <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
        <button class="btn btn-success" @click="optionsIncrement">Option Increment</button>
        <button class="btn btn-success" @click="decrementMutation">Decrement Mutation</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
        },
        // Su dung ...mapMutations
        ...mapMutations([
            'decrementMutation'
        ])
    }
}
</script>

<style>

</style>