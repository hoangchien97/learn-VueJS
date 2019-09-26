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
  // C2 . computed: mapGetters(["getResult", "getNameResult"])
  computed: {
    // C3: Line 17
    ...mapGetters(["getResult", "getNameResult"])
    // ...mapGetters(["getNameResult"]),
    // C4 Line 18 + 20,21
    // ...mapGetters({
    //   result: 'getResult'
    // })
  },
};
</script>

<style>
</style>