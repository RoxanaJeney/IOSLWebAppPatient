<template>
  <div id="app">
    <v-app>
      <top-bar/>
      <router-view class="mt-5"/>
      <div class="mt-5"/>
      <notifications group="foo" position="bottom right" />
    </v-app>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  poolName: "home",
  components: {
    TopBar,
  }
};
</script>
