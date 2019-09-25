<template>
  <div>
        <h3>Errors</h3>
        <p>Have some errors ...</p>
        <button type="button" name="" id="" class="btn btn-primary"
            @click="backHome"  
        >Back to home</button>
  </div>
</template>

<script>
export default {
    methods: {
        backHome(){
            this.$router.push({name: 'homePage'});
        }
    }
}
</script>

<style>

</style>