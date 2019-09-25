<template>
  <div>
      <button class="btn btn-success" @click="increment">Increment</button>
      <button class="btn btn-success" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
    methods:{
        increment(){
            // send event Increment cho parent ( App.vue )
            this.$emit('updated',1)
        },
        decrement(){
            this.$emit('updated',-1)
        }
    }
}
</script>

<style>

</style>