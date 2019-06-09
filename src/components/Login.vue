<template>
<v-layout row wrap align-center justify-center>
<v-flex xs6 offset xs-1 sm5 offset-sm1 >
<v-card max-width = "500px" height = "500px">
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="text-md-center" centered>Please log in</h2>
      
      <label for="inputUsername" class="sr-only">Username</label>
      <input v-model="name" value="English" type="" id="inputUsername" class="form-control" placeholder="Username">
      
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" value="" type="password" id="inputPassword" class="form-control" placeholder="Password">
      
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Log in</button>
    </form>
  </div>
</v-card>
</v-flex>
</v-layout>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "Home", params: { username: this.username }})
    },
  }
}

</script>