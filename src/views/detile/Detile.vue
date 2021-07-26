<template>
  <div id="detile">
    <DetileComps></DetileComps>
  </div>
</template>

<script>
import DetileComps from "./detileComps/DetileComps.vue";
export default {
  components: {
    DetileComps,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
</style>