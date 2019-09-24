<template>
    <div>
        <h1>User</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo suscipit asperiores, aliquid possimus molestias eos mollitia dolorum nam eligendi, ex omnis perferendis delectus, cumque vel totam fugit recusandae hic!
        Reprehenderit iste dolorem nihil, dolor quaerat deleniti soluta cumque porro magnam? Reprehenderit aperiam praesentium fuga iste debitis voluptatibus adipisci optio id magni ratione ipsa aliquid quod, ut sequi, animi temporibus!
        Nesciunt, quis minima corporis ad magni temporibus earum dolore nihil iste voluptas placeat amet est repellendus dicta numquam, deserunt harum voluptates maxime voluptatibus accusantium nobis quibusdam soluta ullam laboriosam. Totam!
        Vero minima hic officiis sunt, molestias ab tempore natus labore sit voluptatem nesciunt quo rerum, ipsum iusto adipisci nulla, excepturi debitis! Adipisci iste vitae eveniet dolores saepe facilis provident aspernatur.</p>
        <hr>
        <!-- <button @click="detailUser">Detail</button> -->
        <router-link 
            to="/user/:id"
            tag="button"
            class="btn btn-primary"
        >Detail User</router-link>
        <button class="btn btn-danger" @click="backHome">Back to home</button>
    </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push('/');
            // Vue.router
        },
        detailUser(){
            this.$router.push('/user/1')
        }
    }
}
</script>

<style>

</style>