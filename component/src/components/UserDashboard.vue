<template>
  <div class="user-dashboard">
        <div class="list-user">
            <ListUser></ListUser>
        </div>
        <div class="user-detail">
            <UserDetail></UserDetail>
        </div>
  </div>
</template>

<script>
import ListUser from './ListUser';
import UserDetail from './UserDetail';
export default {
    components:{
        ListUser,
        UserDetail
    }
};
</script>

<style>
</style>