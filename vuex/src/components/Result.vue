<template>
  <p>This is results: {{ result }}</p>
</template>

<script>
export default {
    // luon chay truoc khi data dc load
    computed: {
      result(){
        return this.$store.state.result;
      }
    }
}
</script>

<style>

</style>