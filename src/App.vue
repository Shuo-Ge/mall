<template>
  <div id="app">
    <keep-alive> <router-view></router-view> </keep-alive>
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
