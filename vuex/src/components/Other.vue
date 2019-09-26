<template>
  <div>
    <p>This is results other: {{ getResult }}</p>
    <div>
      <p>This is name result : {{ getNameResult }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getResult", "getNameResult"])
  },
};
</script>

<style>
</style>