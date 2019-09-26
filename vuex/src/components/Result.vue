<template>
  <p>This is results: {{ result }}</p>
</template>

<script>
export default {
    // luon chay truoc khi data dc load
    computed: {
      result(){
        // Truy cap getters
        return this.$store.getters.getResult
      }
    },
}
</script>

<style>

</style>