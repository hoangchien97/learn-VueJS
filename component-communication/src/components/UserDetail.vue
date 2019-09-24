<template>
    <div class="user-detail">
        <h3>User Details</h3>
        <p>Age : {{ age }}</p>
        <button v-on:click="changeAge">Change Age</button>
    </div>
</template>

<script>
export default {
    name: 'user-detail',
    data(){
        return{
        }
    },
    props: {
        age: Number
    },
    methods: {
        changeAge(e){
            var data = {
                age: 24,
            };
            this.$emit('ageWasUpdated',data);
            console.log(data);
            
        }
    }
}
</script>

<style>

</style>