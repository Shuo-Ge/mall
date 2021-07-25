<template>
  <div class="tab-bat-item" @click="clickitem">
    <div v-if="!isActivity"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-activity"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActivity() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActivity ? { color: this.activeColor } : {};
    },
  },
  methods: {
    clickitem() {
      // console.log(this.path);
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  background-color: #f6f6f6;
}
.tab-bat-item {
  flex: 1;
  height: 56px;
  text-align: center;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.tab-bat-item img {
  width: 24px;
  height: 24px;
}
.active {
  color: red;
  font-weight: bold;
}
</style>