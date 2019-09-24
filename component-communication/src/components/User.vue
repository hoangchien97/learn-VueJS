<template>
    <div class="user">
        <p>My name is {{ name }}</p>
        <p>I'm {{ age }} year(s) old !</p>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <button @click="resetAge">Reset Age</button>
                <user-detail
                  v-bind:age="age"
                  v-on:ageWasUpdated="handleChangeAge"
                ></user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <user-edit
                  :userAge="age"
                  :ageWasEdited="handleEditedAge"
                ></user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  name: "user",
  data() {
    return {
      name: "Hoang Chien",
      age: 23
    };
  },
  components: {
    UserDetail,
    UserEdit
  },
  methods: {
    resetAge(){
      this.age = 23;
    },
    handleChangeAge(data){
      this.age = data.age;
    },
    handleEditedAge(){
      this.age += 1;
      // console.log(userAge);
    }
  }
};
</script>

<style>
</style>