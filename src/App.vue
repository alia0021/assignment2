<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'signup'}">Signup</router-link>|
      <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 80rem;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
</style>
