<template>
    <div>
        <h1>User Detail</h1>
        <p>User with ID : {{id}}</p>
        <!-- $route.params.id -->
        <router-link 
            tag="button"
            class="btn btn-warning"
            :to="link"
        >Edit user</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            link: {
                name: 'userEdit',
                params: this.id,
                query: {
                    locate: 'vi',
                    browser: 'chorme'
                },
                hash: '#react'
            },
        }
    },
    beforeRouteEnter (to, from, next) {
        if(true){
            next()
        }else{
            next(false)
        }
    }
}
</script>

<style>

</style>