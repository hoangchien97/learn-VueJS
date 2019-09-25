<template>
    <div>
        <h1>User Detail</h1>
        <p>User with ID : {{id}}</p>
        <!-- $route.params.id -->
        <router-link 
            tag="button"
            class="btn btn-warning"
            :to="{name: 'userEdit', params: {id}}"
        >Edit user</router-link>
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