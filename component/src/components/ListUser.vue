<template>
  <div class="list-user">
    <table class="table table-inverse table-responsive tbl-user-list">
        <thead class="thead-inverse">
            <tr>
            <th>Name</th>
            <th>Location</th>
            <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in listUser" :key="index">
            <td scope="row">
                <a @click="selectUser(user)">{{ user.name.title }} - {{ user.name.last }} {{ user.name.first }}</a>
            </td>
            <td>{{ user.location.city }}</td>
            <td>{{ user.dob }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import data from "./../../data.json";
export default {
    data() {
        return {
            listUser: data
        };
    },
    methods: {
        selectUser(user){
            this.$emit('selectUser',user);
        }
    }
};
</script>

<style lang="css" scoped>
    .tbl-user-list {
    width: 100%;
    }
    .tbl-user-list td{
        padding: 8px 15px;
    }
</style>