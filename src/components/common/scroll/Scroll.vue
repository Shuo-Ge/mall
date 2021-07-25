<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BatterScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BatterScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      //   console.log(option);
      this.$emit("scroll", position);
    });

    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      //   console.log("上拉加载个半过哦");
      this.$emit("pullingUp");
    });

    this.scroll.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, Time = 500) {
      this.scroll.scrollTo(x, y, Time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style>
</style>