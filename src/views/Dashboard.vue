<template>
  <div>
    <h1>Dashboard</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Welcome Frah!</h5>
        <p class="card-text">Your sign up email is lala@gmail.com</p>
        <a href="#" class="card-link">CLEAR DATA</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: mapState(["SignupDetails"]),
  methods: {}
};
</script>
