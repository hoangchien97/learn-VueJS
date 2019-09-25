<template>
    <div>
        <h1 class="text-center">User Management</h1>
        <p class="text-center">This is area to manage user of website</p>
        <hr>
        <button class="btn btn-primary" @click="backHome">Back To Home</button><!-- btn-block -->
        <!-- routes child => using router-view -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push('/');
            // Vue.router
        },
    }
}
</script>

<style>

</style>