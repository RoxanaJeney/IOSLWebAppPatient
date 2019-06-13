<template>
  <div id="app">
    <v-app>
      <top-bar/>
      <router-view name="navigation"></router-view>
      <router-view class="mt-5"/>
      <div class="mt-5"/>
      <notifications group="foo" position="bottom right" />
    </v-app>
  </div>
</template>

<script>

export default {
  poolName: "home",
            
};
</script>
