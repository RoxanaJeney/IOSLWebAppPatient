<template>
<v-layout row wrap align-center justify-center>
<v-flex xs6 offset xs-1 sm5 offset-sm1 >
<v-card max-width = "500px" height = "500px">
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="text-md-center" centered>Please log in</h2>
      
      <label for="username" class="sr-only">Username</label>
      <input v-model="username" value="English" type="" id="username" class="form-control" placeholder="username">
      
      <label for="password" class="sr-only">Password</label>
      <input v-model="password" value="" type="password" id="password" class="form-control" placeholder="password">
      
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
      password: '',
    }
  },
  methods: {
    login() {
      const params = {'username': this.$data.username, 'password' : this.$data.password};
      this.$http.post('login', params).then(function () {
        // Success
        
        this.$store.dispatch('retrieveToken', {
          username: this.username,
          password: this.password,
        }),

        this.$router.push({ name: "Home"})

        },function () {
          // Error
         this.$notify({
                    group: 'foo',
                    title: 'Failure Message',
                    text: 'Login failed!',
                    type: 'errors'
                });

        });

    },
  }
}

</script>