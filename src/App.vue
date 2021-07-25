<template>
  <div id="app">
    <router-view></router-view>
    <Maintabbar class="mainbbar"></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from "components/content/maintabbar/mainTabbar.vue";
export default {
  name: "App",
  components: {
    Maintabbar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
.mainbbar {
  z-index: 999;
}
</style>
