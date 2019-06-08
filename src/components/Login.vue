<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      
      <label for="inputUsername" class="sr-only">Username</label>
      <input v-model="name" value="English" type="" id="inputUsername" class="form-control" placeholder="Username" required>
      
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" value="" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
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
    login () {
      console.log(this.username)
      console.log(this.password)
    }
  }
}

</script>