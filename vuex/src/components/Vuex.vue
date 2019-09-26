<template>
  <div>
        <button class="btn btn-success" @click="increment">Increment</button>
        <button class="btn btn-success" @click="decrement">Decrement</button>
        <button class="btn btn-success" @click="incrementMutation">Increment Mutations</button>
        <button class="btn btn-success" @click="decrementMutation">Decrement Mutations</button>
        <button class="btn btn-success" @click="incrementActions">Increment Actions</button>
        <button class="btn btn-success" @click="asyncDecrement">async Decrement Actions</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    methods:{
        increment(){
            this.$store.state.result++
        },
        decrement(){
            this.$store.state.result--
        },
        incrementMutation(){
            // this.$store.commit(‘mutationName’, payload).
            this.$store.commit('incrementMutation')
        },
        // Su dung ...mapMutations
        
        ...mapMutations([
            'decrementMutation'
        ]),

        // Su dung ...mapActions
        ...mapActions(['incrementActions','asyncDecrement'])
    }
}
</script>

<style>

</style>