<template>
  <p>This is results other: {{ result }}</p>
</template>

<script>
export default {
  // luon chay truoc khi data dc load
  computed: {
    result() {
      // Lấy biến result từ store/store.js
      return this.$store.state.result;
    }
  }
};
</script>

<style>
</style>