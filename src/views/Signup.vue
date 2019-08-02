<template>
  <div class="row">
    <h2 class="col-12">Sign up</h2>
    <div class="col-sm-4 p-1" v-for="signup in signups" :key="signup"></div>
    <SignupCard />
  </div>
</template>
<script>
import SignupCard from "@/components/SignupCard.vue";

import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },

  computed: mapState(["signupCard"]),
  components: { SignupCard },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("signup", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
