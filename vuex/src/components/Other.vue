<template>
  <div>
    <p>This is results other: {{ result }}</p>
    <div>
      <p>This is name result : {{ getNameResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // luon chay truoc khi data dc load
  computed: {
    result() {
      // Truy cap getters
      return this.$store.getters.getResult
    },
    getNameResult(){
      return this.$store.getters.getNameResult;
    }
  }
};
</script>

<style>
</style>