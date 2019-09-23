<template>
    <div class="user">
        <p>Ten toi la {{ name }}</p>
        <p>Toi nam nay {{ age }} tuoi</p>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <user-detail></user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <user-edit></user-edit>
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
  }
};
</script>

<style>
</style>