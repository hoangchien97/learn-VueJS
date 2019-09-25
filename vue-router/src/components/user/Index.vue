<template>
  <div>
    <h1>User Index</h1>
    <div class="card">
      <ul class="list-group list-group-flush">
        <router-link
          tag="li"
          to="user/1" 
          class="list-group-item"
          style="cursor: pointer"
        >User 1
        </router-link>
        <router-link
          tag="li"
          to="user/2" 
          class="list-group-item"
          style="cursor: pointer"
        >User 2
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>