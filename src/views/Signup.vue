<template>
  <div class="container">
    <h1>State Manager</h1>
    <h2>Signup</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="user.name"
              aria-describedby
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="user.email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        pass: ""
      }
    };
  },
  methods: {
    ...mapActions(["saveUserID"]),
    onSubmit() {
      this.saveUserID(this.user);
    }
  }
};
</script>
<style>
</style>
