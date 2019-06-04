<template>
  <div id="app">
    <v-app>
      <top-bar/>
      <div class="mt-5"/>
      <home/>
      <notifications group="foo" position="bottom right" />
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
    Home,
  }
};
</script>
