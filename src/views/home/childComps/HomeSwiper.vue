<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banners" :key="index" @load="imageLoad">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$emit("swiperImageLoad");
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>