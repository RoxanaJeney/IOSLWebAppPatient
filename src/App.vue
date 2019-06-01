<template>
  <div id="app">
    <v-app>
      <top-bar/>
      <router-view class="mt-5"/>
      <home/>
    </v-app>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import Home from "./components/Home";

export default {
  poolName: "home",
  components: {
    TopBar,
    Home
  }
};
</script>
