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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>