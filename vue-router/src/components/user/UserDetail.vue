<template>
    <div>
        <h1>User Detail</h1>
        <p>User with ID : {{id}}</p>
        <!-- $route.params.id -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
}
</script>

<style>

</style>