<template>
  <div class="container">
    <h2>Dashboard</h2>
    <div class="main">
      <h3>Welcome {{ user.name }}</h3>
      <p>Your signup email is {{ user.email }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  }
};
</script>
