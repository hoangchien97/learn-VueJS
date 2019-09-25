<template>
  <div>
    <h1>User Edit</h1>
    <p>User infor Client: </p>
    <ul>
      <li>
        Locate: {{ $route.query.locate }}
      </li>
      <li>
        Browser: {{ $route.query.browser }}
      </li>
    </ul>
    <button type="button" class="btn btn-danger"
      @click="show"
    >
    Delete</button>
    <div style="height: 1700px"></div>
    <h3 id="react">Learn React with Sky Albert</h3>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        status: false
      }
    },
    methods:{
      show(){
        this.status = true;
        alert('OKEY');
      }
    },
    // su kien nay xay khi truoc khi roi` bo router nay sang router khac
    beforeRouteLeave (to, from, next) {
      if(this.status){
        next();
      }else{
        if(confirm('Are you sure ? Any data will not save !!!')){
          next();
        }else{
          next(false);
        }
      }
    }
  }
</script>

<style>

</style>