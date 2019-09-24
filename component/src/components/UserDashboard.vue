<template>
  <div class="user-dashboard">
        <div class="list-user">
            <!-- Listen event 'userSelected' emitted from child and process it using 'childrenSelectUser' -->
            <ListUser @userSelected="childrenSelectUser"></ListUser>
        </div>
        <hr/>
        <div class="user-detail">
            <!-- pass 'userSelectedFromChild', child will use props 'userDetailInfo' -->
            <UserDetail :userDetailInfo="userSelectedFromChild"></UserDetail>
        </div>
  </div>
</template>

<script>
import ListUser from './ListUser';
import UserDetail from './UserDetail';
export default {
    data(){
        return{
            userSelectedFromChild: {}, // khai bao data
        }
    },
    components:{
        ListUser,
        UserDetail
    },
    methods:{
        childrenSelectUser(user){
            // console.log(user);
            this.userSelectedFromChild = user;
            
        }
    }
};
</script>

<style>
</style>