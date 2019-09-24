<template>
    <div class="user-edit">
        <h3>User Edit</h3>
        <p>Age : {{ userAge }}</p>
        <button @click="editAge">Edit</button>
    </div>
</template>

<script>
export default {
    name: 'user-edit',
    data(){
        return {
            
        }
    },
    props: {
        userAge: Number,
        ageWasEdited: Function
    },
    methods: {
        editAge(){
           this.ageWasEdited()
        }
    },
}
</script>

<style>

</style>